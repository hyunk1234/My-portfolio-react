export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#home">
          Hyun
        </a>

        <div className="navbar-nav ms-auto">
          <a className="nav-link" href="#home">Home</a>
          <a className="nav-link" href="#expertise">Expertise</a>
          <a className="nav-link" href="#skills">Skills</a>
          <a className="nav-link" href="#research">Research</a>
          <a className="nav-link" href="#portfolio">Projects</a>
          <a className="nav-link" href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}