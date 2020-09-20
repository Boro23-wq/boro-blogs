---
title: Google's 2-Waves indexing (SEO)
description: Know how Google handles SEO in two different waves.
date: 2020-08-24
category: 'technology'
draft: false
---

![](https://statuslabs.com/wp-content/uploads/SEO-Pillar-Post-Art-.png)

The very decisive reason we care about Search Engine Optimization (SEO) is because lot of the modern webpages are written in JavaScript today. You might have really great content on your website but if you somehow fail to handle the SEO intricacies, your page is probably not going to be indexed and ranked by Google whatsoever.

## Google Bot : Google's web crawler.

**_Googlebot_**, the web crawler software utility used by Google, crawls JavaScript sites in two waves. It can rightly take upto a few days for Google to completely process webpages that utilizes JavaScript.

<br/>

![Google-Bot](https://news-cdn.softpedia.com/images/news2/googlebot-may-accidentally-ddos-your-spam-infected-website-496379-2.jpg)

<br/>

Rendering pages at scale requires a lot of time and computation power. And this has been a serious challenge for web crawlers for a really long time.

Since SPA's or JavaScript powered websites doesn't really have any kind of context to be indexed at first, Googlebot actually defers the process of crawling at the first render, and waits until it can find enough resources to be crawled.

Googlebots essentially crawls a page, fetches the server-side rendered content and then runs some initial indexing on that document. So if it's an SPA or a JavaScript powered site, the rendering is deferred until it finds enough resources to be crawled.

So Googlebot might index a page before the rendering is complete and the final render can actually arrive several days later. And when that final render does arrive, then it performs another wave of indexing on that client-side rendered content.

And this could further mean that this asynchronous crawling process could essentially effect JavaScript powered websites heavily and for the most part very critical details could be missed.

## How Google Search indexes JavaScript sites ?

**_Tom Greenwood_** and **_John Mueller_** during Google I/O'18 rightly discussed what could be a massive downgrade for JavaScript powered websites:

<br/>

<iframe width="678" height="381" src="https://www.youtube.com/embed/PFwUbgvpdaQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br/>

For any site depending heavily on Javascript, more specifically for any news oriented websites, where things rapidly change, any kind of information has the potential to get critically outdated between the two waves of indexing. When Googlebot don't see any good content to crawl for indexing, these pages essentially doesn't happen to see any traffic until Googlebot is back for the second wave of crawling the page.

And this delay can cause severe issues. The delay would certainly mean that these webpages may not see any traffic until Googlebots second return to crawl, which can ultimately result in a loss of potential traffic and revenue.

## Google’s 2-waves indexing summarized:

- In the very first wave, HTML and CSS will be crawled and indexed, almost instantly at the first render.
- In the second wave, Google will come back (a few days to weeks later) to render and index JavaScript-generated data.

<br/>

![Two-waves-indexing](https://image.slidesharecdn.com/seo-for-progressive-web-apps-pwa-180605232126/95/seo-for-progressive-web-apps-pwa-and-js-frameworks-35-638.jpg?cb=1528241060)

<br/>

Since crawling JavaScript is a fairly expensive process, it requires some time, huge amount of processing power, computational resources and memory and hence Google rightly implemented the crawling process in two phases to meet all this demands substantially.

Another valid reason why processing JavaScript is so expensive because JavaScript code essentially resides in the CPU.

---

That was it about the Google's 2-waves indexing process. I felt this was really an interesting subject to talk upon as we are daily bumping through JavaScript powered websites and the very next time you build an SPA that requires SEO you know you need to handle SEO gracefully.
