import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Name is required.';
    if (!formData.email.trim()) nextErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Enter a valid email.';
    if (!formData.message.trim()) nextErrors.message = 'Message cannot be empty.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-soft">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-white">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
        />
        {errors.name && <p className="mt-2 text-sm text-rose-400">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-white">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="nagendra.mekapothula@gmail.com"
          className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
        />
        {errors.email && <p className="mt-2 text-sm text-rose-400">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your testing goals..."
          className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
        />
        {errors.message && <p className="mt-2 text-sm text-rose-400">{errors.message}</p>}
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-accentSoft"
      >
        {submitted ? 'Message Sent' : 'Send Message'}
      </button>
    </form>
  );
}

export default ContactForm;
