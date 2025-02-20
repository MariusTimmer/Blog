---
title: "Der Umzug meiner Domaine"
description: "Ich habe meinen Hosting-Anbieter gewechselt und bin daher auch mit meiner Domaine umgezogen"
summary: "Nach vielen Jahren habe ich meinen Domain-Provider gewechselt und mich getraut, den Schritt zu wagen. Auch wenn es nach außen keine wirklichen Auswirkungen haben wird, gab es doch einiges zu ändern."
date: "2024-12-08T21:35:24+01:00"
lastMod: "2025-02-19T19:42:23+01:00"
draft: false
keywords:
 - "Hosting"
 - "Domaine"
 - "Blog"
 - "DNS"
 - "Hetzner"
 - "Creoline"
 - "Hugo"
---

## Ich fange ganz vorne an
Die ersten Berührungspunkte mit dem Internet hatte ich in der fünften Klasse, also im Jahr 2004. Damals fing ich im Alter von zehn Jahren bei der [Schülerzeitung, dem Habicht](https://www.calameo.com/read/0015456597b3022087891), an. Da diese AG nur einmal in der Woche statt fand, wir uns aber vielleicht häufiger austauschen mussten, richteten wir damals jeweils unser erstes E-Mail Konto an. Auch wenn ich inzwischen in der IT arbeite und weiß, dass das eigentlich nichts Gutes ist, muss ich zugeben, dass ich dieses Konto bis heute noch aktiv benutze. Deswegen: Alles Gute zum 20. Geburtstag, liebes Web.de-Konto!

## Erste Schritte im Internet
Für die "_Recherche_" konnten wir in der Schule schon ins Internet und auch im neuen Zuhause (_neu gebautes Haus_) gab es plötzlich durch nagelneues DSL dieses Internet. Allerdings nur für maximal eine halbe Stunde am Tag unter Aufsicht der eigenen Mutter, die die ganze Zeit mit einem im Raum war und Wäsche machte. Mich faszinierte dieses Internet so sehr, dass ich mir in den Kopf setzte, auch eine eigene Internetseite zu machen, ohne aber einen Gedanken darauf zu verschwenden, wozu und worüber überhaupt.

## Meine eigene Webseite
Schnell fand ich meinen Weg zum [Homepage Baukasten](https://www.homepage-baukasten.de/) (_oder damals noch "einfach" HPBK_). Im Handumdrehen hatte ich mir meine eigene Seite gebaut, ohne auch nur ein bisschen HTML zu können. Zu der Zeit hatte ich gerade meine ersten Erfahrungen mit C# gemacht, was ich noch mit Hilfe eines Buches offline lernte. Aber schon damals störte es mich, dass die <abbr title="Top level domain">TLD</abbr> meiner Seite `.tl` war. Keine andere Seite die ich kannte (_SchülerVZ oder Google_) hatte diesen Zusatz und ich verstand nicht, was das sollte. Trotzdem betrieb ich diesen Blog einige Jahre lang. Das Internet bestand für mich damals ausschließlich aus E-Mail, SchülerVZ, ICQ und bloggen, ohne aber die Wörter "_Blog_" oder "_Blogging_" zu kennen. In dieser Zeit änderte sich die Seite sehr häufig grundlegend - optisch so wie auch inhaltlich.

## Der Wechsel zu Creoline
Eine eigene Seite im Internet war schon ziemlich cool, auch wenn es keinerlei Konzept dahinter gab. Die TLD `.tl` am Ende störte mich aber schon immer. Während des Abis 2012 lernte ich dann einen ehemaligen Mitschüler noch mal ganz neu kennen. Er hatte sich schon als Provider selbsständig gemacht. Ich war begeistert und so ergab es sich, dass ich meine eigene Domain und das dazugehörige Hosting Paket bei [Creoline](https://www.creoline.com/de) erhielt. Zuerst baute ich Webseiten komplett von Hand in HTML mit rudimentären CSS-Kenntnissen. Irgendwann lerne ich PHP und WorPress kennen. Ein Jahr lang experimentierte ich mit immer neuen Instanzen herum. Einen Sommer lang schrieb ich meine erste größere PHP-Anwendung: Eine Mischung aus Facebook und SchülerVZ, wo sich meine Freunde anmelden konnten um Nachrichten zu schreiben und Profile zu gestalten. Das ist noch mal einen ganz eigenen Beitrag wert.

## Erweiterung zu Hetzner
Während meiner Ausbildung holte ich mir einen Root-Server bei Hetzner, den ich bis heute betreibe. Von DNS hatte ich erst noch keine Ahnung, weswegen ich lange mit [DynDNS](https://www.ddnss.de/) oder auch [No-IP](https://www.noip.com/de-DE) gearbeitet habe. Da ich für meinen "_Blog_" aber schon meine eigene Domain hatte, nutzte ich für meine Hetzner-Maschine irgendwann eine Subdomain, als ich das Prinzip verstanden hatte. Meinen Root-Server nutzte ich in den vielen Jahren um mich per SSH anzumelden und Mails in der Konsole abrufen zu können, aber auch um Mail-, Jabber, Minecraft und andere Server aufzusetzen.

## Zusammenlegung von allem
Mit diesem doppelten System bin ich immer gut gefahren. Ehrlich gesagt habe ich es aber auch nie hinterfragt, weil es es nicht schlecht fand, die Systeme getrennt zu lassen. Vermutlich, damit der öffentliche Blog nicht zu viel Aufmerksamkeit auf meine anderen Dienste zieht. Allerdings ist das immer unwichtiger geworden und eine Firewall kann ich inzwischen auch schon installieren.

Fürs Blogging nutze ich lange schon Hugo, da ich meine Inhalte so auch recht einfach mit git versionieren kann. Gerade ein eigener Root-Server bietet eine Reihe von Vorteilen, wenn es ums Deployment des BLogs angeht. Änderungen committe ich sowieso immer direkt. Nun kann dann ein Cronjob meine letzten Änderungen einfach pullen, mit Hugo zusammen bauen und eben in das passende Verzeichnis schieben. Das ist das komplette Deployment, aber schön weg automatisiert.

Für euch als Besucher des Blogs hat mein Umzug keinerlei Auswirkungen, mir macht es aber vieles einfacher und ich brauche ein Hosting-Paket weniger. Unter der Haube sind meine nebenbei laufenden Dienste so natürlich eher dem wilden Internet ausgesetzt, aber ich denke, damit werden mein Server und ich schon klar kommen.



---
PS: Für diesen Beitrag habe ich die Ausgabe der Schülerzeitung im Internet gefunden. Ich finde kein anderes Wort als: Wild! Nahezu alles ist in Schwarz und Weiß, die Formatierung ist gruselig und auf Seite 47 befindet sich ein ganz schreckliches Foto von mir. Zeitgleich war es ein absurder Trip in die Vergangenheit. Wie wollen wir zukünftigen Generationen nur beschreiben, wie diese Zeitperiode funktionierte und vor allem, wie es sich anfühlte? :D
