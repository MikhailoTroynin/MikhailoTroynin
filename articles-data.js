// Articles metadata (list page + routing)
// Each entry: { slug, title:{en,ua}, summary:{en,ua}, date, readMinutes, tags, cover }

const ARTICLES = [
  {
    slug: "three-checks-instead-of-one",
    title: {
      en: "Three checks instead of one: how I catch AI hallucinations in technical documentation",
      ua: "Три перевірки замість однієї: як я ловлю галюцинації AI в технічній документації",
    },
    summary: {
      en: "A wrong rate limit almost shipped in an AI-drafted document. Here is the three-check verification pipeline — VERIFY_CLAIMS, VERIFY_COMPLETENESS, VERIFY_STALE — built to catch it next time.",
      ua: "AI мало не випустив у документі неправильний rate limit. Ось трискладовий пайплайн перевірки — VERIFY_CLAIMS, VERIFY_COMPLETENESS, VERIFY_STALE — щоб таке більше не проходило непоміченим.",
    },
    date: "2026-08-05",
    readMinutes: 8,
    tags: ["AI Workflow", "Verification", "LLM"],
    cover: "articles/three-checks-instead-of-one/img/02-pipeline.svg",
    coverUa: "articles/three-checks-instead-of-one/img/02-pipeline-ua.svg",
  },
  {
    slug: "plan-first-prompt-second",
    title: {
      en: "Plan First, Prompt Second: What DevPlan Taught Me About Working With Claude Code",
      ua: "Спочатку план, потім промпт: чого DevPlan навчив мене в роботі з Claude Code",
    },
    summary: {
      en: "A prompt-first habit renamed a slug three pages depended on. Here's why Plan Mode and a persistent, DevPlan-style task backlog turned out to be cheaper than fixing diffs after the fact.",
      ua: "Звичка спочатку писати промпт якось перейменувала slug, від якого залежали три сторінки. Ось чому Plan Mode і постійний бэклог задач у стилі DevPlan виявились дешевшими, ніж виправляти diff постфактум.",
    },
    date: "2026-07-20",
    readMinutes: 7,
    tags: ["Claude Code", "Planning", "AI Workflow"],
    cover: "articles/plan-first-prompt-second/img/01-plan-vs-prompt.svg",
    coverUa: "articles/plan-first-prompt-second/img/01-plan-vs-prompt-ua.svg",
  },
  {
    slug: "inside-the-oracle",
    title: {
      en: "Inside the Oracle: A Tour of What Amp Can Do Right Now",
      ua: "Всередині Oracle: на що здатен Amp прямо зараз",
    },
    summary: {
      en: "Subagents that can't talk to each other, a second-opinion Oracle routed to a different model, and threads that outlive the session. A working tour of Amp's current feature set, warts included.",
      ua: "Субагенти, які не спілкуються між собою, Oracle-режим із другою думкою від іншої моделі, і треди, що переживають сесію. Робочий огляд поточних фіч Amp разом з їхніми недоліками.",
    },
    date: "2026-07-28",
    readMinutes: 8,
    tags: ["Ampcode", "Coding Agents", "AI Workflow"],
    cover: "articles/inside-the-oracle/img/01-oracle-routing.svg",
    coverUa: "articles/inside-the-oracle/img/01-oracle-routing-ua.svg",
  },
  {
    slug: "the-model-that-calls-itself",
    title: {
      en: "The Model That Calls Itself: Recursive Language Models, Explained",
      ua: "Модель, яка викликає сама себе: що таке рекурсивні мовні моделі",
    },
    summary: {
      en: "A document too big for any context window sent me looking for a third option beyond chunking and retrieval. Recursive Language Models treat the input as a workspace the model can slice, search, and call itself over.",
      ua: "Документ, що не поміщався в жодне контекстне вікно, змусив шукати третій варіант окрім чанкінгу й retrieval. Рекурсивні мовні моделі трактують вхід як робочий простір, який модель може різати, шукати й рекурсивно викликати саму себе над ним.",
    },
    date: "2026-08-01",
    readMinutes: 7,
    tags: ["LLM", "Research", "Context"],
    cover: "articles/the-model-that-calls-itself/img/01-recursive-loop.svg",
    coverUa: "articles/the-model-that-calls-itself/img/01-recursive-loop-ua.svg",
  },
  {
    slug: "a-week-with-graphy",
    title: {
      en: "The Chart I Didn't Have to Draw: A Week With Graphy",
      ua: "Графік, який я не малював: тиждень із Graphy",
    },
    summary: {
      en: "One week routing every one-off chart request through an AI charting tool instead of a library. It shines on clean business metrics and quietly smooths over gaps on messy, irregular data.",
      ua: "Тиждень, коли кожен одноразовий запит на графік ішов через AI-інструмент замість бібліотеки. Він блищить на чистих бізнес-метриках і тихо згладжує розриви на захаращених, нерегулярних даних.",
    },
    date: "2026-08-04",
    readMinutes: 6,
    tags: ["Data Viz", "AI Tools", "Documentation"],
    cover: "articles/a-week-with-graphy/img/01-graphy-flow.svg",
    coverUa: "articles/a-week-with-graphy/img/01-graphy-flow-ua.svg",
  },
];

Object.assign(window, { ARTICLES });
