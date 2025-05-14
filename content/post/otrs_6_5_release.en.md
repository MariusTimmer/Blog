---
title: "The new OTRS 6.5 LTS-Release arrived"
description: "After some time of waiting, the new LTS version 6.5 of OTRS by Znuny has been released."
summary: "I am happy to see the release of the LTS version 6.5 of (Znuny) OTRS. Especially after the support end of the community edition of the OTRS AG."
draft: false
date: "2023-09-27T12:00:00+01:00"
mastmod: "2024-08-08T08:00:00+02:00"
keywords: ["OTRS", "Znuny", "LTS-Release"]
tags: ["Technology", "OTRS"]
author:
 - "marius"
---

As I mentioned in [previous posts](/post/znunyotrslts2023) (_only available in German_), the current LTS version of OTRS (_6.0_) was officially deprecated at the turn of the year, and it's successor (_6.5_) was announced. The previous version was still officially supported until the release of 6.5.

After several weeks of waiting, the time has finally come: Znuny has released [OTRS 6.5.1 as an LTS version](https://www.znuny.org/en/releases/znuny-lts-6-5-1). Actually, it was released two weeks ago, as I just noticed. However, I usually check Znuny's releases page only once a week. So, I'm even more delighted now!

With this LTS release, I can not only update the existing OTRS instances I run but also (_and this is quite important_) finally have the opportunity to adapt the self-written extensions (_e.g., [Queueadmins](https://zivgitlab.uni-muenster.de/wwu-it/otrs/OTRS_TemplateSignatureAddOn) or [Multiple Ticket Export](https://zivgitlab.uni-muenster.de/wwu-it/otrs/OTRS_MultipleTicketExport)_) to the new stable version. After all, I can’t simply install the old plugins on the new OTRS. Firstly, because OTRS itself will prevent me from doing so due to different version strings, and secondly, because the versions would simply be incompatible and could cause errors. Now that the specific version is available, I finally know which code these extensions need to be developed against.

In the coming weeks, it's all about: developing, porting, and most importantly: updating! 🥳

---
### Update from August 2024
It has been a year since the LTS version came out. It may sound ridiculous but I still didn't have found enough time to migrate the existing extensions to the new version. I really hope to manage it in the comming days.
