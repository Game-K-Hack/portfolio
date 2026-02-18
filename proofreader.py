
##############################################################################
##                               ▄▄                      ▄▄                 ##
##                              ██                       ██                 ##
##     ████▄ ████▄ ▄███▄ ▄███▄ ▀██▀ ████▄ ▄█▀█▄  ▀▀█▄ ▄████ ▄█▀█▄ ████▄     ##
##     ██ ██ ██ ▀▀ ██ ██ ██ ██  ██  ██ ▀▀ ██▄█▀ ▄█▀██ ██ ██ ██▄█▀ ██ ▀▀     ##
##     ████▀ ██    ▀███▀_▀███▀  ██_ ██    ▀█▄▄▄ ▀█▄██ ▀████ ▀█▄▄▄ ██        ##
##     ██| |_  __ _ _ _| |___  __| |__                                      ##
##     ▀▀| ' \/ _` | '_| / _ \/ _| / /                                      ##
##     by|_||_\__,_|_| |_\___/\__|_\_\                                      ##
##############################################################################

import os
from datetime import datetime



distpath = os.path.join(os.path.dirname(os.path.realpath(__file__)), "dist")
if not os.path.exists(distpath):
    print("[-] Le dossier 'dist' n'existe pas, veuillez build le projet avant de le pousser sur le serveur\n\tCommande: npm run build\n")
    quit()



# Update time in sitemap
with open(os.path.join(distpath, "sitemap.xml"), "r", encoding="utf8") as file: 
    sitemap_content = file.read()
date = sitemap_content.split("<lastmod>")[1].split("</lastmod>")[0]
oldstr = f"<lastmod>{date}</lastmod>"
newstr = '<lastmod>' + datetime.now().strftime("%Y-%m-%d") + '</lastmod>'
new_sitemap_content = sitemap_content.replace(oldstr, newstr)
with open(os.path.join(distpath, "sitemap.xml"), "w", encoding="utf8") as file:
    file.write(new_sitemap_content)
print("[+] Date 'sitemap.xml' mis à jour")



# Create default_index.html
with open(os.path.join(distpath, "default_index.html"), "w", encoding="utf8") as file:
    with open(os.path.join(distpath, "index.html"), "r", encoding="utf8") as basefile:
        file.write(basefile.read())
print("[+] Fichier 'default_index.html' créé")
