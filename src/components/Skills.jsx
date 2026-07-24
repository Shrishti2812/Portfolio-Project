import { FaCode } from "react-icons/fa6"
import { FaJava } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostman,
  SiMongodb,
  SiCss,
  SiHtml5,
  SiReact,
  SiMysql,
  SiPython,
   SiGit,
  SiGithub,
 
 

} from "react-icons/si";
function Skills(){
const skillCategories = [
  {
    title: "Frontend Developer",
    description:
      "Building responsive and interactive user interfaces using React, JavaScript, and Tailwind CSS.",
    icon: <FaCode className="text-3xl text-white" />,
    skills: [
      { name: "HTML", icon: <SiHtml5 className="text-orange-400 text-2xl" /> },
      { name: "CSS", icon: <SiCss className="text-blue-400 text-2xl" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400 text-2xl" />,
      },
      { name: "React", icon: <SiReact className="text-blue-400 text-2xl" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400 text-2xl" />,
      },
    ],
  },
  {
    title: "Backend",
    description:
      "Building RESTful APIs and server-side applications using Node.js and Express.",
    icon: <FaCode className="text-3xl text-white" />,
    skills: [
      {
        name: "Node.js",
        icon: <SiNodedotjs className="text-green-500 text-2xl" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-gray-200 text-2xl" />,
      },
      {
        name: "MySQL",
        icon: <SiMysql className="text-blue-500 text-2xl" />,
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-orange-500 text-2xl" />,
      },
    ],
  },
  {
    title: "Languages & Tools",
    description:
      "Programming languages and development tools I use for building projects and solving problems.",
    icon: <FaLaptopCode className="text-3xl text-white" />,
    skills: [
      { name: "Java", icon: <FaJava className="text-orange-500 text-2xl" /> },
      {
        name: "Python",
        icon: <SiPython className="text-blue-500 text-2xl" />,
      },
      { name: "SQL", icon: <SiMysql className="text-blue-500 text-2xl" /> },
      { name: "Git", icon: <SiGit className="text-orange-500 text-2xl" /> },
      {
        name: "GitHub",
        icon: <SiGithub className="text-white text-2xl" />,
      },
    ],
  },
];
    return(
        <>
      <section id="skills">
  <div className="bg-slate-950 p-7 lg:p-14">
    <h1 className="text-3xl md:text-6xl text-center font-bold text-gray-300 mb-4">
      Skills
    </h1>

    <p className="text-gray-400 text-center mb-4">
      The technologies and tools I use to build modern and scalable web
      applications.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 lg:px-12 mx-auto">
      {skillCategories.map((category) => (
        <div
          key={category.title}
          className="group bg-slate-900 p-6 rounded-xl border border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]"
        >
          <div className="flex items-start gap-4">
            <div className="bg-emerald-400 p-3 rounded-lg transition-all duration-300 group-hover:scale-110  ">
              {category.icon}
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-emerald-400">
                {category.title}
              </h3>

              <p className="text-sm text-gray-400 mt-1">
                {category.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-3">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="group/skill bg-slate-800 p-2 rounded-xl border border-transparent flex items-center justify-center gap-2 transition-all duration-300  hover:scale-105 hover:border-emerald-400 hover:bg-slate-700 hover:shadow-[0_0_18px_rgba(16,185,129,0.25)]"
              >
                <span className="transition-transform duration-300 group-hover/skill:scale-125">
                  {skill.icon}
                </span>

                <p className="text-sm text-gray-300 transition-colors duration-300 group-hover/skill:text-white">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
</>
    )
}
export default Skills;
