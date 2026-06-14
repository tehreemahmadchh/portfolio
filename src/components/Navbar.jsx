import { useState } from "react"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      style={{ backgroundColor: "rgba(10,10,10,0.85)", borderColor: "rgba(255,255,255,0.06)" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b px-6 py-4"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <span className="font-bold text-xl tracking-tight text-white">
          tehreem<span style={{ color: "#10b981" }}>.</span>
        </span>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
            <a  
                href={link.href}
                className="text-white/50 text-sm transition-colors duration-200 hover:text-white"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pt-4 pb-6">
          {navLinks.map((link) => (
            <li key={link.name}>
            <a  
                href={link.href}
                className="text-white/50 hover:text-white text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar