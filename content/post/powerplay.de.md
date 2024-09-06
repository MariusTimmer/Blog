---
title: "Mein Internet-Radio-Sender Powerplay"
description: "Ich spiele mit dem Medium Radio herum und habe meinen eigenen Radio-Sender gestartet, etwas, das ich schon als Kind machen wollte"
summary: "Als Kind wollte ich immer einen eigenen Radiosender haben, wusste aber, dass das verboten ist. Darum faszinierten mich Filme wie Radiosender Powerplay oder Pogo 1104 schon immer. In Zeiten des Internets ist es aber noch einfacher geworden, seinen eigenen Sender aufzusetzen. Vielleicht gehts ja eines Tages noch ins richtige Radio."
author: "Marius Timmer"
keywords: ["Internet radio", "Piratensender", "Powerplay", "Thomas Gottschalk", "Mike Krüger", "GEMA", "Deep web", "Icecast2", "Mixxx"]
date: "2020-04-30T17:00:00+02:00"
lastmod: "2024-09-04T20:00:00+02:00"
draft: false
---

Als Kind habe ich bei meinem Vater immer viele Filme gesehen. Einer davon ist mir besonders in Erinnerung geblieben: [Piratensender Powerplay](https://de.wikipedia.org/wiki/Piratensender_Powerplay) ([_Trailer_](https://www.youtube.com/watch?v=_sbr2iduTyQ)). Es mag vielleicht daran liegen, dass ich sowieso eine Schwäche für schlimme Filme (_z.B. ["Tremors"](https://de.wikipedia.org/wiki/Tremors_%E2%80%93_Im_Land_der_Raketenw%C3%BCrmer)_) habe, aber die mit [Thomas Gottschalk](https://de.wikipedia.org/wiki/Thomas_Gottschalk) und [Mike Krüger](https://de.wikipedia.org/wiki/Mike_Kr%C3%BCger) gedrehten Filme haben mir schon immer Spaß gemacht. Darum war ich auch schon immer von dem Piratensender Powerplay fasziniert. Da das Funken ohne Lizenz ja verboten ist, haben die beiden in dem Film ihre Sendeanlage einfach in einen VW Bulli gebracht und fahren durch die Stadt, um vor den Postautos in Sicherheit senden zu können.

In meiner Jugend hatte ich von meinem Vater einmal eine "kleine" (_10x10cm_) Wanze geschenkt bekommen, welche auf 107.0 MHz gesendet hat. Damit hatte ich seiner Zeit sehr viel Spaß, wenn auch die Reichweite auf hundert Meter begrenzt war. In meinem jugendlichen Leichtsinn wollte ich das Problem erhöhen, indem ich mehr Energie auf die Wanze gab - aus der Steckdose. Ich muss nicht groß erwähnen, dass das keine gute Idee war.

Fehlender Charme
----------------
Die Tatsache, dass man selber auf einer Frequenz im <abbr title="Ultrakurzwelle">UKW</abbr>-Bereich seine Musik und sein Gerede in den Äther schießen kann, faszinierte mich schon immer, auch wenn ich gar nicht genau weiß warum eigentlich. Um einigermaßen am Puls der Zeit zu sein, sendet man heutzutage natürlich ins Internet. Auch wenn es nicht das selbe ist, ist es schon ziemlich cool. Zum Glück bin ich technisch interessiert und konnte so relativ einfach einen [Icecast2](http://icecast.org/)-Server aufsetzen, damit meine Inhalte ins Internet posaunt werden können. Daran bindet man eben ein Quell-Programm auf seiner lokalen Kiste (_in meinem Fall [Mixxx](https://mixxx.org/)_) und schon kann es los gehen.

Publizieren
-----------
Mal wieder besteht die größte Hürde nicht aus irgendwelchen technischen Spielereien, sondern eher darin, korrekt publiziert zu werden. Es ist im Grunde das gleiche als wenn du einen YouTube-Kanal oder kleinen Blog führst. Prinzipiell ist es alles eine coole Sache, aber man muss am Ball bleiben und irgendwie dafür sorgen, dass Leute davon Wind kriegen. Ansonsten ist es wie ein digitalisiertes Selbstgespräch. Das will man ja auch nicht haben. man kann so viel <abbr title="Search Engine Optimization">SEO</abbr> betreiben wie man möchte, ohne die Inhalte kommt man nicht weit.

Wie attraktiv es allerdings ist einen Sender zu hören, der nur einige Stunden am Tag sendet ist natürlich auch fragtlich. Prinzipiell könnte ich auch bestimmt nocht dafür sorgen, dass meine Musik-Bibliothek 24/7 als eine Art Fallback sendet. Wenn ich dann aktiv "_moderiere_" und bewusst Lieder einschalte, würde dies einfach diesen Fallback ersetzen, bis ich wieder offline gehe. Vielleicht werde ich mich die Tage ja noch darum kümmern.

Wie lange ich Spaß daran haben werde, Musik zu hören, parallel zu senden und dabei noch hin und wieder rein zu quatschen wird die Zukunft zeigen. Wenn ihr aber Lust habt, einmal rein zu hören, könnt ihr das entweder über die kleine [Webseite](	https://icecast.mariustimmer.de/) machen die ich dafür eingerichtet habe, einfach hier unten abspielen (_falls ich gerade sende_) oder den [direkten Link zum Stream](	https://icecast.mariustimmer.de/powerplay.ogg) verwenden.

Update vom 05.06.2020
---------------------
Heute habe ich einen Reverse-Proxy auf meinr Haupt-Seite (_also diese hier vom Blog_) eingerichtet. Dadurch musste ich mich nicht mit der SSL-Engine von Icecast auseinander setzen, was bei mir auf anhieb auch gar nicht funktioniert hatte. Stattdessen Habe ich dem Icecast nun einen eigenen DNS-Eintrag geschenkt und kann nun die ganz normale SSL-Engine von Apache (_mit der ich auch vertraut bin_) benutzen. So können nun auch die Chrome-Nutzer von euch, die kein Einbinden von HTTP-Inhalten auf HTTPS-Seiten erlauen ermöglichen.

<audio class="card-img-top" controls>
    <source src="	https://icecast.mariustimmer.de/powerplay.ogg" type="audio/ogg" />
	Dein Browser kann das nicht <code>:(</code>
</audio>
