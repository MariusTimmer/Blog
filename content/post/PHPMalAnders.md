---
title: "PHP mal anders"
date: 2018-11-28T23:50:25+01:00
tags: []
draft: false
keywords: ["PHP", "Programmierung", "Softwareentwicklung", "C", "GnuPG", "GPG", "PGP", "Verschlüsselung", "php-gpg"]
video: ""
---

# PHP mal anders
Ursprünglich wurde die Programmiersprache `PHP` als Werkzeug zur Gestaltung dynamischer Webseiten ins Leben gerufen. Daher war es auch ursprünglich die Abkürzung für "_Personal Home Page Tools_" (_rekursives Akronym_)[1]. Und in der Tat ist es auch noch immer eine der am weitesten verbreitetsten Programmiersprachen für Webanwendungen. Generell ist es dem Interpreter der Sprache dabei aber völlig egal, ob am Ende ein HTML-Dokument, oder XML-, JSON-, etc. Strukturen dabei raus kommen, was sehr viel Flexibilität bringt.

Vor einigen Monaten hatte ich mir bereits Cronjobs[2] geschrieben, die nicht mehr als Webanwendungen zu erkennen sind. Unter anderem tat ich Dinge, die man eher aus `C`[3] kennt, wie zum Beispiel das Forken[4] von Prozessen und Abfangen von Signalen[5]. Wenn man allerdings weiß, dass `PHP` in `C` geschrieben ist, verwundert einen das auch nicht mehr groß. Wer nun aber auf den Gedanken kommt, dass ich daher eigentlich besser `C` programmieren sollte, es aber nicht mache, weil das zu krass für mich ist und ich lieber in einer typenunsicheren Noob-sprache entwickel, dem sei gesagt: Genau so ist es. Generell kann ich `C` (_die PostgreSQL-Entwicklungen sind immer in `C`_) und ich liebe es auch, aber im Vergleich zu PHP ist es mir zu starr, was merkwürdig ist, weil es auch gleichzeitig genau das ist, was ich daran mag.

Mein aktuelles Projekt ist eine PHP-Anwendung, die auf jedem Knoten eines dezentralen Netzwerkes ausgeführt wird. Dabei wird ein Server-Socket gestartet und in regelmäßigen Abständen tauschen diese Knoten sich untereinander aus, um ihre neuen IP-Adressen und Zustände zu synchronisieren. Und weil das Forken und Nutzen von Server- sowie Client-Sockets noch zu langweilig ist, wird die Kommunikation dabei mit Hilfe von GnuPG[6] verschlüsselt, was einen sehr hohen Grad der Sicherheit (_zumindest für die direkte Kommunikation_) bringt. Leider habe ich noch keine PHP-Anwendung gesehen, die die GnuPG-Erweiterung wirklich nutzt, was ich schade finde. Aber um so erstaunter bin ich gewesen, als ich erfuhr, dass es generell unterstützt wird und bei meinen eigenen Tests auch sehr gut funktionierte.

Ich schätze, dass dies wieder einer dieser Posts ist, die euch nicht weiter bringen. Aber irgendwo wollte ich einmal kund tun, dass ich ein großer Freund von `PHP` und GnuPG bin und mich sehr darüber freue, dass man es tatsächlich auch vereint nutzen kann.

[1]: https://de.wikipedia.org/wiki/PHP
[2]: https://de.wikipedia.org/wiki/Cron
[3]: https://de.wikipedia.org/wiki/C_(Programmiersprache)
[4]: https://de.wikipedia.org/wiki/Fork_(Unix)
[5]: https://de.wikipedia.org/wiki/Signal_(Unix)
[6]: https://de.wikipedia.org/wiki/GNU_Privacy_Guard