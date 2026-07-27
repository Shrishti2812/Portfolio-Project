 function Hero() {
  return (
    <section id="hero" className="flex min-h-screen items-center bg-transparent">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-10 md:grid-cols-2 lg:px-12">
        {/* Left */}
        <section className="flex flex-col items-start">
          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.12)]">
            Available for Opportunities
          </span>

          <h2 className="mt-5 text-lg text-slate-400">Hi, I'm</h2>

          <h1 className="mt-1 text-5xl font-extrabold leading-tight text-white lg:text-6xl">
            Shrishti <span className="text-emerald-400">Gupta</span>
          </h1>

          <div className="mt-5 flex items-center gap-3">
            <div className="h-0.5 w-12 bg-emerald-400"></div>
            <h3 className="text-2xl font-semibold text-white">Frontend Developer</h3>
          </div>

          <p className="mt-5 max-w-lg text-lg leading-8 text-slate-400">
            Building responsive and user-friendly web applications using React,
            Tailwind CSS and modern JavaScript while exploring backend
            development with Node.js.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white shadow-[0_0_20px_rgba(16,185,129,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-600"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-emerald-500 hover:bg-slate-800"
            >
              Resume
            </a>
          </div>
        </section>

        {/* Right */}
        <section className="relative flex items-center justify-center">
          <div className="absolute h-[380px] w-[380px] rounded-full bg-emerald-500/25 blur-3xl"></div>

          <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/85 shadow-[0_0_45px_rgba(16,185,129,0.15)] transition duration-300  hover:scale-105 hover:border-emerald-500/60">
            <div className="flex items-center gap-2 border-b border-slate-700/80 bg-slate-800/80 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
              <span className="ml-3 text-sm text-slate-400">developer.js</span>
            </div>

            <div className="bg-slate-950/70 p-5 font-mono text-[15px] leading-7 text-slate-300">
              <p>
                <span className="text-emerald-400">const</span>{" "}
                <span className="text-sky-400">developer</span> = {"{"}
              </p>
              <p className="ml-5">name: <span className="text-amber-300">"Shrishti Gupta"</span>,</p>
              <p className="ml-5">role: <span className="text-amber-300">"Frontend Developer"</span>,</p>
              <p className="ml-5">frontend: <span className="text-amber-300">["React","Tailwind","JavaScript"]</span>,</p>
              <p className="ml-5">backend: <span className="text-amber-300">"Node.js"</span>,</p>
              <p className="ml-5">database: <span className="text-amber-300">"MongoDB"</span>,</p>
              <p className="ml-5">currentlyLearning: <span className="text-amber-300">"Express.js"</span>,</p>
              <p className="ml-5">openToWork: <span className="text-blue-400">true</span>,</p>
              <p>{"};"}</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Hero;