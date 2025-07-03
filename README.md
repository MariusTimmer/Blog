# Timmers Blog

## Allgemeines
Dieses Repository enthält [Timmers Blog](https://mariustimmer.de/).
Alle Inhalte (_Seiten und Beiträge_) sind dabei als Markdown Dateien,
einschließlich ihrer Metadaten in Form von Frontmatter, unter
[content](content) auffindbar.
Alles Weitere wie Bilder, Videos, herunterladbare Inhalte, usw. sind im
[static](static)-Verzeichnis zu finden. Um die statische Webseite
zu generieren, wird [Hugo](https://gohugo.io/) eingesetzt.

## Konfiguration
Grundlegende Einstellungen der Seite können in der
Hugo-[Konfiguration](hugo.json) bearbeitet werden.

## Theme
Als Theme kommt ein eigener [Fork](https://github.com/MariusTimmer/Mainroad)
von [Mainroad](https://github.com/Vimux/Mainroad) zum Einsatz, da dieser auf
dem [feature_heading](https://github.com/MariusTimmer/Mainroad/tree/feature_heading)-Branch
einige Modifikationen und Korrekturen beinhaltet. Das Repository wird auch
als git-Submodul eingebunden.