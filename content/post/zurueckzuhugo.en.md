---
title: "Back to Hugo"
description: "After almost two years of using VitePress to build this blog I returned to Hugo. The important question is: Why?"
summary: "For over a year I've tried to use VidePress to build this blog which mostly worked well. But now I am returning to Hugo. Why did I decide to leave the new technology and use the _old_ Hugo again?"
summary: "Ein Jahr lang habe ich versucht, VitePress für meinen Blog zu benutzen, was mehr oder weniger auch gut geklappt hat. Allerdings hat es mich nun doch zu Hugo zurück gezogen. Aber wieso sollte ich einer neuen Technologie vie VueJS den Rücken kehren und zu (_in den Augen einiger_) Bloatware zurück wechseln?"
date: "2024-05-05T18:00:00+01:00"
tags:
  - "Hugo"
  - "VitePress"
  - "Markdown"
  - "Technology"
draft: false
author:
 - "marius"
---

## Current Situation
For almost two years now, my blog has been running on VuePress. I [wrote about it](/en/post/vitepress/) when I made the switch. At work, we were increasingly using Vue in the frontend and also began to use it for individual small documentations. I still think it is generally a superb solution for this purpose. That's why I switched from [Hugo](https://gohugo.io/) back then.

## Biggest Drawback for the blogging purpose
From the beginning, using it for my blog was somewhat of a workaround. Initially, VitePress wasn't designed to run blogs. If I understood correctly, this capability was added somewhat later. I implemented a few workarounds here and there that made things easier for me. Over time, out-of-the-box solutions for these issues became available, but I never updated my code accordingly.

## Why back to Hugo then?
From time to time, we make decisions that might not be rationally justifiable. At work, I continue to use VuePress. I still like it because it allows you to achieve very nice and useful results quickly. At the same time, I have always liked Hugo, even though it uses Go, a language I am not really proficient in. It might be very subjective, and the reason for this probably lies with me, but I feel that I get more stable results with Hugo. This doesn't mean it's better. However, I write my posts on different computers. The entire blog is version-controlled with git. Depending on which computer I'm using, the build and deployment processes differ. Different operating systems (_e.g. Arch Linux and Debian_) come with different Node and NPM versions, which inevitably lead to different results depending on where I build the blog. With Hugo, this issue fundamentally exists as well, but I feel that there are fewer breaking changes with it.

## Conclusion
As I said, it's absolutely subjective. I am aware that some colleagues may roll their eyes at this. And even now, at the end, I still lack a compelling reason for switching back. But for me, it might just work a bit better. Nevertheless, I was surprised to see how much has changed in Hugo and what is now possible. For now, I will keep things low-key and ensure that the blog at least won't be worse than it has been. I also need to think about whether the [Mainroad](https://github.com/Vimux/Mainroad/) theme will be permanent. Time will likely tell.
