import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

function Skills() {
  const skillGroups = useMemo(() => {
    return skills.reduce((groups, skill) => {
      groups[skill.category] = groups[skill.category] || [];
      groups[skill.category].push(skill.label);
      return groups;
    }, {});
  }, []);

  return (
    <section id="skills" className="relative flex min-h-screen items-center justify-center">
      <div className="w-full max-w-6xl rounded-[32px] border border-white/10 bg-surface/80 p-8 shadow-soft backdrop-blur-xl sm:p-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.26em] text-accent">
            Skills
          </div>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Core Technical Skills</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            I use a mix of proven programming languages, automation frameworks, testing strategies, and CI tools to keep deliverables stable and reliable.
          </p>
        </motion.div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {Object.entries(skillGroups).map(([category, list]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-soft"
            >
              <h3 className="mb-4 text-xl font-semibold text-white">{category}</h3>
              <div className="space-y-3 text-slate-300">
                {list.map((skill) => (
                  <div key={skill} className="flex items-center gap-3 rounded-2xl bg-slate-900/70 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent"></span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
