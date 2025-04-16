import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const formRef = useRef();

  // Improved validation: checks for valid email format
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Honeypot check: if filled, treat as spam and exit
    if (formData.website) {
      setIsSubmitting(false);
      return;
    }

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      formRef.current.reset();
    } catch (error) {
      setSuccessMessage("");
      alert("Message not sent! Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Accessibility: clear success message on input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSuccessMessage("");
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center relative bg-black text-gray-100 overflow-hidden py-20"
      aria-label="Contact section"
    >
      {/* Animated background accent for consistency */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(59,130,246,0.12), transparent 80%)",
        }}
      />
      <RevealOnScroll>
        <div className="w-full max-w-full sm:max-w-md md:max-w-lg mx-auto bg-white/10 rounded-2xl shadow-xl p-2 sm:p-6 md:p-8 border border-blue-400/10 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight animate-fade-in">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg mb-8 font-light animate-fade-in delay-200">
            Interested in working together or have a question? Fill out the form below and I'll get back to you soon.
          </p>
          <form
            ref={formRef}
            className="space-y-6 animate-fade-in delay-300"
            onSubmit={handleSubmit}
            aria-label="Contact form"
            autoComplete="off"
          >
            {/* Honeypot field for spam bots */}
            <div style={{ display: "none" }}>
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website || ""}
                onChange={handleInputChange}
              />
            </div>
            {/* Name Field */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className={`w-full bg-white/5 border ${
                  errors.name ? "border-red-500" : "border-white/10"
                } rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-400`}
                placeholder="Your Name"
                aria-label="Your Name"
                onChange={handleInputChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1 error-message" aria-live="polite">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className={`w-full bg-white/5 border ${
                  errors.email ? "border-red-500" : "border-white/10"
                } rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-400`}
                placeholder="Your Email"
                aria-label="Your Email"
                onChange={handleInputChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 error-message" aria-live="polite">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                className={`w-full bg-white/5 border ${
                  errors.message ? "border-red-500" : "border-white/10"
                } rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-400 resize-none`}
                placeholder="Your Message"
                aria-label="Your Message"
                onChange={handleInputChange}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1 error-message" aria-live="polite">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold text-lg shadow-md transition relative overflow-hidden ${
                isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              }`}
              aria-label="Send Message"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
            {successMessage && (
              <p className="text-green-500 text-sm mt-4 text-center" aria-live="polite">
                {successMessage}
              </p>
            )}
          </form>
          {/* Social/contact links */}
          <div className="mt-8 flex flex-col items-center gap-2 animate-fade-in delay-400">
            <span className="text-xs text-gray-400">Or reach me at:</span>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center w-full">
              <a
                href="mailto:temporary@placeholder.com"
                className="text-blue-400 hover:text-cyan-300 transition-colors font-medium flex items-center gap-1"
                aria-label="Email Mihai"
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="inline-block"><path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.25-.5 7.25 6.25L18.75 6M4 18l5.5-5m10.5 5-5.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                temporary@placeholder.com
              </a>
              <a
                href="https://linkedin.com/in/mihai-alexandru-florea"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-cyan-300 transition-colors font-medium flex items-center gap-1"
                aria-label="LinkedIn Mihai Alexandru Florea"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="inline-block">
                  <rect x="2" y="2" width="20" height="20" rx="4" />
                  <path d="M6.94 8.5h2.12v7H6.94v-7zm1.06-2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm3.5 2.25h2.03v.96h.03c.28-.53.97-1.09 2-1.09 2.14 0 2.54 1.41 2.54 3.24v3.89h-2.12v-3.45c0-.82-.01-1.88-1.15-1.88-1.15 0-1.33.9-1.33 1.82v3.51h-2.12v-7z" fill="#fff"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/florea-mihai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-cyan-300 transition-colors font-medium flex items-center gap-1"
                aria-label="GitHub Mihai Alexandru Florea"
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="inline-block"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48C19.13 20.54 22 16.74 22 12.26 22 6.58 17.52 2 12 2Z" fill="currentColor"/></svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};