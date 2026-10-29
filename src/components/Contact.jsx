import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

import "react-phone-number-input/style.css";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef(null);

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "sending") return;

    const form = formRef.current;
    if (!form) return;

    if (!phone || !isValidPhoneNumber(phone)) {
      setError("Please enter a valid phone number with a country code.");
      setStatus("error");
      return;
    }

    setError("");
    setStatus("sending");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, {
        publicKey: PUBLIC_KEY,
      });

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Failed to send your message. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Get In Touch</h2>
          <p className="text-muted">
            Have a question or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="row g-5 align-items-start">
          {/* Contact information */}
          <div className="col-lg-4">
            <h3 className="fw-semibold mb-4">Let's Connect</h3>

            <p className="text-muted">
              I'm always interested in learning about new projects,
              opportunities, and collaborations.
            </p>

            <div className="contact-info">
              <div className="contact-item">
                <i className="bi bi-geo-alt-fill"></i>
                <div>
                  <h6>Location</h6>
                  <p>Madison, Wisconsin</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="bi bi-github"></i>
                <div>
                  <h6>GitHub</h6>
                  <a
                    href="https://github.com/hyunk1234"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/hyunk1234
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <i className="bi bi-linkedin"></i>
                <div>
                  <h6>LinkedIn</h6>
                  <a
                    href="https://www.linkedin.com/in/hyun-kim-56684b341/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/hyun-kim-56684b341/
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="col-lg-8">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="phone" className="form-label">
                    Phone Number <span className="text-danger">*</span>
                  </label>

                  <PhoneInput
                    id="phone"
                    international
                    defaultCountry="US"
                    countryCallingCodeEditable={false}
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(value) => setPhone(value || "")}
                    className="form-control phone-input"
                    aria-required="true"
                  />

                  <input type="hidden" name="phone" value={phone} />

                  <small className="text-muted">
                    Select your country code and enter your phone number.
                  </small>
                </div>

                <div className="col-12">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="6"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>

                <div className="col-12">
                  {status === "success" && (
                    <div className="alert alert-success" role="status">
                      Your message has been sent successfully!
                    </div>
                  )}

                  {status === "error" && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn contact-submit-btn"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-send me-2"></i>
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
