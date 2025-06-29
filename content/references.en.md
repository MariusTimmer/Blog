---
date: "2019-01-29T20:26:17+01:00"
draft: false
title: "My references"
description: "A summary about all relevant thing I've done in the past"
priority: "0.9"
---

## Web sites
Since I am a software developer and who started at a young age writing my own
programs I learned HTML, CSS and JavaScript a very long time ago. Of course I
am always learning new things so my abilities grew. That led me to support
family and friends by creating websites for them. In rare cases I wrote
the complete site by hand. Usually I set up a simple wordpress, made it
more secure and told them how to use it:

 - [Kolpingsfamile Laer](https://kolping-laer.de/)
 - [Tanja Köster](https://tanjakoester.de/)
 - SEO optimized "_card_" for self-employed friends


## OTRS Plugins
To manage our tickets at the university we use [OTRS](https://en.wikipedia.org/wiki/OTRS)
which I am the administrator of. But I also wrote a few plugins
(_aka. packages_) to optimize it for our use cases. Perl was never my choice,
but I am lucky that the OTRS code is well documented and it was easy for me to
start writing those packages.

In addition, I participate at a few meetings of German universities and other
high schools in the whole country to exchange our knowledge regarding out own
plugins or the way I administrate our system (_like updating the source, etc._).

This is a short list of the plugins I've written:

 - [Queueadmin](https://zivgitlab.uni-muenster.de/wwu-it/otrs/OTRS_TemplateSignatureAddOn)-Extension
    - My graduation project back in the day (_2016_) which allows so called
      _Queueadmins_ to manage mail templates and signatures without having
      the need to let the admin manage it all.
 - [External data extension](https://zivgitlab.uni-muenster.de/wwu-it/otrs/OTRS_LinkableDBEntities)
    - Allows you to connect everything represented within the database to
      your tickets. This is very handy when using a foreign data wrapper.
 - [Multiple ticket export](https://zivgitlab.uni-muenster.de/wwu-it/otrs/OTRS_MultipleTicketExport)
    - Required by us when we upgraded to OTRS 5 and wanted to export
      the tickets of not just one single queue to PDF files.


## PostgreSQL database
Thanks to my work I was also involved in the development of
the [PostgreSQL database](https://en.wikipedia.org/wiki/PostgreSQL). I've
reviewed some patches and wrote some myself. That doesn't mean that much of
my code got into the main branch. To be part of the commitfest was a super
exciting experience.

My feature request and patch for the [sort order of the `EXPLAIN` command](https://www.postgresql.org/message-id/F4FF595C-D39D-4036-A446-57C91ABE6B31%40exchange.wwu.de),
was reviewed and [almost complete rewritten by Tom Lane](https://www.postgresql.org/message-id/28519.1421451907%40sss.pgh.pa.us).


## Volunteer fire department of Havixbeck
Shortly after graduating from high school, I wrote two programs for
the volunteer fire department in Havixbeck. The first was exclusively
for logging events during an operation (_called EST; of course a German
abbreviation_). The other was to give the men in the emergency vehicle
an additional warning if a team had been in action for too long and was
in danger of running out of oxygen.
