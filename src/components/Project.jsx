
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

function Project() {
  const projects = [
  {
    title: "ShopSphere",
    image: "/images/shopsphere.png",
    description:
      "A modern e-commerce application featuring product search, category filtering, wishlist management, and cart functionality designed with a responsive user experience in mind.",
    tech: ["React", "Tailwind CSS", "React Router", "Context API"],
    live: "https://e-commerce-project-chi-brown.vercel.app/",
    github: "https://github.com/Shrishti2812/E-commerce-Project.git",
  },
  {
    title: "Smart Routine Tracker",
    image: "/images/routineplanner.png",
    description:
      "A productivity-focused routine planner designed to help users organize daily tasks, categorize activities, set priorities, track progress, and build consistent habits with a clean and responsive interface.",
    tech: ["React", "Tailwind CSS", "Local Storage"],
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
    <section id="projects">
      <div className="bg-slate-950 p-2 md:p-4">
        <h1 className="text-5xl font-bold text-white mb-4 text-center">Things I've Built</h1>
        <p className="text-center text-gray-400 mb-4">
          From interactive user interfaces to real-world web applications, these projects
          reflect my learning and development skills.
        </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-slate-950 p-6 lg:px-12 mx-auto">
  {projects.map((project) => (
    <div
      key={project.title}
      className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 h-full flex flex-col"
    >
      <div className="h-56 overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-3 md:p-5 flex flex-col flex-1">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          {project.title}
        </h2>

        <p className="text-slate-400 text-xs md:text-sm leading-4 mt-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 md:gap-2 mt-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-2 mt-auto pt-6">
          <a
            href={project.live}
            className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg text-sm font-medium transition-all duration-300"
          >
            Live Demo <HiOutlineExternalLink size={16} />
          </a>

          <a
            href={project.github}
            className="flex-1 flex items-center justify-center gap-2 border border-slate-600 hover:bg-slate-800 text-white py-2 rounded-lg text-sm font-medium transition-all duration-300"
          >
            GitHub <FaGithub size={16} />
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
      </div></section>
    </>
  );
}

export default Project;