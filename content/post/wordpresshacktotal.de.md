---
title: "Wordpress Hack total"
date: "2021-11-01T18:00:00+02:00"
draft: false
author: "Marius Timmer"
keywords: ["Wordpress", "Hack", "Skript", "Angriff", "Fakeshop", "Hetzner", "PHP"]
tags: ["Technik"]
description: "Mal wieder wurde die WordPress-Instanz meiner Mutter angegriffen"
summary: "Erneut wurde die WordPress-Instanz meiner Mutter angegriffen. Dieses mal gehe ich der Sache weiter auf den Grund und versuche herauszufinden, wie das passiert ist, was es macht und vor allem, wo es her kommt."
---

Wie Ihr ja sicher schon gelesen habt, ist meine Mutter selbstständig und hat
daher auch eine [Webseite](https://tanjakoester.de/). Der Einfachkeit halber
wurde das damals mit WordPress realisiert und auch in der Vergangenheit
[bereits gehackt](/post/wordpresshack) (_wenn auch geskriptet_).

Kein gezielter Angriff
----------------------
An dieser Stelle sei noch einmal erwähnt, dass ich ungerne sage, dass
die Seite _gehackt wurde_, weil das der Sache nicht ganz gerecht wird
und zu nebulös ist. Vor allem vermittelt es dein Eindruck, dass es sich
um einen gezielten Angriff handeln würde. Oft muss ich dann erst einmal
erklären, dass da nicht jemand in seinem Keller saß, einen Hoodie trägt
und sich vor nimmt, gezielt Webseiten anzugreifen. Viel eher sind es
einfach Skripte (_also Computerprogramme_) von teilweise sogenannten
Skript Kiddies, die automatisiert und wahllos auf bekannte Schwachstellen
losgelassen werden und dann dort ihr Werk verrichten. Leider ist WordPress
voll mit bekannten Schwachstellen, auch wenn man es regelmäßig aktualisiert.

Neue Version
------------
Nachdem ich besagte Installation per Cronjob alle fünf Minuten prüfte
und ggf. säuberte, schien eine lange Zeit alles wieder okay zu sein.
Allerdings hatte sich nun wohl eine neue Version des Skriptes installiert
oder irgendein Ereignis wurde getriggert. Fakt ist auf jeden Fall, dass
sich die Skripte dieses mal ganz anders verhalten haben:

 - Ein Dateibrowser (_in PHP geschrieben_) wurde installiert
    - So ließen sich alle Dateien auf dem Server einsehen und manipulieren
    - Da so auch Datenbank-Zugangsdaten erreichbar sind, war die Datenbank ebenfalls als kompromitiert anzusehen
    - Alle Inhalte wurden gelöscht und per [`.htaccess`](https://de.wikipedia.org/wiki/.htaccess) ein [Forbidden-Status](https://developer.mozilla.org/de/docs/Web/HTTP/Status/403) zurück gegeben

Als ich informiert wurde, dass "_irgendetwas nicht mit der Seite stimmt_"
dauerte es noch ein paar Stunden, bis ich mir das näher ansah. Bis dahin
ging ich davon aus, dass jemand aus Versehen die `index.php`-Datei gelöscht
hatte. Nach wenigen Sekunden bemerkte ich, dass aber auch alles andere
gelöscht war. Das überraschte mich. Zudem lagen dort nur einige Skripte,
von denen ich noch nie etwas gehört hatte. direkt auf dem Server sah ich
mir die Skripte genauer an: Es handelte sich um PHP-Code, der einen
URL-encodierten String enthielt, der fast zwanzig mal durch `eval()`
gejagt wurde und dann seinen eigentlichen Code ausführte. So kann man
vielleicht Scannern entkommen, aber nicht mehr (_bei näherer Betrachtung_).
Es handelte sich um einen Dateibrowser, der es dem Nutzer erlaubte,
die Dateien auf dem Server per HTML-Formular zu manipulieren. Das ist
natürlich ein super <abbr title="Größter anzunehmender Unfall">GAU</abbr>.

Backups
-------
Aus Sicherheitsgründen werden nächtlich Backups von den gesamten
Datenverzeichnissen angelegt. Im Notfall kann man so recht einfach
auf einen vorherigen Zustand zurück und einen potentiellen Schaden
gering halten.

In diesem Fall wäre das Wiederherstellen eines Backups aber nicht ratsam,
da ja auch der Schadcode wiederhergestellt werden würde und alles wieder
von vorne beginnen würde.

Die Lösung
----------
Meiner Meinung nach war das Sicherste in diesem Szenario auch zeitgleich
die aufwändigste Lösung: Alles platt machen und neu aufziehen. Zu meiner
Überraschung ging meine Mutter da voll mit und beschloss auch, einen
anderen Hosting-Provider zu nutzen. Aus meiner Sicht sprach da nichts
gegen und es ist nahezu ausgeschlossen, dass man den Schadecode "_mit nehmen_"
würde.

Manch einer mag argumentieren, dass das natürlich mit Kanonen auf Spatzen
geschossen sein, aber sicher ist sicher. Weder ich noch meine Mutter hätten
die Muse gehabt, die Fehlerquelle zu finden, auszumärzen und anschließend
alles wieder neu aufzubauen.

Im letzten Beitrag hatte ich bereits Einblicke in die Schadsoftware gegeben.
Diese Schnitzeljagd war relativ interessant. Dennoch wollte ich der Sache nicht
weiter gehen, da es mich am Ende auch nicht weiter bringen würde.
