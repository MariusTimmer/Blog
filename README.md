Timmers Blog
============

Dieses Repository enthält [Timmers Blog](https://mariustimmer.de/).
Die Inhalte sind dabei als Markdown Dateien unter [docs](docs) auffindbar.
Alle weiteren Inhalte (_Bilder, herunterladbare Inhalte, etc._) sind im
[public](docs/public/)-Verzeichnis zu finden. Um die statische Webseite
zu generieren, wird [Vitepress](https://vitepress.vuejs.org/) eingesetzt,
was wiederum `npm` benötigt.

Grundlegende Einstellungen der Seite können in
[config.ts](docs/.vitepress/config.ts) bearbeitet werden.

Entwicklung
-----------
Es wird empfohlen, eine NPM-fähige IDE zu benutzen (_z.B. IntelliJ_),
es ist aber keine Voraussetzung.

Vor der ersten Ausführung müssen alle Abhängigkeiten einmal per `npm update`
installiert werden. Zum Entwickeln und Verfassen neuer Beiträge kann mit
`npm run docs:dev` lokal gearbeitet werden. Das fertige Produkt wird
anschließend per `npm run docs:build` erzeugt und im
[dist](docs/.vitepress/dist)-Ordner abgelegt. `npm run docs:preview` wird für
Pages per CI benötigt. Mit dem Skript `npm run process:images` werden alle
Bilder als webp-Dateien in verschiedenen Auflösungen erzeugt. Dies
sollte vor dem Erzeugen und auch vor der lokalen Entwicklung ausgeführt
werden. `npm run process:posts` scannt alle Beiträge und erzeugt die JSON-Dateien
[postData.json](docs/postData.json) sowie [tagData.json](docs/tagData.json),
die für die Navigation und die Beitrags- und Tags-Liste benötigt werden.
