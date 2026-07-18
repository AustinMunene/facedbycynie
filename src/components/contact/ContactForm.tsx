import { useState } from 'react';
import { motion } from 'framer-motion';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:cynthiachiuri@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputBase =
    'mt-2 block w-full bg-white/70 rounded-xl border border-warmgray-200 px-4 py-3 text-[13px] text-warmgray-900 placeholder:text-warmgray-400 focus:outline-none focus:border-blush-400 focus:bg-white focus:ring-2 focus:ring-blush-100 transition-all duration-280';

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-[11px] font-sans font-normal tracking-[0.15em] uppercase text-warmgray-500"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputBase}
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-[11px] font-sans font-normal tracking-[0.15em] uppercase text-warmgray-500"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputBase}
            required
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-[11px] font-sans font-normal tracking-[0.15em] uppercase text-warmgray-500"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={inputBase}
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-[11px] font-sans font-normal tracking-[0.15em] uppercase text-warmgray-500"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`${inputBase} resize-none`}
            required
          />
        </div>

        <button type="submit" className="btn-pill w-full">
          Send Message
        </button>
      </form>
    </motion.div>
  );
}
