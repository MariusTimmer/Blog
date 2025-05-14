---
title: "Switch from Hugo to VitePress"
description: "After a long time I will try to switch to switch ti VitePress for blogging."
date: "2023-01-11T12:00:00+01:00"
lastmod: "2024-05-05T17:00:00+02:00"
draft: false
keywords:
  - "Hugo"
  - "VitePress"
  - "Blog"
tags:
  - "Hugo"
  - "Markdown"
  - "Technology"
  - "VitePress"
author:
 - "marius"
---

## Hugo was good
Nearly six years ago, I finally said goodbye to WordPress and switched to
a static site generator called [Hugo](/en/post/hallo-welt). It was the perfect
solution as it eliminated all the security risks associated with WordPress in
one fell swoop, and also dramatically increased the performance of the blog
due to the resulting static website.

Another significant advantage was that I could write my posts in Markdown,
which automatically generated more attractive output. Over time, I made
several optimizations to the configuration and, especially, to the theme.
The latter might not have been the most elegant, but it visually suited me
and was functionally optimized to the maximum for [search engine optimization](https://en.wikipedia.org/wiki/Search_engine_optimization)
and automated semantic evaluations using [RDFa](https://en.wikipedia.org/wiki/RDFa).
As a result, I consistently appeared at the top of search engine results.
An automatically generated sitemap even allowed for perfect evaluation of
subpages by search engines. One of the best, though sadly underused features,
was the multilingual capability, which allowed me to publish some articles
in English as well.

This maximum adaptability makes Hugo a piece of software that I just can recommend.

## Why something new then?
Among technology enthusiasts, a personal blog is often seen as a kind
of showcase, where strangers can immediately see what one is capable of.
Naturally, the skills required go far beyond what is needed for a simple
blog like this one, but still, one tries to squeeze out every bit of
performance. When writing most of the posts, it was important to me that
the Lighthouse score was very high, typically at 99 or even 100.

Although I am a full-stack developer, I have noticed in recent months
(_perhaps even years_) that my front-end skills are no longer up-to-date.
My colleagues and I have agreed to use [VueJS](https://vuejs.org/) for
new applications. However, it will likely take some time before all
applications are converted to it. This usually only happens when
something is being changed anyway, and it makes sense to redesign
the frontend at the same time. I often realize that one has to do
quite a bit to avoid being "_left behind_" or losing touch. There's
also the German saying: "_Wer rastet, der rostet_" meaning if you rest,
you rust.

Therefore, I see it as a kind of personal challenge to keep up to date
and to internalize this technology. Using it for this blog seems like
an obvious choice.

## Which changes brings VitePress?
The ability to simply write Markdown files that are then published as posts
is still preserved for me. It's also practical that I can continue to use
[Frontmatter](https://gohugo.io/content-management/front-matter/), which is
already available through using Hugo. In the future, however, I will have
the opportunity to write and reuse Vue components. It should also be noted
that VitePress does not just mean Vue. As the name suggests, [Vite](https://vitejs.dev/)
is used as a lean alternative to Webpack, which greatly simplifies
development. Originally, there was [VuePress](https://vuepress.vuejs.org/),
from which [VitePress](https://vitepress.vuejs.org/) was derived. Its primary
use case was for documenting applications, but it can also be repurposed as
blog software. A colleague told me about [content for NuxtJS](https://content.nuxtjs.org/),
which is more specialized for blogs. Maybe in the coming weeks, I'll also
take a look at it and set it up as a proof of concept to test for a while.

Currently, I am trying to replicate my old blog built with Hugo in VitePress.
It looks like multilingual support is not provided. I could build it myself,
but that involves effort and so far I have not used multilingual capabilities
enough to justify it. I hope my English readers will forgive me for this.

As for the metadata for semantic evaluation and search engines, I have
at least extended the theme to include meta fields. However, as you might
have noticed, articles are no longer summarized with keywords. Instead,
I've thought of an alternative to sort posts by tags and link them to
each other. I find this part almost even more transparent, though more
overwhelming than before.

I actually expect my Lighthouse score to be slightly lowered, but I think
I can afford that and will optimize it over time as well. And if I end up
not liking it very much, I still have the option to return to Hugo. After
all, I version everything with git, have created a new branch specifically
for this experiment, and could pull over newly appeared posts. Since both
"_technologies_" are based on Markdown files with a bit of Frontmatter
this is absolutely no problem.

## Concolusion
Even though VitePress is still in its experimental phase and not
_finished_ yet, and I will surely have to make some changes here
and there (_I indeed have to_), I am very optimistic that I will
enjoy this little adventure. And even if not, at the end of it all,
I will have learned quite a bit about Vue in conjunction with Vite.
How well everything will have worked out, you will be able to see
better in your future than I can now. In any case, I will keep you
updated.

---
### May 2024 update
I just switched back to Hugo after more than one year. It wasn't an easy
for me, but I decided that Hugo is best for me. To read more about it,
you can [read my post](/en/post/zurueckzuhugo) about it.