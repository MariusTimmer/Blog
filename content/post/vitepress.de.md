---
title: "Umstieg von Hugo auf VitePress"
description: "Nach langer Zeit probiere ich einen Wechsel der Blog-Software hin zu VitePress."
date: "2023-01-11"
draft: false
keywords: ["Hugo", "VitePress", "Blog", "statische Seite"]
tags: ["Hugo", "Technik"]
---

Hugo war gut
------------
Vor fast sechs Jahren hatte ich mich endgültig von WordPress verabschiedet
und mich einem statischen Webseiten-Generator namens [Hugo](/post/hallo-welt)
zugewandt. Es war die perfekte Lösung, da ich all die Sicherheitsrisiken von
WordPress auf einen Schlag weg waren und zudem die Performance des Blogs
aufgrund der so erhaltenen statischen Webseite unheimlich beschleunigt wurde.

Außerdem war ein weiterer großer Pluspunkt, dass ich meine Beiträge einfach
als Markdown verfassen konnte und automatisch "_schicker_" Output generiert
wurde. Über die Zeit machte ich einige Optimierungen an der Konfiguration
und vor allem dem Theme. Letzteres war vielleicht nicht das eleganteste,
allerdings passte es optisch zu mir und funktional war es maximal auf
[Suchmaschinenoptimierung](https://de.wikipedia.org/wiki/Suchmaschinenoptimierung)
und automatisierte semantische Auswertungen per [RDFa](https://de.wikipedia.org/wiki/RDFa)
optimiert. Daher tauchte ich in den Ergebnissen der Suchmaschinen immer
ganz oben auf. Durch eine automatisch generierte Sitemap liesen sich sogar
die Unterseiten bei den Suchmaschinen perfekt auswerten. Eines der besten
aber leider viel zu selten genutzten Features war die Mehrsprachigkeit, durch
die ich einige Artikel auch auf Englisch veröffentlichen konnte.

Diese maximale Anpassungsfähigkeit macht Hugo zu einer Software, die ich auf
jeden Fall mit gutem Gewissen weiterempfehlen kann.


Wieso dann etwas Neues?
-----------------------
Unter technik interessierten gilt der persönliche Blog ja immer wie eine Art
Aushängeschild, an dem fremde direkt sehen können, was man alles kann.
Natürlich gehen die Fähigkeiten weit über das hinaus, was für einen simplen
Blog wie diesen benötigt wird, aber dennoch versucht man dann jedes kleine
Stück Performance herauszukitzeln. Beim Verfassen der meisten Beiträge war
mir wichtig, dass der Lighthouse-Wert schön hoch ist. In der Regel war er
auch bei 99 oder sogar 100.

Obschon ich ein Fullstack-Entwickler bin, habe ich in den vergangenen Monaten
(_vielleicht auch Jahren_) bemerkt, dass meine Fähigkeiten im Frontend nicht
mehr zeitgemäß sind. Mit den Kollegen haben wir uns darauf geeinigt, bei
neuen Anwendungen auf [VueJS](https://vuejs.org/) zu setzen. Allerdings
dauert es wohl noch einige Zeit, bis alle Anwendungen darauf umgestellt sind.
Das passiert in der Regel nur, wenn sowieso etwas verändert wird und es sich
dann anbietet, auch das Frontend neu zu gestalten. Immer wieder merke ich,
dass man auch einiges dafür tun muss, nicht "_abgehängt_" zu werden oder
den Anschluss zu verlieren. Außerdem sagt man ja: "_wer rastet, der rostet_".

Ich sehe es also als eine Art persönliche Herausforderung an sich selber,
auf dem Laufenden zu bleiben und diese Technologie zu verinnerlichen. Es
auch für diesen Blog zu nutzen, bietet sich also quasi an.


Was ändert sich durch VitePress?
--------------------------------
Die bisherige Möglichkeit, einfach Markdown-Dateien zu schreiben, die dann
zu Beiträgen publiziert werden bleibt mir erhalten. Ser praktisch ist auch,
dass ich weiterhin [Frontmatter](https://gohugo.io/content-management/front-matter/)
benutzen kann, was durch die Nutzung von Hugo bereits vorhanden ist.
In Zukunft werde ich aber die Möglichkeit haben, Vue-Komponenten zu schreiben
und immer wiederzuverwenden. Es sei auch noch erwähnt, dass VitePress nicht
einfach nur Vue bedeutet. Wie der Name schon verrät, kommt [Vite](https://vitejs.dev/)
als schlanke Webpack-Alternative zum Einsatz. Das vereinfacht das Entwickeln
sehr. Ursprünglich gab es [VuePress](https://vuepress.vuejs.org/), wovon
[VitePress](https://vitepress.vuejs.org/) dann abgeleitet wurde.
Der eigentliche Anwendungsfall war die Dokumentation von Anwendungen.
Allerdings kann man es eben auch missbrauchen, um es als Blog-Software
einzusetzen. Ein Kollege erzählte mir schon von [Content für NixtJS](https://content.nuxtjs.org/),
welches eher auf Blogs spezialisiert sei. Vielleicht werde ich mir das in
den kommenden Wochen ja auch mal ansehen und als Proof of Concept
bereitstellen und eine Zeit lang testen.

Aktuell versuche ich meinen alten in Hugo gebastelten Blog in VitePress
nachzubilden. So wie es aussieht, wird keine Mehrsprachigkeit unterstützt.
Ich könnte es bei mir selbst einbauen, allerdings ist das mit Aufwand
verbunden und bisher habe ich die Mehrsprachigkeit noch nicht stark
genug genutzt um das zu rechtfertigen. Ich hoffe, meine englischen Leser
werden mir das verzeihen.

Was die Metadaten für das semantische Auswerten und die Suchmaschinen angeht,
habe ich zumindest das Theme um die Meta-Felder erweitert. Wie man aber
vielleicht schon bemerkt hat, werden Artikel nicht mehr mit Schlüsselwörtern
zusammen  gefasst. Dafür habe ich mir eine Alternative überlegt, um
Beiträge in [Tags](/tags/) zu sortieren und darüber miteinander zu verlinken.
Den Teil finde ich fast sogar übersichtlicher, wenn auch erschlagender
als zuvor.

Dass mein Lighthouse Score ein wenig gesenkt wird, erwarte ich eigentlich
fest. Allerdings denke ich mal, dass ich mir das zum einen leisten kann
und zum anderen mit der Zeit ebenfalls wieder optimieren werde. Und wenn
es mir am Ende doch nicht so sehr gefällt, habe ich noch immer die Möglichkeit
zu Hugo zurückzukehren. Schließlich versioniere ich alles mit git, habe für
diesen Versuch eigens einen neuen Branch angelegt und könnte neu erschienene
Beiträge eben rüberziehen. Da beide "_Technologien_" auf Markdown-Dateien
mit ein bisschen Frontmatter basieren, ist das auch absolut kein Problem.


Fazit
-----
Auch wenn VitePress noch in der Findungsphase und noch nicht _fertig_ ist
und ich hier oder da sicher noch einiges Ändern werde (_und auch muss_),
bin ich sehr zuversichtlich, dass mir dieses kleine Abenteuer Spaß machen
wird. Und selbst wenn nicht, habe ich am Ende zumindest einiges über Vue
in Verbindung mit Vite gelernt. Wie gut das alles geklappt haben wird, könnt
ihr in eurer Zukunft ja besser sehen, als ich jetzt gerade. Auf jeden Fall
werde ich euch auf dem Laufenden halten.
