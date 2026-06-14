import { motion } from "framer-motion"

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "Designed and built this portfolio from scratch using React, Tailwind CSS, and Framer Motion. Deployed on Vercel.",
    tags: ["React", "Tailwind", "Framer Motion", "Vercel"],
    github: "https://github.com/tehreemahmadchh",
    live: "#",
    status: "live",
  },
  {
    title: "Hospital Management Database",
    description:
      "Fully normalized relational database for a hospital system. Designed ERD, implemented 1NF→3NF schema, wrote complex SQL queries for joins, aggregations, and constraints.",
    tags: ["SQL", "ERD Design", "Normalization", "Database Systems"],
    github: "https://github.com/tehreemahmadchh/hospital-management-db",
    live: null,
    status: "live",
  },
  {
    title: "Cat vs Dog Image Classifier",
    description:
      "Binary image classification model using supervised learning. Full ML pipeline: preprocessing → training → evaluation with accuracy metrics and confusion matrix.",
    tags: ["Python", "scikit-learn", "NumPy", "Machine Learning"],
    github: null,
    live: null,
    status: "live",
  },
  {
    title: "AI Lead Generation Tool",
    description:
      "Automating personalized outreach using Claude AI, Apify web scraping, and n8n pipelines. Extracts leads, enriches with contact data, and drafts outreach messages automatically.",
    tags: ["Python", "Claude API", "Apify", "n8n", "Automation"],
    github: null,
    live: null,
    status: "building",
  },
  {
    title: "Full Stack Web App",
    description:
      "MERN stack application with JWT authentication, role-based access control, and REST APIs. Built with MongoDB, Express, React, and Node.js.",
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    github: null,
    live: null,
    status: "building",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <span style={{ color: "#10b981" }} className="text-sm text-sm font-medium tracking-widest uppercase">
          What I've Built
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
          Projects
        </h2>
        <p className="text-white/40 mt-4 max-w-xl mx-auto">
          A mix of completed work and what I'm currently building — this list grows as I do.
        </p>
      </motion.div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
           className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 transition-colors duration-300 hover:border-emerald-500/40"
          >
            {/* Status Badge */}
            <div className="flex items-center justify-between">
            <span
  style={
    project.status === "live"
      ? { color: "#10b981", backgroundColor: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }
      : { color: "#f59e0b", backgroundColor: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)" }
  }
  className="text-xs font-medium px-3 py-1 rounded-full"
>
  {project.status === "live" ? "✦ Completed" : "⟳ Building"}
</span>
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {project.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-white/50 bg-white/5 border border-white/10 px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-2 border-t border-white/10">
              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
  target="_blank"
  rel="noreferrer"
  style={{ color: "#10b981" }}
  className="hover:opacity-70 text-sm transition-opacity duration-200"
>
  GitHub →
</a>
              )}
              {project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-400 hover:text-purple-300 text-sm transition-colors duration-200"
                >
                  Live →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects