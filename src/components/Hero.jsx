 function Hero() {
  return (
    <section id="hero" className="flex py-15 items-center bg-transparent px-3 sm:px-0">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-2 py-10 sm:px-6 md:grid-cols-2 md:gap-10 lg:px-12 lg:gap-12">
        {/* Left */}
        <section className="flex flex-col items-start">
          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs sm:text-sm font-medium text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.12)]">
            Available for Opportunities
          </span>

          <h2 className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-400">Hi, I'm</h2>

          <h1 className="mt-1 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Shrishti <span className="text-emerald-400">Gupta</span>
          </h1>

          <div className="mt-4 sm:mt-5 flex items-center gap-3">
            <div className="h-0.5 w-10 sm:w-12 bg-emerald-400"></div>
            <h3 className="text-lg sm:text-2xl font-semibold text-white">Frontend Developer</h3>
          </div>

          <p className="mt-4 sm:mt-5 max-w-sm md:max-w-lg text-sm sm:text-lg leading-7 sm:leading-8 text-slate-400">
            Building responsive and user-friendly web applications using React,
            Tailwind CSS and modern JavaScript while exploring backend
            development with Node.js.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-row gap-3   w-full sm:w-auto">
            <a
              href="#projects"
              className="rounded-xl bg-emerald-500 px-5 sm:px-6 py-3 text-center font-semibold text-white shadow-[0_0_20px_rgba(16,185,129,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-600"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700 bg-slate-900/60 px-5 sm:px-6 py-3 text-center font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-emerald-500 hover:bg-slate-800"
            >
              Resume
            </a>
          </div>
        </section>

        {/* Right */}
        <section className="group relative flex justify-center">

  <div className="absolute  sm:h-64 sm:w-64  lg:h-80 lg:w-80 rounded-full bg-emerald-500/10 blur-3xl transition-all duration-500 group-hover:scale-110 group-hover:bg-emerald-500/20"></div>
          <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/85 shadow-[0_0_45px_rgba(16,185,129,0.15)] transition duration-300 hover:scale-105 hover:border-emerald-500/60">
            <div className="flex items-center gap-2 border-b border-slate-700/80 bg-slate-800/80 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
              <span className="ml-3 text-sm text-slate-400">developer.js</span>
            </div>

            <div className="bg-slate-950/70 p-4 sm:p-5 font-mono text-[13px] sm:text-[14px] lg:text-[15px] leading-6 sm:leading-7 text-slate-300">
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