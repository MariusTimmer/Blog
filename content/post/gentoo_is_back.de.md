---
title: "Gentoo ist zurück"
description: "Nach langer Zeit habe ich mich entschieden, wieder Gentoo Linux auf meinem alten ThinkPad zu installieren."
summary: "Häufig habe ich Gentoo Linux auf meinen Rechnern eingerichtet. Nach langer Zeit habe ich mich jetzt wieder dazu entschieden, es auf meinem alten ThinkPad X200 zu installieren - natürlich aber mit `distcc`. Meiner Meinung nach ist Gentoo Linux immer eine Reise wert."
date: "2025-04-16T23:01:23+02:00"
images:
 - "/img/gentoo_logo.png"
draft: false
keywords:
 - "Gentoo Linux"
 - "ThinkPad X200"
 - "distcc"
custom_css:
 - "/css/images.css"
author:
 - "marius"
---

## Das Besondere an Gentoo
Man könnte denken, Gentoo Linux sei einfach eine weitere Distribution, die man auf seinem Rechner, je nach Vorliebe, installiert - Sie wie zum Beispiel Ubuntu, Mint oder Arch. Allerdings gibt es bei Gentoo eine Besonderheit: Die Distribution ist Quelloffen, so dass sämtliche Pakete, die in einem System installiert werden, nicht als Binärdateien heruntergeladen, sondern auf der jeweiligen Maschine kompiliert werden.

<figure
  style="width: 33%; float: right; margin-left: 1em;"
  >
  <figcaption>Logo von Gentoo Linux</figcaption>
  <img
    alt="Das Logo hat die Form eines Herzens, welches auf der Seite liegt, in hellem Lila bis Silber."
    src="/img/gentoo_logo.png"
    />
</figure>

