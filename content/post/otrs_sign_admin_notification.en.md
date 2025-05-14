---
title: "OTRS does not sign Admin notifications"
description: "OTRS does not sign admin notifications sent to agents. This causes confusion, and there’s no good reason for it."
summary: "Although OTRS is capable of signing and encrypting emails, outgoing admin notifications to agents are not signed. This confuses some of my agents and is puzzling to me."
draft: false
date: "2024-12-03T23:00:00+01:00"
keywords:
 - "OTRS"
 - "Sign Admin Notifications"
 - "S/MIME"
images:
 - "/img/logo_envelope.webp"
author:
 - "marius"
---

## What Exactly Is My Problem?
From time to time, I need to apply spontaneous updates to our <abbr title="Open Ticket Request System">OTRS</abbr> system or make other unforeseen fixes. Regular system updates are done via crontab once a week during the night, so that the subsequent reboot causes as little disruption as possible to agents. However, if it is necessary to shut down the service for a few minutes, I always inform all agents beforehand. I first enable [System Maintenance](https://otrscommunityedition.com/doc/manual/admin/6.0/en/html/administration.html#adminarea-systemmaintenance) to inform agents who are actively working. Most importantly, I also send an admin notification to all agents in the system. In our instance, this currently involves over 800 users, so I need to allow some time for the emails to be delivered on time. So far, I’ve always done well with an hour’s notice, but I know that some agents are not pleased with this.

As the data center of the University of Münster, we take security and integrity very seriously. Therefore, [we’ve been encouraging our users](https://www.uni-muenster.de/CA/de/howto-mail.shtml) to use S/MIME for email communication for years. This includes sending emails with signatures by default, but especially ensuring that incoming emails have a valid signature.

That's why it’s so embarrassing that, after sending each admin notification, some colleagues ask if the email was legitimate because it wasn’t signed.

## Why Sign Admin Notifications?
There are [several reasons](https://www.uni-muenster.de/Informationssicherheit/sch_tzen/Schutz_vor_betruegerischen_E-Mails.html) why securing email communication is important. On one hand, it’s crucial when dealing with targeted attacks – such as **social engineering**. But it can also be important for mass emails. There’s a reason spam emails, which are sent in bulk, are never signed. My specific use case is, of course, much smaller, with fewer than a thousand users. However, it’s easy to imagine that an attacker could exploit a compromised email account in this way. Instead of informing all users that the system will be unavailable for a few minutes, the attacker could instead ask users to send an email with their login credentials to "verify" them – admittedly a crude attempt, but in doubt, it only takes one person to fall for it.

A signature legitimizes an email and assures the recipient that the message was sent both from the admin account and the owner of the certificate.

Furthermore, what kind of message does it send about us as a data center, which always recommends users to use SSL certificates, yet doesn’t implement it themselves? That’s quite awkward and needs to be corrected as soon as possible.

## My Possible Solution
The situation becomes even more absurd when you consider that OTRS is fully capable of managing and using [S/MIME certificates](https://otrscommunityedition.com/doc/manual/admin/6.0/en/html/administration.html#adminarea-smime) (_and the associated keys_). Incoming emails show the SSL signature status in the ticket overview, and encrypted emails can also be decrypted by OTRS. Conversely, OTRS can sign and encrypt outgoing emails if the recipient’s certificate is known.

In general, OTRS does support SSL. So, it makes no sense to me that admin notifications are not only unsigned, but I’m also not given the option to sign them as an admin. The email address, SSL certificate, and the associated key are already set up in OTRS. There’s really no reason why this isn’t being done.

Therefore, I’ll soon write a small OTRS extension that automatically signs admin notifications if a certificate is available. This should be a minor change. Even though I’m still using the old <abbr title="Long term support">LTS</abbr> version 6.0.x, I’ll target the current OTRS LTS version 6.5, as I plan to migrate to that as soon as possible. Additionally, it wouldn’t be helpful to write the extension for an outdated system, especially since I still have three other plugins to migrate to the current 6.5 LTS version.

Once I’ve completed the extension, I’ll share it here (_and possibly on gitLab_). But if I’m completely off base and you’re not sure what I’m talking about because your OTRS system already signs admin notifications, please let me know.
