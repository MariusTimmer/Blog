---
title: "Reparatur meiner Mastodon Instanz"
description: "Nachdem mein Mastodon seit Langem nicht mehr funktioniert, wurde es nun Zeit, dass ich mir die Sache mal ansehe"
date: 2024-02-02T11:00:00+01:00
tags:
  - Technik
  - Mastodon
draft: false
---

Updates sind mir wichtig
------------------------
Wer selber Anwendungen im Internet hostet weiß, wie wichtig es ist, regelmäßige Updates durchzuführen. Wer das nicht tut, erspart sich zwar eine Menge Stress, riskiert (_besser: bettelt darum_) auf der anderen Seite aber seine Kiste aufgehebelt zu bekommen. Kein Administrator möchte, dass sich jemand Fremdes Zugriff auf seine Systeme verschafft.

Daher aktualisiere ich natürlich auch nicht nur das Betriebssystem meiner Server, sondern auch die Programme, die ich dort laufen habe. Unter Anderem eben auch Mastodon. Da Mastodon zu einem großen Teil in Ruby geschrieben ist, wovon ich nur eingeschränkt Ahnung habe, sind die Updates für mich nicht immer ganz einfach, aber dafür spannend durchzuführen.


Es ist etwas schief gelaufen
----------------------------
Nach dem letzten Update, was auch schon wieder ein halbes Jahr zurück liegt, lief immerhin der eigentliche Server. So konnte ich per Handyapp oder auch Client auf meinen PCs ganz normal Toots absetzen und Toots von Leuten, denen ich folge, lesen. Allerdings lies sich die Instanz nicht mehr über den Browser aufrufen.

Lange Zeit war das für mich so in Ordnung, weil der Kern der Anwendung ja noch lief. Aber irgendwie störte es mich trotzdem etwas. Es fühlte sich halt auch nicht mehr ganz rund an. Immer wieder versuchte ich im Internet mögliche Ursachen zu recherchieren. Jedes mal wenn ich etwas fand, probierte ich es bei mir aus um am Ende zu merken, dass es nichts brachte, oder sogar noch schlimmer geworden war.


Letzte Lösung: Der Kahlschlag
-----------------------------
Um meine Mastodon-Instanz endlich wieder sauber laufen lassen zu können, entschloss ich mich zu einem drastischen Schritt: Der Kahlschlag. Das Löschen der gesamten Datenbank, Dateien und der gesamten Anwendung um es komplett neu aufsetzen zu können. Einen Verlust aller bisherigen Daten, Einstellungen und Posts/Toots hatte ich eigentlich verhindern wollen, allerdings wurde mir immer mehr klar, dass kein Weg drum herum führen wurde, wenn ich nicht noch weitere Monate mit erfolgloser Fehlerdiagnose verbringen wollte.

Die Neuinstallation kostete mich knapp eine Stunde Arbeit, kann sich im Ergebnis aber wieder sehen lassen. Sämtliche Assoziationen nach außen zu anderen Instanzen oder verlinkte Toots sind natürlich weg und ungültig, aber das wird mit der Zeit alles wieder von alleine kommen.

Meine Aufgabe ist es nun also wieder, aktiver auf Mastodon zu werden, Leuten zu folgen, zu tröten und mich einfach weiter mit der Anwendung auseinander zu setzen um sie noch besser zu verstehen.


Fazit
-----
Mein Eindruck ist auch, dass einer der nun durchgeführten Versionswechsel auch die Konfiguration und das generelle Verhalten von Mastodon verbessert hat. Bisher bin ich wirklich sehr zufrieden mit der neuen Instanz und hoffe natürlich, dass das auch so bleiben wird.

Falls es euch interessiert, findet ihr mich noch immer unter: [@timmer@mastodon.mariustimmer.de](https://mastodon.mariustimmer.de/@timmer).
