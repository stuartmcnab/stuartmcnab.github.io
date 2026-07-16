---
layout: post
title: "The three node problem"
date: 2026-03-030 13:30:00 -0000
categories: blog
---

# The Three Node Problem

*How I went from lonely with Meshtastic to a three-node MeshCore setup.*

## What is LoRa and MeshCore?

If you've not come across this stuff before, here's the short version.

**LoRa** (Long Range) is a low-power radio technology that trades bandwidth for range. It won't stream video or even load a webpage, but it can carry small packets of data — like a text message — over several kilometres, using very little battery. No SIM card, no Wi-Fi, no 3/4/5G.

**MeshCore** is one of a handful of open-source firmwares that turns cheap LoRa hardware into a *mesh* — a network of radios that pass messages to each other, hop by hop, until they reach their destination. It's the newer cousin of the better-known Meshtastic project, and it takes a deliberately different approach to routing. Rather than every device flooding every message to everyone in range (Meshtastic's model), MeshCore assigns nodes specific roles — **Companion**, **Repeater**, and **Room Server** — and routes messages through dedicated infrastructure instead of relying on the crowd. The trade-off is that it needs a bit more planning to get right, but it scales much better once you have.

That difference in philosophy — roles instead of everyone-shouts-at-once — turned out to be exactly why I ended up with three nodes instead of one.

## Where it started: Meshtastic and a 3km dream

My original goal was simple: send off-grid text messages to a friend about 3km away, with no infrastructure in between. Meshtastic seemed like the obvious place to start — it's the biggest, most established mesh project, with a mature app, a huge community, and cheap, widely available hardware.

In practice, it didn't go brilliantly. Despite the modest distance, messages just didn't reliably get through. I did manage to pick up some nodes across the river in Kent, which was enough to prove the concept worked *somewhere* — but not enough to reliably message my friend.

Then, one day, it all went dark. My local Meshtastic mesh simply stopped showing up. Early attempts at switching to MeshCore didn't pick up anything either, which was disorienting. In hindsight, this was almost certainly the "great switchover" — a period where a lot of local operators were migrating their nodes from Meshtastic to MeshCore at more or less the same time, leaving both networks looking sparse for a while. Timing, it turns out, matters as much as hardware in mesh networking.

## 2026: two windows, two very different meshes

Fast forward to early 2026, and I gave it a proper go. I had two Heltec WiFi LoRa 32 V3 boards, and I set them both up as MeshCore **Companions** — the client role that talks to your phone or laptop over Bluetooth or USB. One went out of a north-facing window, the other out of a south-west-facing window.

The results were a lesson in how much a few metres and a bit of orientation matter:

- The **south-west window** picked up a good number of nodes, with visibility stretching all the way into London. Lots of nodes seen, but no responses to any messages I sent — I was hearing the mesh, but not really part of it.
- The **north window**, facing a very different direction, picked up something much more useful: **Pete, M0PSX, from Essex Ham**. Pete and I got talking, and it turned out he couldn't see any nodes in his area apart from mine. We started discussing what it would take to get a repeater up near me.

That conversation with Pete is really where this project started to become about more than just messaging.

## The loft repeater

Not long after, the loft repeater happened. One of the Heltec V3 boards went up into the loft, powered permanently from a mains socket via USB, paired with a DIYMall antenna rated (allegedly — antenna gain figures on cheap antennas are notoriously optimistic) at 5dBi. High up, out of the way, always on: exactly what a MeshCore **Repeater** wants to be.

My other Heltec V3 stayed as a Companion. And it worked. I could talk to Pete. I could see nodes across Kent and London via other people's repeaters. And critically, Pete could now see the same mesh I could. One repeater, correctly placed, had done more for connectivity than two companions pressed against windows ever managed.

## Finding out the repeater was actually good

Off the back of that success, I found [meshrank.net](https://meshrank.net) — a site that scores MeshCore repeaters based on real network data, rather than guesswork. It works by having **Observer** nodes report the packets they hear over MQTT, and then reconstructing likely message paths across the whole reported network to work out which repeaters are actually pulling their weight.

Setting up an Observer to feed data to MeshRank let me see, for the first time, an objective measure of how well my loft repeater was performing. At the time of writing, it's sitting at **94 out of 100**. Not bad for a Heltec V3 and a bargain antenna hung under some roof tiles.

There was just one problem: with only two Heltec V3 boards — one now permanently committed to being the loft repeater, and the other now committed to being the Observer feeding MeshRank — I had run out of hardware. I no longer had a spare node to actually send a message with.

## The third node

Which brings us to the third node.

It was ordered today, from AliExpress: a **Heltec V4.3**.

The plan is to reshuffle roles rather than just add one more device to the pile:

1. The new **Heltec V4.3** takes over as the **Repeater** in the loft. From my research, the V4.3 is a more capable board for this role, and — just as importantly — should hold up better to the heat a loft space can reach in summer, which is a real concern for anything expected to run there unattended, 24/7.
2. The original loft **Heltec V3** gets freed up and redeployed as a **Companion**, living on my desk or coming with me, so I finally have a node dedicated purely to sending and receiving messages.
3. The other **Heltec V3** stays exactly where it is, as the **Observer**, quietly reporting to MeshRank.

Which gives me the final, three-node setup:

| Role | Hardware | Location |
|---|---|---|
| Repeater | Heltec V4.3 | Loft, mains-powered, DIYMall 5dBi antenna |
| Observer | Heltec V3 | Desk, feeding MeshRank via MQTT |
| Companion | Heltec V3 | Desk / with me, for actually sending messages |

## Final thoughts

Three nodes is what works for *me*, in *my* location, given the state of infrastructure around me right now. It won't be the right number for everyone.

If you already live near an existing repeater and an existing observer, you might only need one node — a Companion — to get useful range and connectivity out of the box. Two nodes (a Repeater plus a Companion) will suit plenty of people who want to contribute infrastructure but don't care about the MeshRank scoring side of things. Three nodes is what it takes if you want to run your own repeater, verify independently that it's actually any good, and still be able to message.

And that, really, sums up how my priorities have shifted since this started. Messaging a friend 3km away was the reason I picked up a LoRa board in the first place. It isn't the reason I'm still doing this. What keeps me interested now is the infrastructure side — building something decentralised that other people, not just me, get some benefit from. A good repeater helps everyone who happens to be in range of it, whether I ever exchange a single message with them or not. That feels like a better reason to leave a radio running in a hot loft than my original one ever was.