+++
date = "2019-01-29T20:26:17+01:00"
draft = false
title = "Referenzen"
author = "Marius Timmer"
+++

## OTRS Plugins
Da wir bei uns [OTRS](https://de.wikipedia.org/wiki/Open_Technology_Real_Services) als Ticket-System einsetzen, habe ich im Laufe der letzten Jahre einige Erweiterungen geschrieben, welche alle auch genutzt werden:

 - [Queueadmin](https://zivgitlab.uni-muenster.de/mtimm_01/OTRS_TemplateSignatureAddOn)-Erweiterung
   Als Abschlussprojekt meiner Ausbildung schrieb ich die sogenannte Queueadmin-Erweiterung für OTRS, welche die Mandantenfähigkeit bei der Verwaltung von Antwortvorlagen und E-Mail-Signaturen einführt. Sie ermöglicht das Ernennen von sogenannten Queueadmins. Diese können dann unter einem neuen Eintrag im Hauptmenü ihre eigenen Antwortvorlagen und Signaturen nach ihren Wünschen anpassen.
 - ExterneDaten-Erweiterung
   Um unser OTRS mit bestehenden Drittsystem verbinden zu können, habe ich die ExterneDaten-Erweiterung geschrieben. Diese ermöglicht es den Bearbeitern beliebige Entitäten (_welche natürlich in der Datenbank vorliegen müssen [z.B. fdw]_) mit Tickets zu verknüpfen und so zur Problemlösung beizutragen.
 - TicketExport-Erweiterung
   Von Hause aus besitzt OTRS leider nur die Möglichkeit einzelne Tickets zu exportieren. Diese Erweiterung nutzt diesen Mechanismus einfach um alle Tickets einer Queue als PDF zu exportieren. Auch, wenn dies bei großen Queues unter Umständen mehrere Stunden dauern kann.

![OTRS Logo](/img/logo_otrs.png)


## [F.A.Q.-Tool (_Sciebo_)](http://sciebo.de/de/hilfe/problemloesung/)
In meiner Ausbildung schrieb ich ein Frage- und Antwortsystem (FAQ). Hat ein Nutzer ein Problem, kann er dabei eine Reihe von Fragen beantworten um die Fehlerursache einzugrenzen. Am Ende hat er die passende Lösung gefunden, oder hat die Möglichkeit den Support direkt anzuschreiben und in das Tickes-System mit aufgenommen zu werden. Nach erfolgreicher Problemlösung zusammen mit dem Support können dann die Fragen im Tool erweitert werden und zukünftige Nutzer profitiren davon.

![Sciebo Logo](/img/logo_sciebo.png)


## PostgreSQL
Ebenfalls durch meinen Beruf bin ich in der Entwicklung von [PostgreSQL](https://de.wikipedia.org/wiki/PostgreSQL) beteiligt. Dabei reviewe ich hin und wieder die eingereichten Patches anderer oder schreibe auch eigene bzw. anderer Patches weiter, wenn wir dies für unsere Zwecke gebrauchen können. Mein erstes eingereichtes Plugin war [ExplainSortOrder](https://www.postgresql.org/message-id/F4FF595C-D39D-4036-A446-57C91ABE6B31%40exchange.wwu.de), auch wenn dieses gegen Ende einfach vom Hauptentwickler noch einmal komplett überarbeitet wurde.

![PostgreSQL Logo](/img/logo_postgres.png)


## [Internetauftritt der Kolpingsfamilie Laer](https://kolping-laer.de/)
Für die Kolpingsfamilie in Laer (_in der ich Mitgleid bin_) unterhalte und entwickle ich die Internetseite. Auf ihr können die Mitglieder News posten, lesen was sie verpasst oder erlebt haben, Bilder teilen und ihre Termine verwalten.

![Logo Kolping](/img/logo_kolping.jpg)


## Einsatzstellen-Tagebuch und Atemschutz-Programm für die Freiwillige Feuerwehr Havixbeck
kKurz nach dem Abitur schrieb ich für die Freiwillige Feuerwehr in Havixbeck zwei Programme. Das erste war ausschließlich zur Protokollierung der Ereignisse während eines Einsatzes (_EST_). Das andere sollte die Männer im Einsatzstellenfahrzeug ergänzend warnen, wenn ein Trupp zu lange im Einsatz war und Gefahr laufen, bald keinen Sauerstoff mehr in den Gasflaschen zu haben.

![Logo der Feuerwehr](/img/logo_feuerwehr.gif)
