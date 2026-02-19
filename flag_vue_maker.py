
#################################################################################################
##      ▄▄▄▄▄▄▄ ▄▄             ▄▄▄▄  ▄▄▄▄            ▄▄▄      ▄▄▄                              ##
##     ███▀▀▀▀▀ ██             ▀███  ███▀            ████▄  ▄████       ▄▄                     ##
##     ███▄▄    ██  ▀▀█▄ ▄████  ███  ███ ██ ██ ▄█▀█▄ ███▀████▀███  ▀▀█▄ ██ ▄█▀ ▄█▀█▄ ████▄     ##
##     ███▀▀    ██ ▄█▀██ ██ ██  ███▄▄███ ██ ██ ██▄█▀ ███  ▀▀  ███ ▄█▀██ ████   ██▄█▀ ██ ▀▀     ##
##     ███      ██ ▀█▄██ ▀████  _▀████▀  ▀██▀█_▀█▄▄▄ ███_     ███ ▀█▄██ ██ ▀█▄ ▀█▄▄▄ ██        ##
##                          ██ | |_  __ _ _ _| |___  __| |__                                   ##
##                        ▀▀▀  | ' \/ _` | '_| / _ \/ _| / /                                   ##
##                          by |_||_\__,_|_| |_\___/\__|_\_\                                   ##
#################################################################################################
## Source: https://github.com/lipis/flag-icons

import os

P = "./flags" # flag-icons/flags/4x3/ → /flags/
SPACE = " "*4
wl = {
    "fr": "fr",
    "gb": "en"
} # white list {"gb": "en"} or None
isfirst = True
snippet_flag = []

for fn in os.listdir(P):
    uid = fn[:-4]
    if uid in wl.keys() or wl == None:
        with open(os.path.join(P, fn), "r", encoding="utf8") as image:
            content = image.read()
        minicontent = "".join([i.strip() for i in content.split("\n")])
        if minicontent.startswith("<svg "):
            cond = "v-if" if isfirst else "v-else-if"
            minicontent = f"<svg {cond}=\"id === '{wl[uid]}'\" " + minicontent[5:]
            snippet_flag.append(minicontent)
            isfirst = False

with open("./src/components/Flag.vue", "w", encoding="utf8") as file:
    file.write("\n".join([
        "<template>", 
        SPACE + ("\n" + SPACE).join(snippet_flag), 
        "</template>", 
        "", 
        "<script>", 
        SPACE + "export default {", 
        SPACE*2 + "props: {", 
        SPACE*3 + "id: { type: String, required: true }", 
        SPACE*2 + "}", 
        SPACE + "}", 
        "</script>", 
        ""
    ]))
