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
  const formRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.message) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      );
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      formRef.current.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Message not sent! Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form
            ref={formRef}
            className="space-y-6"
            onSubmit={handleSubmit}
            aria-label="Contact form"
          >
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
                } rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5`}
                placeholder="Your Name"
                aria-label="Your Name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
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
                } rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5`}
                placeholder="Your Email"
                aria-label="Your Email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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
                } rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5`}
                placeholder="Your Message"
                aria-label="Your Message"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
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
              className={`w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden ${
                isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              }`}
              aria-label="Send Message"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};