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
        <div className="bg-slate-950 p-6">
            <h2 className="text-5xl font-bold text-white mb-4 text-center">Education and HighLights</h2>
          <p className=" text-gray-400 text-center">My academic background and coding journey so far.</p>
      <div className="bg-slate-800 p-4 max-w-3xl mx-auto rounded-lg shadow-md gap-8 mt-4 flex flex-wrap">
<div className="flex justify-center items-center px-8 border-b-2 md:border-r-2 border-gray-700">
 <div className="w-34 h-34 rounded-full bg-slate-900 border-2 border-emerald-500 flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:scale-110 hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] transition-all duration-300">

    <FaGraduationCap className="text-emerald-500 text-8xl mx-auto" /></div>
</div>
<div className="flex flex-col  px-8">
    <h3 className="text-xs font-bold text-emerald-500 text-center">EDUCATION</h3>
    <p className="text-xl font-bold text-center">Bachelor of Computer Applications(BCA)</p>
    <p className="text-gray-400 text-center">Dr.Ram Manohar Lohia Avadh University,Ayodhya</p>
<div className="flex justify-around items-center gap-8 ">
    <div className="flex justify-center items-center gap-2 mt-2">
        
<FaRegCalendarDays className="text-emerald-500 text-3xl mx-auto" />
      <div > <p className="text-white text-center text-sm">2024 - 2027</p>
      <p className="text-gray-400 text-xs text-center">Expected Graduation</p></div>
      </div>
      <div className="flex justify-center items-center gap-2 mt-2">
    <FaRegStar className="text-emerald-500 text-3xl mx-auto" />
      <div > <p className="text-white text-center text-sm">CGPA : 8.5</p>
      <p className="text-gray-400 text-xs text-center">(Till Now)</p></div>
      </div>
    
      </div>
        </div>
        </div>
        <div>
            <h2 className="text-2xl font-bold text-emerald-500  text-center mt-10">Highlights</h2>
            <p className=" text-gray-400 text-center">My coding journey highlights so far.</p>
            <div className="relative max-w-6xl mx-auto mt-6 pb-24">
                <div className="absolute top-8 left-0 right-0 h-[2px] bg-slate-200 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
                    <div className="relative flex justify-between">
{highlights.map((item,idx)=>(
    <div key={idx} className="flex flex-col items-center p-2 text-center w-56">
<div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-emerald-500 flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:scale-110 hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] transition-all duration-300">
    {item.icon}
</div>
        <h1 className="text-xl font-semi-bold mt-3 text-white">{item.title}</h1>
        <p className="text-sm mt-1  text-gray-400">{item.desc}</p>
        <div className="w-8 h-1 bg-emerald-500 rounded-full mt-4"></div>
    </div>
))}
                    </div>
                </div>
            </div>
            </div>
        
    );
}
export default Education;