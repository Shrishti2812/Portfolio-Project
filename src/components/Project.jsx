
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
function Project() {
  return (
    <>
      <div className="bg-slate-950 p-4 ">
        <h1 className="text-5xl font-bold text-white mb-4 text-center">Things I've Built</h1>
        <p className="text-center  text-gray-400 mb-4">From interactive user interfaces to real-world web applications, these projects
          reftlect my learning and development skills.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-slate-950 p-6 lg:px-12 mx-auto">

          <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300">
            <div className="  overflow-hidden">
              <img
                src="/images/shopsphere.png"
                alt="ShopSphere"
                className="w-full h-auto  hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Content */}
            <div className="p-5">
              <h2 className="text-2xl font-bold text-white">
                ShopSphere
              </h2>
              <p className="text-slate-400 text-sm leading-6 mt-2">
                A modern e-commerce application featuring product search, category
                filtering, wishlist management, and cart functionality designed with a
                responsive user experience in mind.
              </p>
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {["React", "Tailwind CSS", "React Router", "Context API"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                  >   {tech}
                  </span>
                ))}
              </div>
              {/* Buttons */}
              <div className="flex gap-2 mt-6">
                <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg text-sm font-medium transition-all duration-300"
                >   Live Demo  <HiOutlineExternalLink size={16} /> </a>
                <a href="#" className="flex-1 flex items-center justify-center gap-2 border border-slate-600 hover:bg-slate-800 text-white py-2 rounded-lg text-sm font-medium transition-all duration-300"
                >       GitHub    <FaGithub size={16} />   </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300">
            <div className="  overflow-hidden">
              <img
                src="/images/routineplanner.png"
                alt="Smart Routine Tracker"
                className="w-full h-auto  hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Content */}
            <div className="p-5">
              <h2 className="text-2xl font-bold text-white">
                Smart Routine Tracker
              </h2>
              <p className="text-slate-400 text-sm leading-6 mt-2">
                A productivity-focused routine planner designed to help users organize
                daily tasks, categorize activities, set priorities, track progress, and
                build consistent habits with a clean and responsive interface.
              </p>
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {["React", "Tailwind CSS", "Local Storage"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                  >   {tech}
                  </span>
                ))}
              </div>
              {/* Buttons */}
              <div className="flex gap-2 mt-6">
                <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg text-sm font-medium transition-all duration-300"
                >   Live Demo  <HiOutlineExternalLink size={16} /> </a>
                <a href="#" className="flex-1 flex items-center justify-center gap-2 border border-slate-600 hover:bg-slate-800 text-white py-2 rounded-lg text-sm font-medium transition-all duration-300"
                >       GitHub    <FaGithub size={16} />   </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300">
            <div className="  overflow-hidden">
              <img
                src="/images/gitprofilefinder.png"
                alt="GitHub Profile Finder"
                className="w-full h-auto  hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Content */}
            <div className="p-5">
              <h2 className="text-2xl font-bold text-white">
                GitHub Profile Finder
              </h2>
              <p className="text-slate-400 text-sm leading-6 mt-2">
                A responsive GitHub profile finder that enables users to 
                search for GitHub accounts and explore profile details, repositories, 
                followers, and other public information using the GitHub API.
              </p>
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {["HTML", "CSS", "JavaScript", "GitHub API"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                  >   {tech}
                  </span>
                ))}
              </div>
              {/* Buttons */}
              <div className="flex gap-2 mt-6">
                <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg text-sm font-medium transition-all duration-300"
                >   Live Demo  <HiOutlineExternalLink size={16} /> </a>
                <a href="#" className="flex-1 flex items-center justify-center gap-2 border border-slate-600 hover:bg-slate-800 text-white py-2 rounded-lg text-sm font-medium transition-all duration-300"
                >       GitHub    <FaGithub size={16} />   </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Project;