Auf der einen Seite bedeutet das wesentlich längere Wartezeiten für das Installieren oder Updaten der Pakete, auf der anderen Seite ermöglicht es einem aber, dass die am Ende installierten Pakete für die jeweils eingesetzte Hardware optimiert sind und so performanter laufen, als wenn sie vorkompiliert sind und ggf. sehr viel Code enthalten, der nie zum Einsatz kommt. Dieser Umstand ist auch der Grund, wieso so eine Installation durchaus einige Stunden, bei langsamer Hardware auch mal mehrere Tage, dauern kann. Erschwerend kommt hinzu, dass wirklich alles selbst konfiguriert werden muss, wobei einem das [Gentoo Handbuch](https://wiki.gentoo.org/wiki/Handbook:Main_Page) da sehr helfen kann.

Außerdem wurde Gentoo bereits um die Jahrtausendwende ins Leben gerufen (_zuerst noch unter dem Namen "Enoch"_) und gehört damit zu einer der älteren Distributionen, die noch aktiv betrieben werden.


## Kein Neuland für mich
In den vergangenen zwei Jahren habe ich bereits mehrfach Gentoo auf unterschiedlichsten Maschinen (_meist aber ARM64_) installiert. Einmal installierte ich es auf meinem Desktop-Rechner, auf dem das Kompilieren der Pakete in erstaunlich kurzer Zeit ging, was aber wohl auch den 8 Prozessor-Kernen und 32 GB Arbeitsspeicher zu danken ist. Die Installation auf meinen Laptops stellte sich schon immer als größere Herausforderung heraus. Nicht nur, weil ich mit einem Dual-Core arbeite und mit 4 GB RAM auskommen musste, sondern auch wegen den Intel-Treibern für Wifi. Wenn man keine Ethernet-Verbindung herstellen kann und auf Wifi angewiesen ist, kann das sehr spaßig werden.

Den spannendsten Usecase für Gentoo hatte ich allerdings bei meinem Mac Mini von 2005, der noch eine 32 bit PowerPC-Prozessor verbaut hat, wofür es eigentlich keine aktuellen Betriebssysteme gibt. Mir erschien die eleganteste Lösung zu sein, das Betriebssystem direkt auf der Hardware zu kompilieren. So konnte ich sicher gehen, dass ich nicht durch eine abweichende Architektur Probleme bekommen würde. Es dauerte zwar einige Wochen, alles korrekt zu konfigurieren (_Wifi und GRUB, da kein einfaches BIOS vorhanden_), aber am Ende stand das System, welches ich bis heute immer wieder aktuell halte. Zu wissen, dass man so alte Hardware mit aktuellster Software betreibt, ist ein sehr cooles Gefühl. Falls jemand bei ähnlichen Projekten also Hilfe braucht, kann ich vielleicht mit Infos dienen.

## Fernkompilierung mit distcc
Gentoo bietet einem Tools wie `distcc`, die es einem ermöglichen, die Pakete auf anderen, leistungsstärkeren Rechnern, zu kompilieren und so einiges an Arbeitszeit zu sparen. Wenn ich also etwas auf meinem Thinkpad kompilieren möchte, lasse ich die eigentliche Arbeit automatisiert auf meinem Desktop-Rechner laufen. So wird der Zusammenbau meines Kernels auf 1/3 der Zeit gekürzt. Wenn die beiden beteiligten Rechner allerdings unterschiedliche Prozessorarchitekturen haben, kann es umständlicher werden, da der "_Server_" in dem Fall noch einen Cross-Compiler benötigt, der eingerichtet werden muss. Beim PowerPC/MacMini habe ich mir diese Mühe nicht gemacht und alles lokal generiert. Darüber habe ich [in der Vergangenheit schon einmal geschrieben](/post/powerpcgentoo/).


## Es hat nicht nur Vorteile
Auch wenn ich großen Gefallen daran finde, Software zu benutzen, die speziell auf die genutzte Hardware (_CPU flags und co._) zugeschnitten ist, gibt es natürlich auch Nachteile - und die liegen auf der Hand: Große Pakete brauchen extrem lange um installiert zu werden. Firefox, LibreOffice und co. brauchen alle Stunden lang um kompiliert zu werden. Als ich LibreOffice auf meinem ThinkPad lokal kompiliert habe, dauerte es mich mehr als fünf Stunden. Natürlich gab es auch einige Abhängigkeiten, die ebenfalls installiert werden mussten, aber bei solchen Zeiten überlegt man sich genau, welche Pakete man installieren möchte und welche es einem einfach nicht wert sind. Glücklicherweise werden Browser genau aus diesem Grund auch als Binärpaket bereit gestellt, wodurch man sich das Kompilieren sparen kann. Das widerspricht zwar der Grundidee von Gentoo, macht einem das Leben an der Stelle aber erheblich leichter. Denn was man nicht vergessen darf ist: Gentoo ist ein roling release. Das bedeutet, alle Pakete werden immer mal wieder aktualisiert, was es erfordert, die betroffenen Pakete erneut zu kompilieren. Alternativ kann man natürlich auch den Ansatz vertreten, dass man nicht immer die aktuellste Software haben muss und vielleicht auch mal ein halbes Jahr hinterher hängen kann, aber dann sind die halbjährlichen Updates halt auch wesentlich aufwändiger.


## Typische Installation
Normalerweise hangle ich mich bei der Installation immer sehr an den Instruktionen des Handbuches entlang. Das ist sehr umfangreich und berücksichtigt viele bis alle Aspekte. Allerdings gehört es bei mir zur Standard-Installation, dass die Festplatte mit <abbr title="Logical Volume Manager">LVM</abbr> verwaltet wird und die Partitionen mit <abbr title="Linux Unified Key Setup">LUKS</abbr> verschlüsselt werden. Das ist in der normalen Anleitung nicht direkt beschrieben und muss sich aus gesonderten Artikeln zusammen gesucht werden. Das ist ja auch erst der Punkt, wo der Spaß dann anfängt. In der Regel weiß ich inzwischen was zu tun ist. Trotzdem passiert es nicht selten, dass eine Kleinigkeit übersehen wird, die dann der Grund dafür ist, wieso ich tagelang nach Feierabend versuche herauszufinden, was falsch ist. Um so befriedigender ist aber das Gefühl, wenn es dann klappt. Ein Klassiker ist auch, dass die Verschlüsselung klappt, dann aber bei der Passworteingabe die falsche Keymap geladen ist und man erst mal überlegen muss, wie man sein Passwort auf einer deutschen Tastatur eingibt, die aber ein US-Layout geladen hat. Oft habe ich aber auch einfach den Fall, dass der Kernel nicht in der Lage ist, die Root-Partition zu finden, wo man erst mal herausfinden muss, ob das an einer falschen <abbr title="Grand Unified Bootloader">GRUB</abbr>-Konfiguration oder fehlenden Kernel-Modulen im Initram-File liegt. Es ist auf jeden Fall jedes mal sehr spannend.


## Wichtigste Voraussetzung für Gentoo
So sehr ich Gentoo mag, muss ich einsehen, dass man diese Distribution nicht jedem uneingeschränkt empfehlen kann. Sie setzt voraus, dass man einerseits Ahnung von Linux hat, aber auf der anderen Seite (_und das ist fast viel wichtiger_) muss man willig sein, die Zeit aufzubringen - und das nicht einmalig, sondern permanent. Meine beiden Rechner werden erst mal weiter mit Gentoo laufen, aber wer weiß, ob ich mich in ein paar Monaten nicht doch wieder dazu entscheide, einfach Arch Linux auf meinem Thinkpad zu installieren.
