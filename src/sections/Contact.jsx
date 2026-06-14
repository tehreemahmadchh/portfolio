import { motion } from "framer-motion"

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-3xl mx-auto text-center">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span
          style={{ color: "#10b981" }}
          className="text-sm font-medium tracking-widest uppercase"
        >
          Let's Talk
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
          Get In Touch
        </h2>
        <p className="text-white/40 text-lg mb-12 leading-relaxed">
          I'm open to internship opportunities, collaborations, and projects.
          Whether you have something in mind or just want to say hi — my inbox is open.
        </p>

        {/* Contact Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <a  
            href="mailto:tehreemahmadch@gmail.com"
            style={{ backgroundColor: "#10b981" }}
            className="hover:opacity-90 text-white px-8 py-4 rounded-full text-sm font-medium transition-opacity duration-200"
          >
            tehreemahmadch@gmail.com
          </a>
        <a  
            href="https://www.linkedin.com/in/tehreem-ahmadch/"
            target="_blank"
            rel="noreferrer"
            style={{ borderColor: "rgba(255,255,255,0.15)" }}
            className="border hover:border-white/40 text-white/70 hover:text-white px-8 py-4 rounded-full text-sm font-medium transition-colors duration-200"
          >
            LinkedIn →
          </a>
        </div>

        {/* Footer */}
        <div
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
          className="border-t pt-8"
        >
          <p className="text-white/20 text-sm">
            Designed & built by Tehreem Ahmad · {new Date().getFullYear()}
          </p>
          <p className="text-white/10 text-xs mt-2">
            React · Tailwind CSS · Framer Motion · Deployed on Vercel
          </p>
        </div>
      </motion.div>

    </section>
  )
}

export default Contact