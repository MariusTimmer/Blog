---
title: "Glasfaser bis nach Hause"
description: "Wie wir Glasfaser bis ins Haus gelegt bekommen haben"
author: "Marius Timmer"
keywords: ["Glasfaser", "Gigabit", "Bohrung", "Deutsche Glasfaser", "Telekom"]
date: "2020-04-28T19:00:00+02:00"
draft: false
---

Der Vertreter
-------------
Vor zwei Monaten klingelte es an unserer Tür. Ein Vertreter der [Deutschen Glasfaser](https://www.deutsche-glasfaser.de/) (_Anbieter von [Glasfaser](https://de.wikipedia.org/wiki/Glasfasernetz)-Anschlüssen bis nach Hause_) wollte uns etwas verkaufen. Natürlich kauft man nichts an der Haustür, weil das unseriös ist. Es klingt wie eine faule Ausrede, aber der Vertreter machte seinen Job gut und erzählte uns auch, dass er die Haushalte im Ort abklappern würde, die weder ja oder nein zu einem Glasfaser-Anschluss gesagt haben. Und wenn es die Möglichkeit gibt, dass wir mit bis zu 1GB/s ans Netz angeschlossen werden, bin ich immer erst positiv eingestellt.

Der Anschluss
-------------
Da für den Anschluss zuerst das Kabel zum Grundstück verlegt und anschließend eine Bohrung ins Haus vorgenommen werden muss, hatte ich im Kopf, dass einmalige Kosten von 750€ anfallen. Durch [Subventionen des Staates für den Ausbau des Glasfaser-Netzes](https://www.bmvi.de/DE/Themen/Digitales/Breitbandausbau/Breitbandfoerderung/breitbandfoerderung.html) sind diese Kosten nun allerdings weg gefallen, so dass wir eine einmalige Anschlussgebühr von knapp 90€ bezahlen mussten. Und solche Gebühren fallen immer an, wenn man einen neuen Anbieter hat.

Zwei Wochen nachdem wir den Vertrag abgeschlossen hatten, kamen eine hand voll Bauarbeiter vorbei. Das Glasfasernetz führt sprichwörtlich direkt vor unserer Haustür vorbei führt, mussten sie von dort nur ein kurzes Stück (_knapp 10 Meter_) neues Kabel verlegen. Sie führten das Kabel unter unserem Gartenzaun und unter den Steinen in unserem Vorgarten her. Das ging erstaunlich schnell. Vor allem sah man am Ende nicht direkt, dass einige Steine des Vorgartens herausgenommen wurden. Nachdem die Männer ihre Arbeit abgeschlossen hatten, guckte kurz vor der Hauswand ein aufgerolltes Stück Glasfaserkabel aus dem Boden.

Eine Woche später kam ein einzelner Technicker vorbei, der sich darum kümmerte, den Anschluss in das Haus zu verlegen. Er selber war den gesamten Nachmittag damit beschäftigt. Die Bohrung am Haus selber dauerte aber nur wenige Minuten. Nach weiteren 30 Minuten hatte er den <abbr title="Haus-Übergabe-Punkt">HÜP</abbr> in der Küche angeschlossen und sagte mir, dass wir jetzt direkt los legen könnten und alles bereit sei.

Anfangsprobleme
---------------
Seit dem haben wir neben unserem Telekom-Router auch noch den Glasfaser-Router stehen. Als ich aber versuchte, mit dem neuen (_von der <abbr title="Deutsche Glasfaser">DG</abbr> gelieferten_) Router ins Internet zu kommen, musste ich feststellen, dass es nicht funktionierte. Sofort warf ich einen BLick ins Protokoll des Routers. Laut ihm war die Verbindung erfolgreich, mir fiel aber sofort auf, dass die <abbr title="Domain Name System">DNS</abbr>-Adresse `0.0.0.0` lautete, was nicht wirklich wie eine gültige <abbr title="Internet Protocoll">IP</abbr>-Adresse aussieht.

Ich rief also bei der Hotline an. Die Mitarbeiterin konnte mir bei dem Problem tatsächlich schnell helfen. Nach zehn Minuten wendete ich eine in der <abbr title="Elektronische Datenverarbeitung">EDV</abbr> gängige Methode an, wenn etwas nicht funktioniert: Ich startete den Router UND den HÜP neu. Zusätzlich hatte die gute Frau aber wohl auch noch aus der Ferne einen Reset des HÜP bewirkt. Anschließend bekam ich aber tatsächlich eine Verbindung hin und war in der Lage, "_mit Lichtgeschwindigkeit zu surfen_". Auch wenn wir in unserem Haus keine <abbr title="Local Area Network">[LAN](https://de.wikipedia.org/wiki/Local_Area_Network)</abbr>-Anschlüsse verlegt haben und ich daher defakto nicht auf diese Geschwindigkeit kommen kann. Aber dank 5GHz komme ich mit meinen Clients immerhin auf Geschwindigkeiten von bis zu 600 MB/s, was noch immer 12 mal schneller ist als bisher.

Neuaufbau des lokalen Netzes
----------------------------
Den neuen Hausanschluss habe ich neulich noch als Anlass genommen, unser lokales Netzwerk zu optimieren. An meinem Arbeitsplatz-Rechner habe ich nun eine weitere Fritzbox als [Hub](https://de.wikipedia.org/wiki/Hub_(Netzwerktechnik)) angeschlossen, womit meine Rechner nun zumindest Lokal per LAN verbunden sind. Außerdem wird die [Fritzbox als Luftbrücke](https://de.wikipedia.org/wiki/Repeater) zwischen dem Hausanschluss und weiteren Geräten, die eigentlich zu weit entfernt sind verwendet. Somit haben wir in unserem haus nun drei WLAN-Spots, die alle 5GHz verwenden und auch dementsprechende Geschwindigkeiten vorweisen können.

Neulich habe ich mir ein Installations-Image für [Debian](https://www.debian.org/) heruntergeladen. Die knapp 120MB waren in vier Sekunden heruntergeladen. Das war ein serh schöner Augenblick. Nun kann ich auch ein kleines Rechenzentrum zuhause betreiben. Wir wären sogar redundant, da man parallel den "alten" Telekom-Anschluss mit der 50.000er-Leitung anbinden könnte. Es gibt so viele Möglichkeiten.
