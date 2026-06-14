import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
}

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 overflow-hidden">

      {/* Background glow blobs — makes it feel alive */}
      <div
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none"
      />
      <div
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)" }}
        className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] pointer-events-none"
      />

      {/* Tag */}
      <motion.span
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.1}
        style={{ color: "#10b981" }}
        className="text-sm font-medium tracking-widest uppercase mb-4"
      >
        CS Student · AI Tools · Full Stack
      </motion.span>

      {/* Name */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.3}
        className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
      >
        Hi, I'm{" "}
        <span
          style={{
            backgroundImage: "linear-gradient(to right, #10b981, #65f50b1c)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Tehreem
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.5}
        className="text-white/50 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
      >
        I build web apps and AI-powered tools that automate the boring stuff
        and make things actually work.
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.7}
        className="flex gap-4 flex-wrap justify-center"
      >
        <a
          href="#projects"
          style={{ backgroundColor: "#10b981" }}
          className="hover:opacity-90 text-white px-6 py-3 rounded-full text-sm font-medium transition-opacity duration-200"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="border border-white/20 hover:border-white/50 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200"
        >
          Get In Touch
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/20 text-xs tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ backgroundColor: "#10b981" }}
          className="w-0.5 h-6 rounded-full"
        />
      </motion.div>

    </section>
  )
}

export default Hero