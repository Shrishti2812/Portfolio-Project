import { FaRegStar } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { Monitor, Code2, Server,Award} from "lucide-react";

function Education(){
    const highlights = [
        {
            icon:<Monitor className="text-emerald-500 text-2xl"></Monitor>,
            title:"Frontend Developer",
            desc:"Built responsive react applications"   
        },
        {
           icon:<Code2 className="text-emerald-500 text-2xl"></Code2>,
            title:"DSA Progress",
            desc:"400+ DSA problems solved"
        },
        {
      icon:<Server className="text-emerald-500 text-2xl"></Server>,
           title:"Currently Learning",
            desc:"Node js,Express and MongoDB"
        },
        {
            icon:<Award className="text-emerald-500 text-2xl"></Award>,
            title:"Certification",
            desc:"Introduction to Generative AI"
        }
    ]
    return (
      <section id="education">
        <div className="bg-slate-950 p-6">
            <h2 className="text-5xl font-bold text-white mb-4 text-center">Education and HighLights</h2>
          <p className=" text-gray-400 text-center">My academic background and coding journey so far.</p>
      <div className="bg-slate-800 p-5 md:p-6 max-w-3xl mx-auto rounded-lg shadow-md mt-4 flex flex-col md:flex-row gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]">

  {/* Icon */}
  <div className="flex justify-center items-center px-6 py-4 border-b-2 md:border-b-0 md:border-r-2 border-gray-700">

    <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-slate-900 border-2 border-emerald-500 flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:scale-110 hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] transition-all duration-300">

      <FaGraduationCap className="text-emerald-500 text-5xl md:text-7xl" />

    </div>

  </div>

  {/* Content */}
  <div className="flex-1 flex flex-col px-4 md:px-8">

    <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-500 text-center mb-2">
      Education
    </h3>

    <p className="text-lg md:text-xl font-bold text-center leading-snug mb-2">
      Bachelor of Computer Applications (BCA)
    </p>

    <p className="text-gray-400 text-sm md:text-base text-center leading-relaxed">
      Dr. Ram Manohar Lohia Avadh University, Ayodhya
    </p>

    {/* Bottom Info */}
    <div className="flex justify-evenly items-center gap-5 mt-5">

      {/* Duration */}
      <div className="flex items-center gap-2">

        <FaRegCalendarDays className="text-emerald-500 text-2xl md:text-3xl" />

        <div>
          <p className="text-white text-sm font-medium">
            2024 - 2027
          </p>

          <p className="text-gray-400 text-xs">
            Expected Graduation
          </p>
        </div>

      </div>

      {/* CGPA */}
      <div className="flex items-center gap-2">

        <FaRegStar className="text-emerald-500 text-2xl md:text-3xl" />

        <div>
          <p className="text-white text-sm font-medium">
            CGPA: 8.5
          </p>

          <p className="text-gray-400 text-xs">
            Till Now
          </p>
        </div>

      </div>

    </div>

  </div>

</div>        <div>
  <h2 className="text-2xl font-bold text-emerald-500 text-center mt-10">
    Highlights
  </h2>

  <p className="text-gray-400 text-center text-sm md:text-base">
    My coding journey highlights so far.
  </p>

  <div className="relative max-w-6xl mx-auto mt-8 pb-16 px-2 md:px-6">

    {/* Timeline */}
    <div className="absolute top-4 md:top-6 left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-bg-gradient-to-r"></div>

    {/* Items */}
    <div className="relative flex justify-between items-start">

      {highlights.map((item, idx) => (
        <div
          key={idx}
          className="w-[23%] h-44 flex flex-col items-center text-center"
        >      {/* Circle */}
          <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-slate-900 border-2 border-emerald-500 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:scale-110 hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transition-all duration-300 z-10">
            <div className="text-sm md:text-xl text-emerald-500">
            {item.icon}</div>
          </div>
        <h3 className="mt-3 text-[12px] md:text-lg h-9 font-semibold text-white ">
            {item.title} </h3>

          {/* Description */}
          <p className="mt-2 h-13 text-[10px] md:text-sm text-gray-400 leading-snug min-h-[28px] md:min-h-[42px]">
            {item.desc}
          </p>

          {/* Accent */}
          <div className="w-6 md:w-8 h-1 rounded-full bg-emerald-500 mt-3"></div>

        </div>
      ))}

    </div>

  </div>
</div>
            </div>
        </section>
    );
}
export default Education;