import { useState, useEffect } from "react";

const phrases = [
  "Computer Science Student",
  "Web Developer",
  "Software Engineer",
  "AI/ML Enthusiast",
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex];

    let delay = deleting ? 50 : 100;

    if (!deleting && text === phrase) {
      delay = 1500;
    } else if (deleting && text === "") {
      delay = 400;
    }

    const timer = setTimeout(() => {
      if (!deleting && text === phrase) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setPhraseIndex((index) => (index + 1) % phrases.length);
      } else if (deleting) {
        setText(phrase.slice(0, text.length - 1));
      } else {
        setText(phrase.slice(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, phraseIndex]);

  return (
    <section id="home" className="home pt-5 pb-5">
      <div className="container row justify-content-evenly align-middle">
        <div
          className="col-10 col-md-6 text-center text-md-start"
          data-aos="slide-right"
        >
          <h1>
            Hello! I Am <span style={{ color: "#6f34fe" }}>Hyun</span>
          </h1>

          <h3>
            I'm a <span>{text}</span>
            <span className="typing-cursor">|</span>
          </h3>

          <p>
            I build web applications and explore software development, AI, and
            machine learning.
          </p>
        </div>

        <div className="col-10 col-md-4 d-none d-md-block">
          <img
            src={`${import.meta.env.BASE_URL}images/original_ff396240-a24a-48a5-86d3-d874b355626c_PXL_20220209_161718930-removebg-preview.png`}
            alt="Profile"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}
