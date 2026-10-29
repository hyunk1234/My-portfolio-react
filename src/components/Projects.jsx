
import { useEffect, useState } from "react";

const GITHUB_USERNAME = "hyunk1234";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    
async function fetchProjects() {
  try {
    setLoading(true);
    setError("");

    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      {
        signal: controller.signal,
        headers: {
          Accept: "application/vnd.github+json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();


    const filteredProjects = data.filter(
      (repo) =>
        !repo.fork &&
        repo.name.toLowerCase() !== "my-portfolio" &&
        repo.name.toLowerCase() !== "junbeom"
    );

    // Fetch languages for each repository
    const projectsWithLanguages = await Promise.all(
      filteredProjects.map(async (repo) => {
        try {
          const languageResponse = await fetch(
            repo.languages_url,
            { signal: controller.signal }
          );

          if (!languageResponse.ok) {
            throw new Error("Failed to fetch languages");
          }

          const languageData = await languageResponse.json();

          return {
            ...repo,
            languages: Object.keys(languageData),
          };
        } catch (err) {
          if (err.name === "AbortError") throw err;

          console.error(
            `Failed to fetch languages for ${repo.name}:`,
            err
          );

          return {
            ...repo,
            languages: repo.language ? [repo.language] : [],
          };
        }
      })
    );

    setProjects(projectsWithLanguages);
  } catch (err) {
    if (err.name !== "AbortError") {
      console.error("Error fetching repositories:", err);
      setError("Unable to load projects from GitHub.");
    }
  } finally {
    if (!controller.signal.aborted) {
      setLoading(false);
    }
  }
}


    fetchProjects();

    return () => controller.abort();
  }, []);

  const getLiveUrl = (homepage) => {
  if (!homepage) return null;

  try {
    const value = homepage.trim();

    const fullUrl = /^https?:\/\//i.test(value)
      ? value
      : `https://${value}`;

    const url = new URL(fullUrl);

    return ["https:", "http:"].includes(url.protocol)
      ? url.href
      : null;
  } catch {
    return null;
  }
};

  return (
    <section id="portfolio" className="projects-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">My Projects</h2>
          <p className="text-muted">
            Explore projects I've built and shared on GitHub.
          </p>
        </div>

        {loading && (
          <div className="text-center py-5" role="status">
            <div className="spinner-border text-primary" />
            <p className="mt-3">Loading projects...</p>
          </div>
        )}

        {error && (
          <div className="alert alert-danger text-center">
            {error}
          </div>
        )}

        {!loading && !error && projects.length === 0 && (
          <p className="text-center text-muted">
            No public projects found.
          </p>
        )}

        <div className="row g-4">
          {projects.map((project) => {
            const liveUrl = getLiveUrl(project.homepage);

            return (
              <div
                className="col-lg-4 col-md-6"
                key={project.id}
              >
                <div className="project-card h-100">
                  <div className="project-icon">
                    <i className="bi bi-folder2-open"></i>
                  </div>

                  <h4 className="project-title">
                    {project.name}
                  </h4>

                  <p className="project-description">
                    {project.description ||
                      "No description provided."}
                  </p>

                  <div className="project-topics">
                    {project.languages?.map((language) => (
                    <span className="project-tag" key={language}>
                        {language}
                    </span>
                    ))}
                  </div>

                  <div className="project-meta">
                    <span>
                      <i className="bi bi-star me-1"></i>
                      {project.stargazers_count}
                    </span>

                    <span>
                      <i className="bi bi-diagram-2 me-1"></i>
                      {project.forks_count}
                    </span>
                  </div>

                  <div className="project-links">
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark"
                    >
                      <i className="bi bi-github me-2"></i>
                      GitHub
                    </a>

                    {liveUrl && (
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <i className="bi bi-box-arrow-up-right me-2"></i>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
