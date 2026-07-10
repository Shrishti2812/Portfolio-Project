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

    return(
        <>
        <div className="bg-slate-950 p-6 lg:p-14   ">
            <h1 className="text-3xl md:text-6xl text-center font-bold text-gray-300 mb-4">Skills</h1>
<p className=" text-gray-400 mb-4 text-center">The technologies and tools I use to build modern and scalable
    web applications. </p>     
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-slate-950 p-6 lg:px-12  mx-auto">
          <div className="bg-slate-900 p-5 rounded-lg">
  <div className="flex items-start gap-4">
    <div className="bg-emerald-400 p-3 rounded-lg">
      <FaCode className="text-3xl text-white" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white">
        Frontend Developer
      </h3>
      <p className="text-sm text-gray-400 mt-1">
        Building responsive and interactive user interfaces
        using React, JavaScript, and Tailwind CSS.
      </p></div>
  </div>
  <div className="grid grid-cols-2 grid-rows-2   gap-4 mt-4">
     <div className="bg-slate-800 p-2 rounded-2xl text-center flex items-center justify-center gap-2">
     <SiHtml5 className="text-orange-400 text-2xl" /> <p className="text-sm text-gray-300">HTML</p>
    </div>
     <div className="bg-slate-800 p-2 rounded-2xl text-center flex items-center justify-center gap-2">
    <SiCss className="text-blue-400 text-2xl" />  <p className="text-sm text-gray-300">CSS</p>
    </div>
    <div className="bg-slate-800 p-2 rounded-2xl text-center flex items-center justify-center gap-2">
      <SiJavascript className="text-yellow-400 text-2xl text-center" />  <p className="text-sm text-gray-300">JavaScript</p>
    </div>   
    <div className="bg-slate-800 p-2 rounded-2xl text-center flex items-center justify-center gap-2">
     <SiReact className="text-blue-400 text-2xl" />  <p className="text-sm text-gray-300">React</p>
    </div>
   
    <div className="bg-slate-800 p-2 rounded-2xl text-center flex items-center justify-center gap-2">
    <SiTailwindcss className="text-sky-400 text-2xl" />  <p className="text-sm text-gray-300">Tailwind CSS</p>
    </div>
  </div>
</div>
            <div className="bg-slate-900 p-4 rounded-lg  ">
  <div className="flex items-start gap-4">
    <div className="bg-emerald-400 p-3 rounded-lg">
      <FaCode className="text-3xl text-white" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white">
        Backend
      </h3>
      <p className="text-sm text-gray-400 mt-1">
      Building RESTful APIs and server-side applications using Node.js and Express .
      </p></div>

  </div>
  <div className="grid grid-cols-2 gap-4 mt-4">
  <div className="bg-slate-800 p-2 rounded-2xl flex items-center justify-center gap-2">
    <SiNodedotjs className="text-green-500 text-2xl" />
    <p className="text-sm text-gray-300">Node.js</p>
  </div>

  <div className="bg-slate-800 p-2 rounded-2xl flex items-center justify-center gap-2">
    <SiExpress className="text-gray-200 text-2xl" />
    <p className="text-sm text-gray-300">Express.js</p>
  </div>

  <div className="bg-slate-800 p-2 rounded-2xl flex items-center justify-center gap-2">
    <SiMysql className="text-blue-500 text-2xl" />
    <p className="text-sm text-gray-300">MySQL</p>
  </div>

  <div className="bg-slate-800 p-2 rounded-2xl flex items-center justify-center gap-2">
    <SiPostman className="text-orange-500 text-2xl" />
    <p className="text-sm text-gray-300">Postman</p>
  </div>
</div></div>

        <div className="bg-slate-900 p-4 rounded-lg">
  {/* Heading */}
  <div className="flex items-start gap-4">
    <div className="bg-emerald-400 p-3 rounded-lg">
      <FaLaptopCode className="text-3xl text-white" />
    </div>

    <div>
      <h3 className="text-xl font-semibold text-white">
        Languages & Tools
      </h3>

      <p className="text-sm text-gray-400 mt-1">
        Programming languages and development tools I use for building projects and solving problems.
      </p>
    </div>
  </div>

  {/* Skills */}
  <div className="grid grid-cols-2 gap-4 mt-4">
    <div className="bg-slate-800 p-2 rounded-2xl flex items-center justify-center gap-2">
      <FaJava className="text-orange-500 text-2xl" />
      <p className="text-sm text-gray-300">Java</p>
    </div>

    <div className="bg-slate-800 p-2 rounded-2xl flex items-center justify-center gap-2">
      <SiPython className="text-blue-500 text-2xl" />
      <p className="text-sm text-gray-300">Python</p>
    </div>

    <div className="bg-slate-800 p-2 rounded-2xl flex items-center justify-center gap-2">
      <SiMysql className="text-blue-500 text-2xl" />
      <p className="text-sm text-gray-300">SQL</p>
    </div>

    <div className="bg-slate-800 p-2 rounded-2xl flex items-center justify-center gap-2">
      <SiGit className="text-orange-500 text-2xl" />
      <p className="text-sm text-gray-300">Git</p>
    </div>

    <div className="bg-slate-800 p-2 rounded-2xl flex items-center justify-center gap-2">
      <SiGithub className="text-white text-2xl" />
      <p className="text-sm text-gray-300">GitHub</p>
    </div>    
  </div>
</div>     
</div>
</div>
</>
    )
}
export default Skills;
