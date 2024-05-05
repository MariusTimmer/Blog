---
title: "Das neue OTRS 6.5 LTS-Release ist da"
description: "Nach einiger Zeit des Wartens ist die neue LTS-Version 6.5 von OTRS von Znuny veröffentlicht worden."
summary: ""
draft: false
date: "2023-03-27 12:00:00+01"
keywords: ["OTRS", "Znuny", "LTS-Release"]
tags: ["Technik", "OTRS"]
---

Wie ich in [vorherigen Beiträgen](/post/znunyotrslts2023) schon schrieb, ist die bisherige LTS-Version von OTRS (_6.0_) seit dem Jahreswechsel abgekündigt worden und der Nachfolger (_6.5_) angekündigt worden. Offiziell war die bisherige Version nocht unterstützt, bis zum Release von 6.5.

Nach einigen Wochen des Wartens ist es nun endlich so weit: Znuny hat [OTRS 6.5.1 als LTS-Release](https://www.znuny.org/de/releases/znuny-lts-6-5-1) veröffentlicht. Schon vor zwei Wochen, wie ich gerade gesehen habe. Allerdings sehe ich mir die Releases-Seite von Znuny eher wöchentlich an. Um so erfreuter bin ich nun!

Durch dieses LTS-Release kann ich nun nicht nur die existierenden OTRS Inszanzen aktualisieren, sondern (_und das ist nicht ganz unwichtig_) habe nun auch endlich die Möglichkeit, die selbst geschriebenen Erweiterungen (_z.B. [Queueadmins](https://zivgitlab.uni-muenster.de/wwuit-anw/webanwendungen/otrs/OTRS_TemplateSignatureAddOn) oder auch [Multiple Ticket Export](https://zivgitlab.uni-muenster.de/wwuit-anw/webanwendungen/otrs/OTRS_MultipleTicketExport)_) an die neue stabile Version anzupassen. Schließlich kann ich nicht einfach die alten Plugins im neuen OTRS installieren. Zum Einen, weil OTRS selbst mich daran hindern wird und zum anderen, weil die Versionen einfach inkompatibel wären. Da nun die konkrete Version da ist, weiß ich auch endlich, gegen welchen Code diese Erweiterungen entwickelt werden müssen.

In den kommenden Wochen heißt es also: Entwickeln, Portieren und vor Allem: Aktualisieren! 🥳
