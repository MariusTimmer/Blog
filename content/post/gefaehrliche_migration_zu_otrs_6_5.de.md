---
title: Meine Migration zu OTRS 6.5
description: Nach langer Zeit sind wir bei uns auf die LTS-Version 6.5 von Znuny OTRS migriert. Ein Bug machte mir das Leben dabei zur Hölle.
summary: Für unser OTRS stand der Wechsel von der veralteten LTS-Version 6.0 auf die gar nicht mehr so neue 6.5 an. Eigentlich eine Routine-Arbeit, die ich inzwischen nur lange vor mir hergeschoben hatte. Durch einen Bug in der zu dem Zeitpunkt aktuellen LTS-Version 6.5.17 von Znuny hatte ich aber eine lange Nacht vor mir.
date: 2025-09-23T21:00:00+02:00
draft: true
keywords:
  - Znuny OTRS
  - LTS 6.5
  - 6.5.17
  - Bug
tags:
  - OTRS
---
## Ausgangssituation
Zwei Jahre sind vergangen, seit dem ich schrieb, dass [Znuny OTRS 6.5](/post/otrs_6_5_release/) veröffentlicht wurde. Dennoch sind wir bis jetzt mit der alten <abbr title="Long Term Support">LTS</abbr> 6.0.48 gefahren, die schon von der Firma Znuny (_[nach der Übernahme des Supports der Community-Edition](/post/otrs_lebt/)_) kam. Gerade der Verbleib der Community-Edition machte uns erst einmal Skeptisch, so dass wir uns dazu entschieden, mit dem Umstieg noch ein wenig zu warten. Durch einige andere Faktoren verzögerte sich dann aber die Migration. Außerdem hatte ich vorher noch ein paar selbst geschriebene Erweiterungen für 6.5 zu portieren. Im Nachhinein stellte sich das aber als trivial heraus.

Diesen Montag war es dann so weit: Unsere Agenten waren bereits alle informiert, dass das Ticket-System am 17 Uhr durch das Update für eine Stunde nicht mehr zu benutzen sein würde. Ich schaltete eine entsprechende Systemwartung um es auch dem letzten Agenten noch einmal ins Gedächtnis zu rufen, bevor ich den Webserver-Dienst ausschaltete.
## Ungeplante Versionssprünge
Hallo Welt

## Verwaiste Datensätze

## Es gehen keine E-Mails mehr raus

[Patch](/attachments/znuny_otrs-bug_smtp.patch)