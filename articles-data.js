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
];

Object.assign(window, { ARTICLES });
