import { FaAlignJustify, FaXmark } from "react-icons/fa6";
import { useState } from "react";
function Navbar(){
    const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
      { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },

];
const [open, setOpen] = useState(false);
    return(
<>
 

<nav className="fixed top-0  left-0 w-full  z-50 bg-slate-900/90 backdrop-blur border-b border-slate-800">
  <div className="max-w-7xl mx-auto h-16 px-5 md:px-10 flex items-center justify-between">

    {/* Logo */}
    <a href="#hero" className="font-mono text-2xl font-bold">
      <span className="text-emerald-400">&lt;</span>
      <span className="text-white">SG</span>
      <span className="text-emerald-400">/&gt;</span>
    </a>

    {/* Desktop Links */}
    <div className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
        >
          {link.name}
        </a>
      ))}
    </div>

    {/* Mobile Button */}
    <button
      onClick={() => setOpen(!open)}
      className="md:hidden text-2xl text-white"
    >
      {open ? <FaXmark /> : <FaAlignJustify />}
    </button>
  </div>

  {/* Mobile Menu */}
  {open && (
    <div className="md:hidden px-5 pb-4  grid grid-cols-3 gap-4  bg-slate-900 border-t border-slate-800">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={() => setOpen(false)}
          className=" text-center text-gray-300 hover:text-emerald-400 transition-colors"
        >
          {link.name}
        </a>
      ))}
    </div>
  )}
</nav>
</>
    )
}
export default Navbar;