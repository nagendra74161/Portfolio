import { motion } from 'framer-motion';
import { experiences } from '../data';

function Experience() {
  return (
    <section id="experience" className="relative flex min-h-screen items-center justify-center">
      <div className="w-full max-w-6xl space-y-8 rounded-[32px] border border-white/10 bg-surface/80 p-8 shadow-soft backdrop-blur-xl sm:p-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <div className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.26em] text-accent">
            <span>Experience</span>
          </div>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Professional Journey</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            Delivered automation frameworks that improved coverage, reduced release risk, and increased confidence for product teams. Each engagement uses strong QA practices and measurable impact.
          </p>
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-2">
          {experiences.map((item) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-soft"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-white">{item.company}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.role}</p>
                </div>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase text-accent">
                  {item.duration}
                </span>
              </div>
              <ul className="space-y-3 text-slate-300">
                {item.contributions.map((text) => (
                  <li key={text} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent"></span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
