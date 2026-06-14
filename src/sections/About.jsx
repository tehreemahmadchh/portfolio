import { motion } from "framer-motion"

function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            style={{ color: "#10b981" }}
            className="text-sm font-medium tracking-widest uppercase"
          >
            Who I Am
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            About Me
          </h2>
          <div className="space-y-4 text-white/50 leading-relaxed">
            <p>
              I'm Tehreem — a 5th semester CS student at GCU Lahore with a CGPA of 3.32,
              building towards a career at the intersection of AI, automation, and full stack development.
            </p>
            <p>
              My background is unusual — I've gone from writing code in x86 Assembly and designing
              normalized databases, to training ML models and now building AI-powered tools that
              automate real workflows. I like understanding how things work at a deep level before
              I abstract them away.
            </p>
            <p>
              Right now I'm learning by building — every project on this site is something
              I made to solve a real problem or learn a real skill. That's the only way I know how to grow.
            </p>
          </div>

          {/* Stats Row */}
          <div className="flex gap-8 mt-10">
            {[
              { value: "3.32", label: "CGPA at GCU" },
              { value: "5th", label: "Semester" },
              { value: "AWS", label: "Certified" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  style={{ color: "#10b981" }}
                  className="text-2xl font-bold"
                >
                  {stat.value}
                </p>
                <p className="text-white/30 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side — Currently Learning Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {[
            {
              title: "Currently Building",
              items: ["Portfolio Site (this one)", "AI Lead Gen Tool", "MERN Full Stack App"],
              color: "#10b981",
            },
            {
              title: "Currently Learning",
              items: ["Claude MCP & AI Agents", "MERN Stack", "Framer Motion & UI Design"],
              color: "#f59e0b",
            },
            {
              title: "Interests",
              items: ["AI Automation", "Creative Design", "Building things that solve real problems"],
              color: "#10b981",
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.03)" }}
              className="border rounded-2xl p-5"
            >
              <h4
                style={{ color: card.color }}
                className="text-xs font-semibold tracking-widest uppercase mb-3"
              >
                {card.title}
              </h4>
              <ul className="space-y-2">
                {card.items.map((item) => (
                  <li key={item} className="text-white/60 text-sm flex items-center gap-2">
                    <span style={{ color: card.color }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default About