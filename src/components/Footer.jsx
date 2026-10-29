export default function Footer() {
  return <footer>
    <h3 className="text-white pt-4" data-aos="fade-up">Portfolio</h3>
        <div className="link-group mt-5" data-aos="fade-up">
          <a href="#home">Home</a>
          <div className="vr"></div>
          <a href="#expertise">Expertise</a>
          <div className="vr"></div>
          <a href="#skills">Skills</a>
          <div className="vr"></div>
          <a href="#portfolio">Portfolio</a>
          <div className="vr"></div>
          <a href="#contact">Contact</a>
        </div>
        <div className="social-links mt-5" data-aos="fade-up">
          <a href="https://www.linkedin.com/in/%ED%98%84-%EA%B9%80-56684b341/">
            <button className="rounded-pill linkedin">
              <i className="bi bi-linkedin"></i>
            </button>
          </a>
          <a href="https://www.instagram.com/k1mhyu._n/">
            <button className="rounded-pill instagram">
              <i className="bi bi-instagram"></i>
            </button>
          </a>
          <a href="https://github.com/hyunk1234">
            <button className="rounded-pill github">
              <i className="bi bi-github"></i>
            </button>
          </a>
        </div>
        <hr className="text-muted my-4" />
  
        <p>Copyright 2026 Portfolio-Hyun | All Rights Reserved.</p>
  </footer>;
}