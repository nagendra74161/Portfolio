import { motion } from 'framer-motion';
import TypingText from './TypingText';
import { typingPhrases } from '../data';

function About({ onViewProjects, onDownload }) {
  return (
    <section id="about" className="relative flex min-h-screen items-center justify-center">
      <div className="relative z-10 w-full max-w-4xl rounded-[32px] border border-white/10 bg-surface/80 p-8 shadow-soft backdrop-blur-xl sm:p-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-slate-800/70 px-4 py-2 text-sm text-slate-200 ring-1 ring-slate-500/20">
            <span className="h-2 w-2 rounded-full bg-accent"></span>
            Automation Tester Portfolio
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Hi, I’m a dedicated Automation Tester
          </h1>
          <div className="mt-5 text-lg text-slate-300 sm:text-xl">
            <TypingText phrases={typingPhrases} />
          </div>
          <p className="mt-6 max-w-2xl leading-8 text-slate-300">
            I specialize in designing end-to-end automation frameworks, validating complex workflows, and improving software quality for enterprise teams. My focus is on sustainable test automation, strong tooling, and fast feedback loops.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={onViewProjects}
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-accentSoft"
            >
              View Projects
            </button>
            <button
              type="button"
              onClick={onDownload}
              className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-transparent px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-accent hover:text-accent"
            >
              Download CV
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
