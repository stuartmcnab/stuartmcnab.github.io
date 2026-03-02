---
layout: post
title: "Over dependant - lessons from code and war"
date: 2026-03-02 19:00:00 -0000
categories: blog
---

# Over dependant - lessons from code and war

TL;DR: Over‑depending on a single technology, vendor, or ally creates brittle systems. In HMI work that means keeping dependencies minimal and swappable; in AI it’s on full display as the US government rushes to replace Anthropic’s Claude with OpenAI in just six months after Anthropic refused to relax its ethical guardrails [`theguardian.com/us-news/2026/feb/27/trump-anthropic-ai-federal-agencies`](https://www.theguardian.com/us-news/2026/feb/27/trump-anthropic-ai-federal-agencies). At the geopolitical level, the UK’s tightly coupled alliance with the US has pulled it into the widening war with Iran, including allowing US use of UK airbases [`theguardian.com/world/2026/mar/02/what-is-uk-involvement-middle-east-war-us-israel-iran`](https://www.theguardian.com/world/2026/mar/02/what-is-uk-involvement-middle-east-war-us-israel-iran). Whether you’re building HMIs or doing foreign policy, you pay a price when you don’t design for for changes in technology.

There’s a particular anxiety that sits at the back of my mind whenever I’m designing a system, especially a high‑performance HMI: what happens if this one thing I’m leaning on disappears, stops being maintained, is compramised?

That “one thing” might be:

- A specific UI toolkit that makes graphics fast and easy.
- A cloud API doing one critical task.
- A vendor library that everyone assumes will always be there.

In HMI work, we ask for a lot: predictable latency, reliable behaviour, and interfaces that can be maintained for a decade or more. Over‑depending on a single technology in that context isn’t just a technical risk; it’s a strategic one.

So I try to design around three principles:

- Minimal dependencies: Only pull in technologies that clearly earn their place. The fewer dependencies, the fewer ways the system can be held hostage.
- Clear seams: Put hard boundaries (interfaces, adapters) between “our core logic” and “someone else’s tech”. When something sits behind a well‑defined seam, it’s easier to swap.
- Deliberate exit strategy: When I choose a framework or service, I ask “what would replacing this actually look like?” If the honest answer is “we’d be stuck for years”, that’s a red flag.

The last few weeks in AI and geopolitics have been a very live reminder of why this matters.

## When your primary tool gets switched off

In late February, Donald Trump ordered US federal agencies to “IMMEDIATELY CEASE” using Anthropic’s technology after Anthropic refused to relax its ethical guardrails for the Department of Defence/War, particularly around mass domestic surveillance and fully autonomous weapons systems that can kill without human input [`theguardian.com/us-news/2026/feb/27/trump-anthropic-ai-federal-agencies`](https://www.theguardian.com/us-news/2026/feb/27/trump-anthropic-ai-federal-agencies).

The Pentagon responded by designating Anthropic as a supply‑chain risk to national security and began a transition period of up to six months to move off Anthropic’s AI services. In parallel, OpenAI announced a fresh deal to supply AI to classified military networks, positioning itself as the replacement provider—while publicly saying that it will keep essentially the same red lines Anthropic refused to move on.

Underneath the politics and ethics, there’s a very simple systems lesson:

- A large part of the US government’s AI stack now has six months to replatform.

Some agencies will cope: they’ll have abstracted Claude behind internal APIs, separated prompt/response formats from specific vendor quirks, and kept their critical logic in their own code. For them, switching to a different model provider will still be painful, but achievable.

Others will discover that they built directly on Anthropic‑specific workflows, relied on subtle behaviour in Claude, or embedded vendor‑specific assumptions deep in their systems. For them, six months will feel brutally short.

This is exactly the kind of scenario I worry about when picking tools for HMIs or any performance‑critical system: what if someone else’s political, legal, or commercial decision suddenly becomes my migration project?

## HMIs, performance, and swappable tech

In HMI design, the constraints look different, but the pattern is the same.

If I pick a single graphics framework and:

- Bind all rendering logic directly to its APIs.
- Scatter vendor‑specific calls across the codebase.
- Let UI logic and business logic blur together inside framework objects.

Then I’ve effectively bet the entire system on that one dependency.

Maybe the framework suddenly:

- Changes licensing.
- Drops support for our target hardware.
- Suffers a security issue that’s unacceptable in our domain.
- Simply stagnates while hardware and OSes move on.

The more tightly coupled I am, the less realistic any migration path becomes.

So in practice, for HMIs, I try to:

- Define our own UI abstractions: Views, widgets, and data models expressed in our language, with the framework sitting under an adapter layer.
- Keep real‑time logic outside the UI: HMIs often have tight timing constraints. Any platform‑specific event loop or rendering jitter shouldn’t be allowed to infect core control logic.
- Treat rendering backends as plugins: Ideally, I could prototype with one toolkit and move to another (or even to a software‑rendered fallback) without rewriting the whole application.

That doesn’t make swapping trivial—it never is—but it changes the nature of the problem. You’re changing a backend, not amputating a limb.

The US government’s scramble to move from Anthropic to OpenAI in six months is what it looks like when these patterns aren’t in place at sufficient depth and scale.

## Alliances, airbases, and unintended coupling

There’s a parallel to all this at the geopolitical level.

The UK’s long‑standing, tightly coupled alliance with the US has now pulled it more deeply into the war with Iran. After weeks of build‑up and initial reluctance, Keir Starmer has given the US permission to use British bases—RAF Fairford in Gloucestershire and Diego Garcia—for what’s being described as a “specific and limited defensive purpose”: striking Iranian missile sites to prevent launches against regional allies [`theguardian.com/world/2026/mar/02/what-is-uk-involvement-middle-east-war-us-israel-iran`](https://www.theguardian.com/world/2026/mar/02/what-is-uk-involvement-middle-east-war-us-israel-iran).

On paper, the role is constrained: help defend against missiles and drones by allowing US bombers to target Iranian “missile cities” and use UK assets for air defence. In practice, as analysts point out, this creates a path for deeper involvement if Iran retaliates further or if the conflict escalates.

The pattern is familiar from software:

- A tight dependency constrains your options when the other party changes course.
- The more your systems, bases, or policies are built around a particular partner, the harder it is to say “no” without suffering serious consequences.
- Even when you try to frame involvement as “limited” or “defensive”, the underlying coupling means you’re already part of the system’s behaviour.

The UK isn’t just allowing base access in a vacuum; it’s operating inside a complex, pre‑existing mesh of treaties, deployments, intelligence sharing, and shared infrastructure. That mesh is the geopolitical equivalent of a tangle of cross‑module imports and runtime assumptions.

Once that mesh is dense enough, “we’ll only ever use this in a narrow way” can become a comforting story you tell yourself, not a constraint the system will actually respect under pressure.

## Designing for replaceability, not comfort

Whether it’s an HMI framework, an AI provider, or a military alliance, the same questions keep coming up:

- Can we function if this dependency disappears or turns hostile to our interests?
- How much time would we realistically need to switch, and do we have that time?
- Have we built our own internal structures so that swapping is even possible?

For me, building performant HMIs is partly about efficiency and user experience—but it’s also about building systems that remain ours even when the environment shifts. That means:

- Keeping dependencies minimal.
- Drawing clean interfaces around the ones we do use.
- Practising the mental exercise of “what would replacing this actually look like?” before we commit.

Watching the US government manage a forced offboarding from Anthropic to OpenAI over six months, and seeing how the UK’s deep alignment with the US pulls it into a widening conflict, just reinforces the same lesson on two very different scales:

If you don’t design for replaceability up front, events will eventually test that decision for you—and you might not like the timeline.
