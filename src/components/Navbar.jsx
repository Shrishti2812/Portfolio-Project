import { FaAlignJustify, FaXmark } from "react-icons/fa6";
import { useState } from "react";

function Navbar() {
  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full">
      <div className="  flex  items-center justify-between   border border-emerald-400/20 bg-slate-900/80 px-4 py-3 shadow-[0_0_30px_rgba(16,185,129,0.12)] backdrop-blur-xl md:px-6">
         <a href="#hero" className="font-mono text-2xl font-bold">
      <span className="text-emerald-400">&lt;</span>
      <span className="text-white">SG</span>
      <span className="text-emerald-400">/&gt;</span>
    </a>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-[0.2em] text-slate-300 transition-all duration-300 hover:text-emerald-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20 md:inline-flex"
        >
          Let&apos;s Talk
        </a>

        <button
          aria-label="Toggle navigation menu"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 text-xl text-white transition hover:border-emerald-400/50 hover:text-emerald-400 md:hidden"
        >
          {open ? <FaXmark /> : <FaAlignJustify />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-2xl border border-slate-800 bg-slate-900/95 p-4 shadow-2xl backdrop-blur md:hidden">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-center text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-emerald-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;