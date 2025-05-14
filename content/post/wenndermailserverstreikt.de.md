---
title: "Wenn der eigene E-Mail Server streikt"
description: "Wer seinen eigenen Blog hostet, hat in der Regel auch einen eigenen E-Mail Server. Unangenehm ist es, wenn er nicht funktioniert."
summary: "Einen eigenen E-Mail Server zu betreiben hat viele Vorteile - zum Beispiel die absolute Autonomie. Dass das aber wesentlich aufwändiger und manchmal auch unpraktisch sein kann, hat sich jetzt mal wieder gezeigt. Ich werde aber trotzdem weiterhin auf einen eigenen E-Mail Server setzen."
draft: false
date: "2025-05-10T00:45:23+02:00"
tags:
 - "Technik"
keywords:
 - "E-Mail Server"
 - "Postfix"
 - "Spam Blocklisten"
images:
 - "/img/postfix_logo.webp"
author:
 - "marius"
---

Als ich 2004, in der fünften Klasse, bei der Schülerzeitung anfing, brauchte jeder von uns eine eigene E-Mail Adresse. Damals war das Internet noch ganz anders und die meisten Anbieter für E-Mail Postfächer wollten Geld sehen. Zusammen mit unserem Lehrer holten wir uns eine "_FreeMail_" bei web.de und machten unsere ersten Schritte im Internet. Auch wenn ich das Passwort natürlich mehrmals geändert habe (_und teilweise auch musste_), benutze ich nach wie vor, auch nach 21 Jahren, immer noch diese E-Mail Adresse.


## Warum ein eigener E-Mail Server?
Ein richtiger IT-ler, der etwas auf sich hält, muss früher oder später aber seinen eigenen E-Mail Server betreiben. Wenn man beim Teilen seiner Mail-Adresse mit Gleichgesinnten eine web.de-Adresse zeigt, wird man schnell mal müde belächelt. Eine eigene Domain sollte man da schon irgendwie besitzen. Und wenn man die besitzt, ist der nächste logische Schritt auch ein eigener E-Mail Server.

Deswegen, und weil ich mal wieder die absolute Autonomie habe, betreibe ich seit Jahren auch einen eigenen Postfix-Server. Es gab durchaus schon mal Probleme, weil mein Server vor einigen Jahren auf einer öffentlichen Blacklist auftauchte. Die Folge war, dass andere Betreiber die E-Mails meines Servers dann monatelang nicht angenommen haben, was wirklich nervig sein kann, wenn es einem nicht direkt auffällt.


## Wie ich den Fehler festgestellt habe
Durch die [#BlogWochen2025](/tags/blogwochen2025) kam ich in Kontakt mit einigen anderen Blogs und musste dabei leider feststellen, dass mein E-Mail Server ohne Probleme versenden konnte, allerdings keine E-Mails angenommen hat. So hatte ich Robert von [nureinblog.at](https://nureinblog.at/) beispielsweise mehrere Mails geschickt, was ich erst über eine Nachricht von ihm auf Mastodon erfuhr. Das war mir direkt peinlich. Denn natürlich funktioniert mein Postfix super - nur halt nicht, wenn man ihn mal braucht.


## Spam Blacklist von Spamhaus
Erst einen Tag später fand ich Zeit, mich auf die Fehlerursache zu machen und fand heraus, dass ich mich beim Einrichten von Postfix am Debian-Wiki entlang gehangelt hatte. Dabei wurde einem empfohlen, Spam zu verringern, indem eingehende Mails nur angenommen werden, wenn sie nicht von Spam Blacklists kamen. Das wurde damals über Spamhaus bewerkstelligt. Inzwischen funktionierte das aber nicht mehr so wie damals - ich glaube, die Firma hat ein Bezahlmodel eingeführt oder etwas anderes an der Funktionsweise hatte sich geändert.

Nachdem ich den Anbieter gewechselt habe (_jetzt ist es barracudacentral.org_), funktioniert Postfix nun auch wieder wie gewohnt und ich kann endlich wieder Mails empfangen. Das betrifft zwar sicher auch wieder viel Spam, aber im Zweifel kann ich damit leben, da ich das selber ganz gut raus filtern kann. Allerdings war ich nun knapp einen Monat nicht über meine eigene E-Mail Adresse erreichbar. Das ist natürlich nicht unangenehm, zumal ich nicht weiß, ob in der Zeit vielleicht wichtige Nachrichten rein kamen. Das ist halt eine der Nachteile, wenn man seine Dienste selber betreibt. Aber dennoch ist es das für mich wert.

---

Sollte also einer von euch versucht haben, mich per Mail zu erreichen, [so wie ich es bevorzuge](/contact/), versucht es gerne noch einmal. Auch wenn ich diese Mail-Adresse(_n_) eher weniger benutze, fiel mir heute ein Stein vom Herzen, als es wieder funktionierte.
