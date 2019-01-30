---
title: "OTRS-Bug beim System-Protokoll?"
description: "Fehlende Berechtigung in Datenbank wird nicht Protokolliert"
date: 2019-01-28T23:00:00+01:00
tags: ["Technik", "OTRS"]
draft: false
keywords: ["OTRS", "Bug"]
---

# OTRS ignoriert fehlende Datenbank-Berechtigungen im System-Protokoll

[OTRS](https://de.wikipedia.org/wiki/Open_Technology_Real_Services) ist ein ganz gutes Ticket System, welches auch ziemlich weit verbreitet ist. Im Rahmen meines Abschlussprojektes vor einigen Jahren und meiner weiteren Arbeit habe ich bereits ein paar Erweiterungen aka. Pakete geschrieben, die bei uns an der Uni auch eingesetzt sind und ganz gut laufen. Generell finde ich die Code-Qualität sowie die Dokumentation sehr gut, was das Entwickeln angenehm macht.

In der vergangenen Woche habe ich etwas vergleichsweise triviales gemacht, und eines meiner Pakete umbenannt, da die nutzer vom bisherigen Namen etwas überfordert waren. Abgesehen von einigen Änderungen in den Übersetzungsdateien habe ich noch die Dokumentation anfassen müssen - Aber das war es dann auch schon. Dennoch teste ich natürlich auch noch so kleine Änderungen, da ich inzwischen gelernt habe, dass ein Byte durchaus einen großen Unterschied machen kann. Beim Testen habe ich dann eine Datenbank aufgesetzt und alles schien zu funktionieren. Die Oberfläche zeigte genau das was ich erwartete und im System-Protokoll tauchten auch keine Fehler auf. Ein Blick in die Datenbank zeigte mir dann aber recht schnell, dass doch nicht alle Daten so abgespeichert wurden, wie ich es erwartet hatte.

Natürlich könnte ich innerhalb meiner Erweiterung vielleicht eine Prüfung einbauen, ob ein Datensatz nun wirklich in der Datenbank gelandet ist oder nicht. Ich hatte mich da bisher auf den Rückgabe-Wert der INSERT-Funktion verlassen. Aber dieser lieferte mir immer einen positiven Wert zurück. Und auch im System-Protokoll von OTRS erschienen keine Fehlermeldungen. Das erschwerte die Suche nach der Fehlerursache enorm. Ich wunderte mich, dass es nur bei einer Tabelle Probleme gab, Datensätze hinzuzufügen. Nach einer Stunde hatte ich herausgefunden, dass es im Grunde etwas triviales war und nur ein GRANT gesetzt werden musste, damit der User auf die Tabelle SELECT und INSERT Rechte hat. Diese hatten ihm zuvor offensichtlich gefehlt. Interessanterweise weiß ich aber genau, dass ich schon mal Fehlermeldungen im Protokoll gesehen hatte, die sich über fehlende Berechtigungen beschwerten. Ich weiß noch immer nicht genau, wieso OTRS diese Meldungen in meinem Fall nicht auch ausgegeben hatte. Vielleicht sollte da noch mal jemand bei Zeiten ein wenig mehr recherchieren?
