export default function Skills() {
  const skills = [
  {
    name: "HTML & CSS",
    icon: "bi-filetype-html",
    description: "Responsive layouts and modern UI design",
  },
  {
    name: "Java",
    icon: "bi-cup-hot",
    description: "Object-oriented programming and algorithms",
  },
  {
    name: "Python",
    icon: "bi-code-slash",
    description: "Data analysis, automation, and machine learning",
  },
  {
    name: "JavaScript",
    icon: "bi-filetype-js",
    description: "Interactive web applications",
  },
  {
    name: "React",
    icon: "bi-braces",
    description: "Component-based frontend development",
  },
  {
    name: "Git & GitHub",
    icon: "bi-github",
    description: "Version control and collaboration",
  },
    ];
  
return (
  <section id="skills" className="skills py-5">
    <div className="container">
        <div className="text-center mb-5">
            <h2>My Skills/Tools</h2>
        </div>
        <div className="row g-4" data-aos="slide-right">
          {skills.map((skill) => (
            <div
              className="col-lg-4 col-md-6"
              key={skill.name}
            >
              <div className="skill-card h-100">
                <div className="skill-icon">
                  <i className={`bi ${skill.icon}`}></i>
                </div>

                <h4 className="fw-semibold">{skill.name}</h4>

                <p className="text-muted small mb-0">
                  {skill.description}
                </p>
              </div>
            </div>
            ))}
        </div>
    </div>
  </section>
    );
}