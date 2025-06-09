import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";
import { words } from "../constants";
import Button from "../components/Button";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error); // Optional: show toast
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        {/* <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        /> */}
        <div className="grid-12-cols">
          <div className="xl:col-span-5">
            {/* <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/3d-portfolio/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div> */}
            <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
              <div className="flex flex-col gap-7">
                <div className="hero-text mt-4 md:mt-0">
                  <h1>
                    Let's
                    <span className="slide">
                      <span className="wrapper">
                        {words.map((word, index) => (
                          <span
                            key={index}
                            className="flex items-center md:gap-3 gap-1 pb-2"
                          >
                            <img
                              src={word.imgPath}
                              alt="person"
                              className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                            />
                            <span>{word.text}</span>
                          </span>
                        ))}
                      </span>
                    </span>
                  </h1>
                  <h1>Projects That</h1>
                  <h1>Shape Our Future</h1>
                </div>

                <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                  Hi, I'm Joe, a full-stack developer looking for local DFW
                  developers to team up with 💪
                </p>

                <Button
                  text="See My Work"
                  className="md:w-80 md:h-16 w-60 h-12"
                  id="counter"
                />
              </div>
            </header>
          </div>

          {/* <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
            <div className="flex flex-col gap-7">
              <div className="hero-text">
                <h1>
                  Shaping
                  <span className="slide">
                    <span className="wrapper">
                      {words.map((word, index) => (
                        <span
                          key={index}
                          className="flex items-center md:gap-3 gap-1 pb-2"
                        >
                          <img
                            src={word.imgPath}
                            alt="person"
                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                          />
                          <span>{word.text}</span>
                        </span>
                      ))}
                    </span>
                  </span>
                </h1>
                <h1>into Real Projects</h1>
                <h1>that Deliver Results</h1>
              </div>

              <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                Hi, I'm Joe, a full-stack developer looking for local DFW developers to team up with 💪
              </p>

              <Button
                text="See My Work"
                className="md:w-80 md:h-16 w-60 h-12"
                id="counter"
              />
            </div>
          </header> */}
          <div className="xl:col-span-7 min-h-96 ">
            <div className="bg-teal-800 w-full h-full hover:cursor-grab rounded-3xl overflow-hidden ">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
