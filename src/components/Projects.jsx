import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../data';

function Projects() {
  return (
    <section id="projects" className="relative flex min-h-screen items-center justify-center">
      <div className="w-full max-w-6xl rounded-[32px] border border-white/10 bg-surface/80 p-8 shadow-soft backdrop-blur-xl sm:p-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
          <div className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.26em] text-accent">
            Projects
          </div>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Automation Projects</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            Interactive automation projects showcasing framework design, test coverage, and CI delivery. Hover cards for summary details and quick access to source code.
          </p>
        </motion.div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
