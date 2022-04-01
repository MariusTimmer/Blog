---
title: "Ubuntu Debian Migration"
description: "Wie ich von Ubuntu zu Debian gewechselt bin"
icon: "linux"
date: 2019-07-12T09:26:00+01:00
tags: ["Technik", "Linux"]
keywords: ["Linux", "Ubuntu", "Debian", "Migration", "APT", "Mirror" ,"Keys", "GPG", "Komfort", "Freiheit", "ThinkPad", "Mac Mini", "PowerPC", "Netzwerkinstallation", "XFCE", "KDE", "SafeNet", "eToken", "SAC", "Thunderbird"]
draft: false
video: ""
---

Von [Ubuntu](https://ubuntu.com/) zu [Debian](https://debian.org/)
====================

TL;DR
-----
 - Wollte von Ubuntu auf Debian wechseln;
 - Hat nicht so geklappt;
 - Durfte dann doch das gesamte System neu aufsetzen


Wieso ich Debian wollte
-----------------------
Bevor ich in die Details gehe und erkläre, wie ich bei der Migration vorgegangen bin, ist es vielleicht interessant erst einmal zu erfahren, wieso ich überhaupt wechseln wollte. Was hat Debian, das Ubuntu nicht hat? Streng genommen nichts. Schließlich basiert Ubuntu auf Debian und ist damit soetwas wie eine Art Kind von Debian. Wer sich zum ersten mal ein Linux System installiert, wird kauf mit Distributionen wie Arch Linux oder Kali beginnen. Denn diese sind vergleichsweise komplex, da sie dem Nutzer sämtliche Freiheiten der Konfiguration überlassen. Debian gehört auch zu eben jenen Systemen. Für den Einsteiger ist das etwas schlechtes, da dieser vermutlich schnell überfordert ist. Für einen erfahreneren Nutzer (_wo ich mich selber auch sehe_) ist das aber etwas gutes, da man das gesamte System bis ins kleinste Detail selber konfigurieren kann. Es ist das alte Spiel: Komfort vs. Freiheit. Außerdem habe ich in den vergangenen Wochen Debian 8, 9 und 10 auf meinen ThinkPads installiert und es läuft super stabil. Vielleicht sollte ich auch noch mal überlegen, Debian auf meinem alten Mac Mini von 2005 mit PowerPC Architektur zu installieren. Denn das Schöne bei Debian ist auch, dass es nahezu alle Architekturen unterstützt.

Ausgangssituation
-----------------
Diese Migration führte ich an meinem Arbeitsplatz-Rechner durch, wo ich (_welch Überraschung_) ein Ubuntu 18.04 installiert habe. Prinzipiell bin ich auch ganz zufrieden damit. Aber die Suche nach der besten Distro ist vermutlich doch eher ein langer Weg, und es geht immer noch ein bisschen besser. Damit ich aber möglichst kurze Zeit von der Arbeit abgehalten wurde, habe ich mich entschieden, das alte System nicht einfach platt zu machen und ein neues Debian Image drauf zu ziehen. Außerdem wollte ich noch meine Home-Daten erhalten. Ich weiß nicht wieso, aber aus irgendeinem merkwürdigen Grund, hatte ich tatsächlich nur eine Partition für das gesamte System eingerichtet. Ich war selber sehr überrascht darüber.

Zu erwähnen ist vielleicht noch, dass mein Rechner ein [UEFI](https://de.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface) hat, von dem ich selber leider viel zu wenig Ahnung habe, da ich ein Freund von einfachen [BIOS](https://de.wikipedia.org/wiki/BIOS)(_'s/en/i?_) bin. Da aber an der Stelle eigentlich nur der Kernel getauscht werden würde, der auch wiederrum signiert sein sollte, hoffte ich, dass es keine Probleme durch das UEFI geben sollte. Und wenn, sollte es ja noch immer die Möglichkeit geben, den alten Ubuntu-Kernel zu starten.

Vorbereitung
------------
Zuerst habe ich aus Prinzip meine gesamte Home-Partition (_knapp 10 GB_) auf einer anderen Platte gesichert. Das ging schnell und vor allem auch nebenbei. Die backup-Platte habe ich die gesamte Zeit über angeschlossen gelassen, aber wer sicher gehen will, sollte sie natürlich entfernen.

Los gehts
---------
Zuerst habe ich alle Paketquellen von APT (_in `/etc/apt/sources.list`_) auskommentiert, damit keine Ubuntu-Pakete mehr genutzt werden. Anschließend habe ich die [Mirrors von Buster](https://linuxconfig.org/debian-apt-get-buster-sources-list#h18-germany-mirror-1) eingetragen. Zu diesem Zeitpunkt war mein einfacher Plan, nur die Paketquellen auszutauschen und alles neu von dort zu installieren:
```bash
$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get dist-upgrade
```

Zuerst stellte ich fest, dass ich [`debian-archive-keyring`](https://packages.debian.org/buster/debian-archive-keyring) installieren musste, damit die Debian-Sourcen akzeptiert werden. Interessanter weise musste ich noch von Hand drei Schlüssel mit `apt-key add` ergänzen. Anschließend konnte ich mit dem Update beginnen. Da nahezu jedes Paket (_reine Vermutung von mir_) neu installiert wird, wurde wirklich eine Menge an Paketen heruntergeladen. Glücklicherweise hängen wir mit einer Gigabit-Leitung am Netz, wodurch nur noch die Einrichtung der einzelnen Pakete Zeit kostete. Was mir am meisten auffiel war, dass die Installation im Gegensatz zu normalen Updates nicht voll automatisch verläuft. Ganz einfach, weil hin und wieder einige Dienste neu gestartet werden müssen und der Nutzer gefragt wird, bevor einfach Dienste neu gestartet werden. Außerdem gab es einige "Konflikte" in Konfigurations-Dateien, die aber trivial zu beheben sind. In meinem Fall habe ich beispielsweise einfach immer die Konfigurationen der Paketbetreiber gewählt, weil ich annehme, dass die einfach in sich schlüssig sind. Bei Konfigurationsdateien deren Namen mir (_noch_) etwas sagten, wusste ich dann, dass ich im Nachhinein noch einen Blick drauf werfen sollte.

Nachdem das `upgrade` durchgeführt wurde (_grösstenteils Fehlerfrei_) fiel mir beim nächsten Befehl `dist-upgrade` direkt auf, dass aufgrund des `sudo`-Befehls, schon die neue Debian-Prompt nach dem Passwort fragte. Das schien mir ein gutes Zeichen zu sein. Mir war aber auch aufgefallen, dass es die Meldung gab, eine bestimmte Firmware sei nicht verfügbar gewesen. Diese Firmware ist teil des `non-free` Repositories. Da Debian standardmäßig nur offene Software installiert, ging ich davon aus, dass das der Grund war und ich am Ende vielleicht doch non-free Sourcen aktivieren müsse.

Der Fehlschlag
--------------
Während des `dist-upgrade` erschienen mehr und mehr Konflike, bis der Prozess am Ende abgebrochen wurde, da es Abhängigkeitsprobleme zwischen einzelnen Paketen gab. Einige Abhängigkeiten waren in einer Ubuntu-Version installiert, mussten für andere Pakete aber in der "_Ubuntufreien_"-Version bereit stehen. Diese Abhängigkeiten aufzulösen und zu korrigieren ist sehr schwierig. Daher habe ich mich am Ende dann doch für den einfachen Weg entschieden: Dadurch dass ich meine Home-Partition gesichert hatte, konnte ich einfach eine Netzwerk-Installation starten. Dieses mal habe ich allerdings darauf geachtet, ein LVM Volumen einzurichten und prinzipiell fürs Home eine eigene Partition zu schaffen. Nach der Installation habe ich dann einfach meine Daten vom Backup an die neue Stelle gespielt. So habe ich nun ein neues sauberes Debian System und meine alten Konfigurationen (_Browser- und Thunderbird Erweiterungen, Schlüssel, etc._) behalten. Ich muss zugeben, dass es etwas tricky ist, einige Anwendungen zu installieren. Beispielsweise wird die SAC-Software vom SafeNet eToken nicht frei angeboten. Daher muss man die Installationsdateien immer aufwändig suchen. Aber am Ende klappte es und ich bin froh umgestiegen zu sein. Nebenbei habe ich mir nun auch noch KDE eingerichtet. Ob ich aber dabei bleibe, oder vielleicht doch wieder zu XFCE zurück gehe, muss ich dann mal noch abwarten.

Fazit
-----
Am Ende kann man der ganzen Sache trotz des Fehlschlags noch etwas Positives abgewinnen: Nun weiß ich, dass ein Austauschen der Paketquellen nicht reicht, um von Ubuntu auf Debian zu wechseln. Im Gegenteil: Man zerschießt sich viel eher das gesamte System und muss entweder einmal neu installieren, oder irgendwie eine Menge Zeit aufbringen, um die Konflikte von Hand aufzulösen. [`RTFM`](https://en.wikipedia.org/wiki/RTFM) hat sich damit mal wieder als guter Ratschlag erwiesen.
