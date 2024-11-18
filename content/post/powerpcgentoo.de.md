---
title: "Gentoo auf einem Mac Mini (G4 PowerPC) installieren"
description: "Wie ich einen Apple Mac Mini von 2005 mit PowerPC Architektur mit einem aktuellen Linux wieder belebe"
date: "2022-03-10T09:00:00+01:00"
keywords: ["Linux", "PowerPC", "PPC", "Mac Mini G4", "Kernel"]
tags: ["Technik", "Linux"]
images:
 - "/img/mac.webp"
draft: false
---

Wieso ein Computer von 2005?
----------------------------
Ältere Computer faszinierten mich schon immer. Dabei beschränke ich mich aber nicht auf eine bestimmte Ära. So kommt es auch, dass in meinem Keller noch ein Commodore 64 samt Datasetten aber auch mein erster Laptop (_IBM ThinkPad T23_) liegen. Mit einem Pentium III Prozessor und (_bereits aufgerüsteten_) 512 <abbr title="Megabyte">MB</abbr> Arbeitsspeicher ist letzterer sehr leistungsschwach, wenn man ihn mit heutigen Computern vergleicht. Gerade die eingeschränkte Hardware reizt mich dabei aber immer wieder, so viel Leistung raus zu holen wie möglich.

Vor einigen Jahren ist mir beispielsweise ein Server der neunziger Jahre in die Finger gefallen. Gigantische 512 <abbr title="Megabyte">MB</abbr> Arbeitsspeicher werden damals tausende Mark gekostet haben. Das in Kombination mit einer SCSI-Festplatte, die wie eine Flugzeugturbine klingt, und den zwei Pentium Pro Prozessoren auf einer eigenen Steckkarte ist die Kiste ein echter Hingucker. Mein Ziel ist es aber nicht, den Flugsimulator 98 zu installieren, denn Windows kommt mir nicht auf die Platte. Daher installierte ich damals (_2021_) Debian Woody mit 20 Disketten. Von da an versuchte ich, jede Version einzeln zu upgraden, bis es irgendwann nicht mehr gehen würde. Einmal machte ich sogar den Fehler und installierte die default 64bit Binaries. Ab dann ging natürlich gar nichts mehr und ich konnte neu installieren. Inzwischen läuft auf dem fast 30 Jahre alten Computer aber ein Debian Bullseye. Wenn man ein wenig Geduld mit bringt, kann man sogar die X11 <abbr title="Graphical User Interface">GUI</abbr> starten und die Maus benutzen. Unter X11 etwa mit dem Firefox zu surfen kann man hingegen vergessen. Da ich aber sowieso ein Konsolen Mensch bin, ist mir das ziemlich egal. Dass ein aktuelles Betriebssystem noch so alte Hardware unterstützt, überraschte und freute mich aber enorm.

Genau so, wie mir der alte Rechner zugelaufen war, fand auch ein Mac Mini von 2005 (_letzte Generation mit <abbr title="PowerPC">PPC</abbr>-Architektur_) den Weg zu mir.


Wieso Gentoo?
-------------
Die Frage nach der "_richtigen_" Distribution ist immer sehr schwer. Jeder hat seine eigenen Präferenzen und je nach dem, wofür ein Computer eingesetzt werden soll, können Gründe für oder gegen eine bestimmte Distribution variieren. Viele Linux-Einsteiger greifen daher zu einer Ubuntu-Installation, wohingegen erfahren Linux Nutzer vielleicht eher dessen "_Vater_" Debian oder auch ein Arch Linux installieren. Gentoo haben nur die wenigsten Leute wirklich selber auf ihren Computern installiert.

