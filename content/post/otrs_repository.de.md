---
title: "Mein OTRS Repository"
description: "Um meine OTRS-Plugins besser verteilen zu können, habe ich ein neues Paket Repository angelegt und die jeweils stabilen Versionen dort publiziert"
summary: "Um die von mir bisher entwickelten OTRS-Pakete besser zu bündeln, habe ich ein Paket-Repository angelegt, welches in der OTRS-Konfiguration hinerlegt werden kann, so dass alle meiner Pakete vorgeschlagen und mit möglichst wenig Aufwand aktualisiert werden können."
draft: false
date: "2024-12-20T16:00:00+01:00"
tags:
 - "otrs"
 - "znuny"
keywords:
 - "OTRS"
 - "Paketverwaltung"
 - "Paket Repository"
---

## Vorgeschichte
In den letzten acht Jahren habe ich das ein oder andere OTRS-Paket entwickelt, das wir für die Uni gut gebrauchen konnten. Darunter sind Erweiterungen wie [Queueadmins](https://zivgitlab.uni-muenster.de/wwu-it/otrs/OTRS_TemplateSignatureAddOn), [ShowDynamicFields](https://zivgitlab.uni-muenster.de/wwu-it/otrs/otrs_showdynamicfields) (_dynamische Felder nur für bestimmte Queues_) oder auch [LinkableDBEntities](https://zivgitlab.uni-muenster.de/wwu-it/otrs/OTRS_LinkableDBEntities) (_Ticketverknüpfungen mit jeglichen Entitäten in der Datenbank_) um nur einige zu nennen. Um mir selber die Installation und das Aktualisieren in meinen Instanzen ein wenig zu erleichtern, habe ich nun ein Paket-Repository angelegt. So kann OTRS mir in der Paketverwaltung alle meine verfügbaren Pakete und vor allem aber auch Aktualisierungen anzeigen. Da ich mir vorstellen kann, dann vielleicht auch noch Andere Interesse an dem ein oder anderen Paket haben könnten, möchte ich es an dieser Stelle einmal publizieren.

Es sei erwähnt, dass die Doku der Pakete alles andere als perfekt ist und von außen nicht direkt zu erkennen sein könnte, was das jeweilige Paket macht. Mit solchen Meta-Informationen werde ich mich in Zukunft dann mehr beschäftigen, so dass es für jeden ersichtlicher ist. Aber ihr könnt mich natürlich auch gerne einfach jeder Zeit per Mail drauf ansprechen und fragen.

## Repository Einrichten
Einfach in der Systemkonfiguration unter `Package::RepositoryList` [mein Repository](https://www.uni-muenster.de/IT/otrs/packages/kramkiste) hinzufügen:

| Konfigurationsname | Wert                                                     |
|--------------------|----------------------------------------------------------|
| `Name`             | `Kramkiste`                                              |
| `URL`              | `https://www.uni-muenster.de/IT/otrs/packages/kramkiste` |

Wie ihr seht, habe ich meinem Repo den Namen "_Kramkiste_" gegeben. Da der Name in dieser Konfiguration aber frei wählbar und ansonsten nur Teil der URL ist, könnt ihr es bei euch natürlich auch anders nennen.

![Bildschirmfoto der verfügbaren Pakete meines Repositoriums](/img/screenshot_otrs_packagerepository.png)
