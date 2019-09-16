Timmers Blog
============

Dieses Repository enthält [Timmers Blog](https://mariustimmer.de/). Die Inhalte sind dabei als Markdown Dateien unter [/contents](contents "Inhalte") auffindbar. Alle weiteren Inhalte (_Bilder, herunterladbare Inhalte, etc._) sind unter [/static](static "Statische Dateien") zu finden. Um die statische Webseite zu generieren, wird [Hugo](https://gohugo.io/) benötigt. Grundlegende Einstellungen der Seite können in der [/config.toml](config.toml "Konfiguration") bearbeitet werden. Durch das [/Makefile](Makefile "Makefile") kann bei installiertem Hugo der Inhalt der Seite aus dem Markdown generiert und mit den statischen Inhalten zusammengeführt werden, bevor sie anschließend hochgeladen werden. Wichtig ist, dass die Datei `/home/timmer/.ftppassword` existiert und das FTP-Passwort des Servers enthält und das Theme [Minimal](https://themes.gohugo.io/minimal/) als Submodul auf dem Branch `customized` ausgecheckt wurde.

```bash
# Generieren und hochladen der Webseite:
$ make
```
