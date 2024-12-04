---
title: "OTRS signiert Admin-Benachrichtigungen nicht"
description: "OTRS signiert Admin-Benachrichtigungen an die Agenten nicht. Das sorgt für Irritation und einen guten Grund gibt es auch nicht."
summary: "Obschon OTRS durchaus in der Lage ist, E-Mails zu signieren, und ver-/entschlüsseln, werden ausgehende Admin-Benachrichtigungen an die Agenten nicht signiert. Das irritiert einige meiner Agenten und verwundert mich selber."
draft: false
date: "2024-12-03T23:00:00+01:00"
keywords:
 - "OTRS"
 - "Admin-Benachrichtigung signieren"
 - "S/MIME"
images:
 - "/img/logo_envelope.webp"
---

## Was genau ist eigentlich mein Problem?
Immer mal wieder ist es nötig, dass ich spontane Aktualisierungen in unserem <abbr title="Open Ticket Request System">OTRS</abbr>-System einspiele oder andere unvorhergesehene Korrekturen vornehmen muss. Die normalen Aktualisierungen des Betriebssystems führe ich per crontab einmal Nachts in der Woche durch, so dass durch den anschließenden Reboot möglichst kein Agent bei seiner Arbeit gestört wird. Wenn es aber dann doch einmal nötig ist, den Dienst für einige Minuten auszuschalten, informiere ich vorher immer alle Agenten. Zuerst schalte ich eine [Systemwartung](https://otrscommunityedition.com/doc/manual/admin/6.0/en/html/administration.html#adminarea-systemmaintenance) um gerade arbeitende Agenten zu informieren. Vor allem sende ich aber auch eine Admin-Benachrichtigung an alle Agenten des Systems. In Unserer Instanz sind das aktuell etwas mehr als 800 Nutzer, weswegen ich ein wenig Zeit einplanen muss, damit die E-Mails noch eine Chance haben, rechtzeitig zugestellt zu werden. Bisher bin ich mit einer Stunde Vorankündigung immer gut gefahren, weiß aber, dass das bei einigen Agenten schon sauer auf stößt.

Als Rechenzentrum der Universität Münster liegt uns Sicherheit und Integrität natürlich sehr am Herzen. Daher [sensibilisieren wir unsere Nutzer](https://www.uni-muenster.de/CA/de/howto-mail.shtml) schon seit Jahren, S/MIME für den E-Mail-Verkehr zu benutzen. Dazu gehört es, E-Mails standardmäßig signiert zu senden, aber vor allem auch bei eingehenden Mails darauf zu achten, dass die Signatur vorhanden und korrekt ist.

Um so peinlicher ist es, dass mich nach jeder versendeten Admin-Benachrichtigung vereinzelt Kollegen fragen, ob die E-Mail legitim war, da sie nicht signiert war.

## Warum signierte Admin-Benachrichtigungen?
Es gibt [eine Reihe von Gründen](https://www.uni-muenster.de/Informationssicherheit/sch_tzen/Schutz_vor_betruegerischen_E-Mails.html), wieso man seinen E-Mail-Verkehr absichern sollte. Einerseits ist das sehr wichtig, wenn personalisierte Angriffe gefahren werden - Stichwort **Social Engineering**. Aber auch bei Massenmails kann es sehr wichtig sein. Es hat schon einen Grund, wieso Spam-Mails, die tausendfach verschickt werden, nie signiert sind. Mein konkreter Use case ist natürlich mit weniger als tausend Nutzern wesentlich kleiner, allerdings ist es sehr gut denkbar, dass ein Angrifer mit einem gekaperten E-Mail Account auf diese Art vorgehen könnte. Anstatt alle Nutzer darüber zu informieren, dass das System gleich für einige Minuten nicht zur Verfügung stehen wird, könnte er (_oder sie_) auch alle Nutzer dazu auffordern, eine E-Mail mit den Zugangsdaten zu schicken, um diese abzugleichen - Zugegebenermaßen ein plumper Versuch, aber im Zweifel reicht es ja schon, wenn nur eine Person darauf rein fällt.

Eine Signatur legitimiert nun aber eine E-Mail und macht dem Nutzer klar, dass diese Mail sowohl vom Admin-Account als auch dem Besitzer des Zertifikats geschickt wurde.

Außerdem: Was wirft es für ein Licht auf uns als Rechenzentrum, welches den Nutzern immer wenn möglich empfiehlt, ein SSL-Zertifikat zu nutzen, es dann selbst aber nicht einsetzt? Das ist ziemlich unangenehm und daher schnellst möglich zu korrigieren.

## Mein möglicher Lösungsansatz
Noch viel absurder wird die ganze Sache, wenn man bedenkt, dass OTRS durchaus in der Lage ist, [S/MIME-Zertifikate](https://otrscommunityedition.com/doc/manual/admin/6.0/en/html/administration.html#adminarea-smime) (_und die dazugehörigen Schlüssel_) zu verwalten und zu nutzen. Bei eintreffenden Mails wird in der Ticketübersicht der Status der SSL-Signatur angezeigt und verschlüsselt gesendete E-Mails können von OTRS auch wieder entschlüsselt werden. Andersherum kann OTRS auch ausgehende E-Mails signieren und verschlüsseln, wenn das Zertifikat des Empfängers bekannt ist.

Generell kann OTRS also schon SSL. Daher ergibt es für mich keinen Sinn, dass Admin-Benachrichtigungen nicht nur nicht signiert werden, sondern mir als Admin auch gar nicht die Möglichkeit geboten wird, sie zu signieren. Die Mail-Adresse, das SSL-Zertifikat und der dazugehörige Schlüssel sind im OTRS natürlich auch hinterlegt. Es gibt also wirklich keinen Grund, wieso das nicht gemacht wird.

Aus diesem Grund werde ich demnächst eine kleine OTRS-Erweiterung schreiben, die Admin-Benachrichtigungen automatisch signiert, wenn ein Zertifikat dafür vorhanden ist. Das sollte nur ein kleiner Eingriff sein. Auch wenn ich aktuell noch die alte <abbr title="Long term support">LTS</abbr>-Version 6.0.x einsetze, werde ich die Erweiterung direkt auf die aktuelle OTRS LTS-Version 6.5 abzielen, da ich dort so schnell es geht hin migrieren möchte. Außerdem wäre es nicht hilfreich, die Erweiterung für ein veraltetes System zu schreiben, wenn ich sowieso noch drei andere Plugins auf die aktuelle 6.5er LTS-Version migrieren darf.

Sobald ich die Erweiterung fertig gestellt habe, teile ich sie hier (_und ggf. im gitLab_) natürlich mit euch. Sollte ich aber ganz daneben liegen und ihr wisst gar nicht, wovon ich spreche, weil euer OTRS-System Admin-Benachrichtigungensigniert, lasst es mich gerne wissen.
