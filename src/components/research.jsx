const publications = [
  {
    id: "attention-functor",
    title:
      "Attention Is a Functor: Enforcing Categorical Structure in Transformers",
    authors: "Hyun Kim, Satyam Mishra, Tran Duc Tan, Vishwanath Bijalwan",
    venue: "ICTA 2025 · Springer",
    year: 2026,
    description:
      "Developed a transformer attention mechanism based on category theory, enforcing identity and composition laws through a novel functor loss. Evaluated compositional generalization and interpretability using the SCAN and GeoQuery benchmarks.",
    topics: ["Deep Learning", "Transformers", "Category Theory", "NLP"],
    paperUrl: "https://doi.org/10.1007/978-3-032-18162-6_3",
    codeUrl: "https://github.com/satyamcser/attention-as-functor-transformer",
  },
];

export default function Research() {
  return (
    <section id="research" className="research-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Research & Publications</h2>
          <p className="text-muted">
            Exploring the intersection of mathematics and artificial
            intelligence.
          </p>
        </div>

        <div className="row justify-content-center g-4">
          {publications.map((paper) => (
            <div className="col-lg-10" key={paper.id}>
              <article className="research-card">
                <div className="research-heading">
                  <i className="bi bi-journal-text"></i>
                  <span className="research-badge">Published Research</span>
                </div>

                <h3 className="research-title">{paper.title}</h3>

                <p className="research-authors">{paper.authors}</p>

                <p className="research-venue">
                  {paper.venue} · {paper.year}
                </p>

                <p className="research-description">{paper.description}</p>

                <div className="research-topics">
                  {paper.topics.map((topic) => (
                    <span className="project-tag" key={topic}>
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="research-links">
                  <a
                    href={paper.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <i className="bi bi-book me-2"></i>
                    View Publication
                  </a>

                  <a
                    href={paper.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark"
                  >
                    <i className="bi bi-github me-2"></i>
                    Source Code
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
