import { motion } from 'framer-motion';

function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -10, scale: 1.01 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-soft"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm uppercase tracking-[0.24em] text-accent">Project</span>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-slate-100 transition hover:text-accent"
        >
          GitHub Link
        </a>
      </div>
      <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
      <p className="mt-4 text-slate-300">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <span key={tool} className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
            {tool}
          </span>
        ))}
      </div>
      <div className="mt-8 opacity-0 transition duration-300 group-hover:opacity-100">
        <p className="text-sm text-slate-400">Hover to preview interactive details and source references.</p>
      </div>
    </motion.article>
  );
}

export default ProjectCard;

