---
title: "Das Ende der OTRS Community Edition?"
date: 2021-01-12T10:00:00+02:00
draft: false
author: "Marius Timmer"
keywords: ["OTRS", "Community Edition", "OTRS AG", "Znuny", "KIX", "c.a.p.e. IT GmbH", "Hochschulen"]
description: "Die OTRS AG hat die rechtzeitige Veröffentlichung der Community Edition in Version 7 versäumt und damit für viel Aufruhe gesorgt."
---

Das Ticket-System <abbr title="Open Technology Real Services">[OTRS](https://de.wikipedia.org/wiki/Open_Technology_Real_Services)</abbr> wird weltweit viel für die Kommunikation zwischen Firmen und Kunden eingesetzt. Außerdem setzen es auch Hochschulen wie unsere ein, um einen einheitlichen Kommunikationsweg zu den Studierenden, Mitarbeitenden und Außenstehenden zu pflegen. Bei uns bin ich unter Anderem Serveradministrator und habe die ein oder andere Erweiterung für das System entwickelt.

Spontanes End Of Life
---------------------
Einer der (_aus meiner Sicht_) großen Vorteile von OTRS ist die Tatsache, dass es Open Source ist. Das bedeutet, der Code ist offen und kann von jedem eingesehen und sogar verändert werden. Wäre es Closed Source, hätte es mir das Erstellen eigener Erweiterungen damals erschwert, vermutlich aber eher (_aus rechtlicher Sicht_) unmöglich gemacht. Inzwischen bietet die OTRS AG eine kostenpflichtige und eine kostenlose Community Version an. Angekündigt wurde damals, dass die <abbr title="Community Edition">CE</abbr>-Version zwei Jahre nach der <abbr title="Enterprise Edition">EE</abbr> veröffentlicht werden sollte. An Weihnachten kam dann nun aber [die Nachricht](https://otrs.com/release-notes/attention-security-risk-with-otrs-6/), dass die aktuelle CE 6 Version am 1. Januar <abbr title="End of life">EOL</abbr> erreichen würde und daher keine Sicherheitsupdates mehr kommen. Man solle so schnell wie möglich die Version wechseln. Der Witz dabei ist aber, dass die neuere CE Version 7 noch gar nicht veröffentlicht wurde und ein Update daher gar nicht möglich ist. Würde die OTRS AG sich an die besagten zwei Jahre halten, hätte schon im November die neue Version veröffentlicht werden müssen.

LTS von Znuny
-------------
In der Community herrscht nun natürlich viel Verunsicherung darüber, wie man reagieren soll, so zumindest in den mir bekannten Mailinglisten. Etwa doch ein Wechsel zu [KIX der c.a.p.e. IT GmbH](https://www.kixdesk.com/) oder etwa auf die Enterprise Edition? Die Firma [Znuny](https://www.znuny.com/de), welche OTRS-Produkte entwickelt, hat kurzfristig [bekannt gegeben](https://tcf4de725.emailsys1a.net/mailing/30/3590863/15751305/109/6a296d41c9/index.html), dass sie gegen Ende Januar eine Version 6.0.31, also ein neues Sicherheitsupdate, und das als **<abbr title="Long time support">LTS</abbr>-Version** veröffentlichen möchten. Dies soll keine neuen Funktionen bieten, sondern nur Sicherheitslücken schließen, um **maximal kompatibel zu OTRS** zu bleiben, damit ein anschließender Wechsel auf OTRS 7 möglichst einfach bleibt, falls die OTRS AG diese Version demnächst veröffentlichen wird.

Diese Version werde ich mir auf jeden Fall einmal auf unserem Test-System ansehen. Vermutlich wird es keine großen Überraschungen dabei geben, auch wenn der _Hersteller_ in diesem Fall nicht mehr der selbe wie bisher ist. Außerdem wurde angekündigt, dass diese neue LTS-Version **öffentlich auf Github** zu finden sein wird, wo man dann auch **an dem Projekt teilnehmen** kann. An dieser Stelle zeigen sich sehr schön die Vorteile von offener Software: Eine Firma versagt bei der Pflege ihres Produktes (_vielleicht weil sie damit kein Geld verdienen?_) und eine andere Firma kann das Produkt anschließend mit der Hilfe der Öffentlichkeit weiter pflegen.

Ich weiß, dass der ein oder andere ebenfalls an der Zukunft von OTRS interessiert sind. Daher werde ich mich hier auf jeden Fall wieder melden, sobald ich das Update zur neuen LTS-Version hinter mich gebracht und mich ein wenig länger damit beschäftigt haben werde.