Der Grund dafür ist ganz einfach: Die Installation findet komplett händisch statt. Nach dem Booten des Startmediums wird man in eine Konsole geworfen und das wars dann. Aber glücklicherweise ist die Distribution sehr gut im [Handbuch](https://wiki.gentoo.org/wiki/Handbook:Main_Page) dokumentiert. Man partitioniert also seine Festplatte selbst, kopiert wichtige Dateien selbst rein, konfiguriert Dinge wie die Zeitzone, Locales oder auch den Bootloader selber und zu allem Überfluss muss auch jedes Paket kompiliert werden. Denn dass ist der große Unterschied bei Gentoo: Es ist ein quellenbasiertes System, was bedeutet, das bei der Installation der einzelnen Komponenten der Quellcode herunter geladen und kompiliert wird. Das dauert lange und beherbergt viel Fehlerpotential. Genau deswegen handelt es sich dabei auch um eine Distribution, die wirklich nur für Nerds gedacht ist.

Wieso will ich mir diesen Aufwand an tun? Der Grund ist die Architektur des Mac Minis: Im Gegensatz zu den Standardcomputern die so im Umlauf sind (_meist `x86` oder `x86_64`_), läuft diese Hardware mit einem 32 bittigem PowerPC, einer der letzt verbauten. Gerade deswegen unterstützen eigentlich keine Linux-Distributionen mehr diese Architektur. Sogar Debian hat beim Wechsel von Version 8 auf 9 die Unterstützung dafür aufgegeben. Da ich aber ein möglichst aktuelles System haben möchte, welches nicht um viele Versionen hinterher hinkt, kommen diese Distributionen alle nicht in Frage. Die Tatsache, dass Gentoo auf dem Zielsystem kompiliert wird, ermöglicht daher die Unterstützung auch für dne PowerPC.


Konfiguration des Kernels
-------------------------
Im Nachhinein kann ich nun sagen, dass das der Richtige Weg war, denn es läuft auch inzwischen, aber es war ein langer Weg. Insgesamt habe ich den Kernel zum Beispiel fünf mal kompiliert, bis ich eine lauffähige Version hatte. Gerade auf der alten Hardware mit nur einem Prozessor, hat das Bauen des Kernels allerdings jeweils einen ganzen Tag gedauert. Für jeden, der sich seinen Kernel für den Mac Mini G4 mit PowerPC-Architektur auch bauen will, habe ich meine funktionierende Konfiguration hier mit einigen Hinweisen verlinkt. Zu beachten ist aber, dass Gentoo eigene Patches auf den Kernel spielt. Dies ist also nicht die Konfiguration für einen Vanilla-Kernel, vermutlich ist es aber kompatibel.

| Link                                             | Linux-Version | Hinweise |
|--------------------------------------------------|---------------|----------|
| [0.3](/attachments/config-5.15.23-ppc-3.txt)     | 5.15.23       | <ul><li>WIFI-Fehler `kernel reports: key addition failed` behoben</li><li>Framebuffer nutzt nun 100x40 statt 80x25 Zeichen, füllt somit den Bildschirm komplett aus</li><li>Einige nicht benötigte Treiber wurden entfernt</li></ul> |
| [~~0.2~~](/attachments/config-5.15.23-ppc-2.txt) | 5.15.23       | <ul><li>Wird von OpenFirmware mittels Grub gebootet.</li><li>WIFI funktioniert prinzipiell, aber bei PSK-Netzwerken meldet der Kernel noch "`key addition failed`"</li><li>Der Framebuffer nutzt nicht den gesamten Bildschirm (_nur den oberen linken Bereich_)</li></ul> |

An dieser Stelle liste ich nur die auf meinem Mac Mini lauffähigen Kernel. Alles andere hätte auch keinen Mehrwert für irgendwen. Insgesamt habe ich aber bestimmt acht verschieden Versionen des Kernels kompiliert, bis ich etwas lauffähiges hatte. Jeder Durchlauf dauerte wiederrum knapp zehn Stunden. Ihr könnt euch also denken, dass ich einiges an Zeit in dieses Projekt gesteckt habe. Zum Glück kann soetwas aber alleine vor sich her kompilieren, so dass man während dessen mit Wichtigerem weiter arbeiten konnte. Hinzu kommt noch, dass jedes installierte Paket in dem System (_weil Gentoo_) ebenfalls einige Zeit brauchte, bis es kompiliert war. Dafür sind die Binaries aber super optimiert, was bei einer derart eingeschränkten Hardware sehr wichtig ist.


Problem: Bootloader
-------------------
Allerdings gab es noch einige Baustellen mehr. Beim Einrichten von Gentoo hielt ich mich sehr an die Anleitung im Handbuch und machte nur einige Modifikationen, beispielsweise bei der Partitionierung oder der Auswahl einiger Pakete. Ein großes Problem bereitete mir aber der Bootloader. Im Handbuch wird [yaboot](https://en.wikipedia.org/wiki/Yaboot) verwendet, was auf PowerPCs mit OpenFirmware üblich ist. Allerdings schlägt die Installation/das Kompilieren des Pakets schon fehl. Einige Google-Anfragen zeigten, dass es neben dem in dem Hanbuch verwendeten Paket `sys-boot/yaboot` auch `sys-boot/yaboot-static` gibt, welches einen bei mir auftretenden Bug nicht hat. Daher wechselte ich zu dem Paket, ansonsten änderte sich in der Hinsicht aber nichts. Dennoch bootete OpenFirmware (_Das <abbr title="Basic Input/Output System">BIOS</abbr> für PowerPCs_) nicht, sondern zeigte mir, dass es die angefragte Datei (_den Linux-Kernel_) nicht finden könne. In einigen Foren las ich, dass yaboot wohl Probleme mit dem e2fs-Tools haben könnte, daher erzeugte ich eine eigene `/boot`-Partition (_Mache ich eigentlich immer, wollte mich aber so gut es ging erst mal ans Handbuch halten_) die ich mit XFS formatierte. Das änderte aber nichts. Nach einigen Tagen Recherche und Ausprobieren gab ich es auf und versuchte, GRUB zu installieren. Ich war mir gar nicht sicher, ob das auf OpenFirmware überhaupt funktionieren würde, aber [eine Anleitung](https://wiki.gentoo.org/wiki/GRUB_on_Open_Firmware_(PowerPC)) im Internet half mir dabei. Auch dabei musste ich an einigen Stellen improvisieren und abweichen. Beispielsweise hat meine `ofboot.b` keine Badge-Images, was aber offensichtlich auch gar nicht erforderlich ist.


Aktueller Stand
---------------
Inzwischen habe ich aber einen lauffähigen Mac Mini G4 mit einer mehr oder weniger inzwischen exotischen Architektur. Mein Gentoo-Linux bootet so, wie ich es erwarte und lädt alle erforderlichen Treiber. Sogar WLAN funktioniert inzwischen, obwohl ich anfänglich damit Probleme hatte, da ein benötigtes Modul für WPA-PSK Netzwerke nicht im Kernel war. Nun habe ich einen weiteren sehr alten Computer, mit aktuellem Linux. Da Gentoo quelloffen und eine aktive Distribution ist, werden die installierten Pakete immer die neusten Versionen haben und sogar neuer als meine Debian-Maschinen sein. Erwähnen sollte ich vielleicht, dass ich kein X11 geschweigedenn einen Desktopmanager installiert habe. Das wäre auch möglich, aber zum Einen bin ich ein Konsolenmensch und zum Anderen möchte ich die gewonnene Performance nicht durch unnötige GUI verlieren.

Auf jeden Fall war diese Erfahrung sicherlich seh nützlich für mein nächstes Projekt: Linux From Scratch für meinen Server von 1996. Da ich inzwischen sogar ein [ZIP-Drive](https://de.wikipedia.org/wiki/Iomega_Zip) aufgetrieben habe und ein paar passende Datenträger besitze, wird es sicherlich interessant werden, ein ganzes Linux (_Kernel und das System (vielleicht auch sogar mit RAMFS)_) auf die 100MB zu quetschen. Die Idee dazu hatte ich, als ich gelesen habe, wie jemand einen [minimalen Kernel und RAMFS auf eine 3,5" 1,44MB Diskette](https://hackaday.com/2021/05/24/running-modern-linux-from-a-single-floppy-disk/) bekommen hat.
