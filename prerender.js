/**
 * Pré-rendu statique du portfolio (SEO).
 *
 * Le site est une SPA Vue : le HTML servi est vide, le contenu est construit
 * par JavaScript. Les robots (Google, aperçu LinkedIn, outils RH) ne voient
 * donc rien. Ce script règle le problème AU BUILD :
 *   1. sert le dossier dist/ en local,
 *   2. ouvre la page dans un vrai Chrome headless (donc navigator/localStorage
 *      /window existent, rien à modifier dans le code Vue),
 *   3. attend que Vue ait tout rendu,
 *   4. écrit le DOM complet dans dist/index.html.
 *
 * Les visiteurs gardent l'appli Vue normale (le JS reprend la main au chargement) ;
 * les robots, eux, reçoivent enfin tout le contenu.
 *
 * À lancer APRÈS `vite build` et AVANT proofreader.py.
 */

import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const DIST = path.join(path.dirname(fileURLToPath(import.meta.url)), "dist");
const PORT = 4390;

const ROUTES = ["/", "/projects"];

const MIME = {
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".mjs": "text/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".woff2": "font/woff2",
    ".webp": "image/webp",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".xml": "application/xml; charset=utf-8",
    ".txt": "text/plain; charset=utf-8",
    ".zip": "application/zip",
    ".md": "text/markdown; charset=utf-8",
};

// --- 1. Serveur statique minimal sur dist/ --------------------------------
function serve() {
    return http.createServer((req, res) => {
        let urlPath = decodeURIComponent(req.url.split("?")[0]);
        let filePath = path.join(DIST, urlPath);
        // fichier inexistant → on renvoie index.html (SPA) ou 404 pour les assets
        if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
            const indexTry = path.join(filePath, "index.html");
            if (fs.existsSync(indexTry)) {
                filePath = indexTry;
            } else if (path.extname(urlPath) === "") {
                filePath = path.join(DIST, "index.html");
            } else {
                res.writeHead(404);
                return res.end("Not found");
            }
        }
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
        fs.createReadStream(filePath).pipe(res);
    });
}

// --- 2 → 4. Rendu + capture ------------------------------------------------
async function run() {
    const server = serve();
    await new Promise((r) => server.listen(PORT, r));
    console.log(`[prerender] serveur local sur http://localhost:${PORT}`);

    const browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox", "--lang=fr-FR"],
    });
    try {
        const page = await browser.newPage();
        await page.setExtraHTTPHeaders({ "Accept-Language": "fr-FR,fr;q=0.9" });

        for (const route of ROUTES) {
            await page.goto(`http://localhost:${PORT}${route}`, {
                waitUntil: "networkidle0",
                timeout: 60000,
            });
            // Sécurité : attendre que Vue ait rempli #app
            await page.waitForFunction(
                () => {
                    const app = document.querySelector("#app");
                    return app && app.children.length > 0;
                },
                { timeout: 60000 }
            );

            const html = "<!doctype html>\n" + (await page.content()).replace(/^<!doctype html>/i, "").trimStart();

            // "/" → dist/index.html, "/projects" → dist/projects/index.html
            const outFile =
                route === "/"
                    ? path.join(DIST, "index.html")
                    : path.join(DIST, ...route.split("/").filter(Boolean), "index.html");
            fs.mkdirSync(path.dirname(outFile), { recursive: true });
            fs.writeFileSync(outFile, html, "utf8");

            const size = fs.statSync(outFile).size;
            console.log(`[prerender] ✅ ${path.relative(process.cwd(), outFile)} regénéré (${size} octets)`);
        }
    } finally {
        await browser.close();
        server.close();
    }
}

run().catch((e) => {
    console.error("[prerender] ❌ échec :", e);
    process.exit(1);
});
