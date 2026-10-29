const expertiseItems = [
  {
    title: "Research",
    description: "Conducting research and analysis on AI/ML.",
    icon: "bi bi-search",
  },
  {
    title: "Web and backend Development",
    description: "Building interactive websites and applications.",
    icon: "bi bi-code-slash",
  },
  {
    title: "Debugging",
    description: "Finding and fixing problems in software.",
    icon: "bi bi-bug",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="expertise py-5">
      <div className="container">
        <div className="heading text-center">
          <small>What I Do</small>
          <h2>My Expertise</h2>
        </div>

        <div className="row mt-4">
          {expertiseItems.map((item) => (
            <div className="col-md-4 mb-3" key={item.title}>
              <div className="service-card p-6 h-100">
                <i className={item.icon} aria-hidden="true"></i>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
