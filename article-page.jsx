// Articles — list page + article detail page (markdown, marked.js -> HTML)

function stripLeadingHeading(md) {
  if (!md) return "";
  return md.replace(/^\s*#\s+.+\n+/, "");
}

function getArticleContent(slug, lang) {
  const map = lang === "en"
    ? (window.ARTICLES_EN_CONTENT || {})
    : (window.ARTICLES_UA_CONTENT || {});
  return map[slug] || "";
}

function formatArticleDate(iso, lang) {
  try {
    const d = new Date(iso + "T00:00:00Z");
    return d.toLocaleDateString(lang === "ua" ? "uk-UA" : "en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
  } catch (e) {
    return iso;
  }
}

function ArticleCard({ article, lang }) {
  const t = window.I18N[lang].articlesPage;
  const cover = lang === "ua" && article.coverUa ? article.coverUa : article.cover;
  return (
    <button className="sample-card" onClick={() => navigate("article/" + article.slug)} aria-label={article.title[lang]}>
      {cover &&
      <div className="article-card-cover">
          <img src={cover} alt="" loading="lazy" />
        </div>}
      <div className="tag-list">
        {article.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
      </div>
      <h3>{article.title[lang]}</h3>
      <p>{article.summary[lang]}</p>
      <div className="article-meta">
        <span>{formatArticleDate(article.date, lang)}</span>
        <span>·</span>
        <span>{article.readMinutes} {t.readTime}</span>
      </div>
    </button>);

}

function ArticlesPage({ lang }) {
  const t = window.I18N[lang].articlesPage;
  const articles = (window.ARTICLES || []).slice().sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main>
      <div className="container page-header">
        <a href="#/work" className="button button-ghost button-sm" style={{ paddingLeft: 0, marginBottom: 8 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          {lang === "en" ? "All samples" : "Усі приклади"}
        </a>
        <span className="eyebrow">/work/articles</span>
        <h1>{t.title}</h1>
        <p className="lede">{t.subtitle}</p>
      </div>
      <section className="container" style={{ paddingBottom: 80 }}>
        <div className="samples-grid">
          {articles.map((a) => <ArticleCard key={a.slug} article={a} lang={lang} />)}
        </div>
        {articles.length === 0 && <p style={{ color: "var(--color-text-muted)" }}>—</p>}
      </section>
    </main>);

}

function ArticlePage({ lang, id }) {
  const article = (window.ARTICLES || []).find((a) => a.slug === id);
  const t = window.I18N[lang].articlesPage;

  const raw = article ? getArticleContent(article.slug, lang) : "";
  const cleanMd = React.useMemo(() => stripLeadingHeading(stripFrontMatter(raw)), [raw]);
  const html = useMarkdownHtml(cleanMd);

  if (!article) {
    return (
      <main>
        <div className="container page-header">
          <h1>{lang === "en" ? "Article not found" : "Статтю не знайдено"}</h1>
          <p><a href="#/articles">← {t.back}</a></p>
        </div>
      </main>);

  }

  return (
    <main>
      <div className="container page-header">
        <a href="#/articles" className="button button-ghost button-sm" style={{ paddingLeft: 0, marginBottom: 8 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          {t.back}
        </a>
        <div className="tag-list" style={{ marginTop: 8 }}>
          {article.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
        </div>
        <h1>{article.title[lang]}</h1>
        <p className="lede">{article.summary[lang]}</p>
        <div className="article-meta" style={{ marginTop: 4 }}>
          <span>{t.published} {formatArticleDate(article.date, lang)}</span>
          <span>·</span>
          <span>{article.readMinutes} {t.readTime}</span>
        </div>
      </div>

      <section className="container" style={{ paddingBottom: 80 }}>
        <article className="prose api-doc-prose" style={{ maxWidth: 760 }}>
          {cleanMd && <div dangerouslySetInnerHTML={{ __html: html }} />}
        </article>
      </section>
    </main>);

}

Object.assign(window, { ArticlesPage, ArticlePage });
