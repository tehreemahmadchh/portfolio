import { motion } from "framer-motion"

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "C++", "SQL", "JavaScript", "x86 Assembly"],
  },
  {
    category: "AI & Machine Learning",
    skills: ["scikit-learn", "NumPy", "Pandas", "Matplotlib", "AWS SageMaker", "Jupyter"],
  },
  {
    category: "Web Development",
    skills: ["React", "Tailwind CSS", "Framer Motion", "Node.js", "HTML/CSS"],
  },
  {
    category: "AI Tools & Automation",
    skills: ["Claude AI", "Prompt Engineering", "Apify", "n8n", "REST APIs"],
  },
  {
    category: "CS Fundamentals",
    skills: ["Data Structures", "Algorithms", "OOP", "Database Design", "ERD & Normalization", "Computer Architecture"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "AWS", "Vercel"],
  },
]

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto bg-black">

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <span style={{ color: "#10b981" }} className="text-sm font-medium tracking-widest uppercase">
          What I Work With
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
          Skills
        </h2>
        <p className="text-white/40 mt-4 max-w-xl mx-auto">
          A honest snapshot of where I am — strong foundations, actively expanding into web and AI tooling.
        </p>
      </motion.div>

      {/* Skill Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white/5 border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors duration-300"
          >
            {/* Category Title */}
            <h3 style={{ color: "#10b981" }} className="text-xs font-semibold tracking-widest uppercase mb-4">
              {group.category}
            </h3>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm text-white/70 bg-white/5 border-white/10 px-3 py-1.5 rounded-lg hover:text-white hover:border-white/30 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* AWS Certification Callout */}
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.3 }}
  style={{ borderColor: "rgba(16,185,129,0.2)", backgroundColor: "rgba(16,185,129,0.05)" }}
  className="mt-10 border rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 flex-wrap"
>
  <div>
    <span
      style={{ color: "#10b981" }}
      className="text-xs font-semibold tracking-widest uppercase"
    >
      Verified Certification
    </span>
    <h4 className="text-white font-semibold text-lg mt-1">
      AWS Academy Machine Learning Foundations
    </h4>
    <p className="text-white/40 text-sm mt-1">
      Amazon Web Services · 2024 · Credly Badge Verified
    </p>
  </div>
  <a
    href="https://www.credly.com/badges/11a9e56e-4765-4c83-80a9-f0cbad9f7724"
    target="_blank"
    rel="noreferrer"
    style={{ backgroundColor: "#10b981" }}
    className="shrink-0 hover:opacity-90 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-opacity duration-200 self-start sm:self-center"
  >
    Verify Badge →
  </a>
</motion.div>

    </section>
  )
}

export default Skills