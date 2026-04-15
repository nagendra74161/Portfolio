import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <section id="contact" className="relative flex min-h-screen items-center justify-center">
      <div className="w-full max-w-6xl rounded-[32px] border border-white/10 bg-surface/80 p-8 shadow-soft backdrop-blur-xl sm:p-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}>
          <div className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.26em] text-accent">
            Contact
          </div>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Let's talk quality</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            Reach out to discuss automation strategy, QA improvements, or how to embed faster test feedback into your delivery pipeline.
          </p>
        </motion.div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          <ContactForm />
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-8 text-slate-300 shadow-soft">
            <h3 className="text-xl font-semibold text-white">Get in touch</h3>
            <p className="mt-4 leading-7">
              Email: <span className="font-medium text-white">tester@example.com</span>
              <br />
              Phone: <span className="font-medium text-white">+91 98765 43210</span>
            </p>
            <div className="mt-8 space-y-4 text-sm text-slate-400">
              <p>Available for freelance and full-time roles.</p>
              <p>Open to remote and hybrid projects.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
