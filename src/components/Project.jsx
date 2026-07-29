
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

function Project() {
  const projects = [
  {
    title: "ShopSphere",
    image: "/images/shopsphere.png",
    description:
      "A modern e-commerce application featuring product search, category filtering, wishlist management, and cart functionality designed with a responsive user experience in mind.",
    tech: ["React", "Tailwind CSS", "React Router",  ],
    live: "https://e-commerce-project-chi-brown.vercel.app/",
    github: "https://github.com/Shrishti2812/E-commerce-Project.git",
  },
  {
    title: "Smart Routine Tracker",
    image: "/images/routineplanner.png",
    description:
      "A productivity dashboard that helps users organize daily tasks, set priorities, maintain streaks, track progress, and stay consistent through a clean, intuitive interface.",   tech: ["React", "Tailwind CSS", "Local Storage"],
    live: "https://smart-routine-tracker.vercel.app/",
    github: "https://github.com/Shrishti2812/Smart-Routine-Tracker.git",
  },
  {
    title: "GitHub Profile Finder",
    image: "/images/gitprofilefinder.png",
    description:
      "A responsive GitHub profile finder that enables users to search for GitHub accounts and explore profile details, repositories, followers, and other public information using the GitHub API.",
    tech: ["HTML", "CSS", "JavaScript", "GitHub API"],
    live: "https://shrishti2812.github.io/Git-Profile-Finder/",
    github: "https://github.com/Shrishti2812/Git-Profile-Finder.git",
  },
];
  return (
    <>
  <section
  id="projects"
  className="relative py-20 bg-slate-950 overflow-hidden"
>
  {/* Background Glow */}
  <div className="bg-slate-950 p-2 md:p-4" />

  <div className="relative max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="max-w-3xl mx-auto text-center mb-14">
      <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-400">
        Featured Projects
      </span>

      <h1 className="mt-5 text-4xl md:text-6xl font-bold text-white">
        Things I've Built
      </h1>

      <p className="mt-5 text-base md:text-lg text-slate-400 leading-8">
        From interactive user interfaces to real-world web applications,
        these projects showcase my experience with React, Tailwind CSS,
        modern JavaScript, APIs and responsive design.
      </p>
    </div>

    {/* Project Grid */}
    <div className="grid grid-cols-1 gap-6 md:gap-8">

      {projects.map((project) => (

        <div
          key={project.title}
          className="group flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10 md:flex-row md:items-stretch"
        >

          {/* Image */}
          <div className="relative overflow-hidden md:basis-2/5 md:min-h-[260px]">

            <img
              src={project.image}
              alt={project.title}
              className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110 md:h-full md:min-h-[260px]"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-4 md:p-6">

            <h2 className="text-xl md:text-2xl font-bold text-white">
              {project.title}
            </h2>

            <p className="mt-2 text-sm md:text-base leading-6 text-slate-400">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-3 flex flex-wrap gap-2">

              {project.tech.map((tech) => (

                <span
                  key={tech}
                  className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 transition-all duration-300 group-hover:bg-emerald-500/20"
                >
                  {tech}
                </span>

              ))}

            </div>

            {/* Buttons */}
            <div className="mt-4 md:mt-6 flex flex-col gap-3 sm:flex-row">

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex min-w-0 items-center justify-center gap-2 rounded-xl bg-emerald-500 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30"
              >
                Live Demo
                <HiOutlineExternalLink size={17} />
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex min-w-0 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-slate-500 hover:bg-slate-800"
              >
                GitHub
                <FaGithub size={17} />
              </a>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>
</section>
    </>
  );
}

export default Project;