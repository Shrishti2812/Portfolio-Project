import { FaRegStar } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";


function Education(){
    return (
        <div className="bg-slate-950 p-4  shadow-md">
            <h2 className="text-5xl font-bold text-white mb-4 text-center">Education and HighLights</h2>
          <p className=" text-gray-400 text-center">My academic background and coding journey so far.</p>
      <div className="bg-slate-800 p-4 max-w-3xl mx-auto rounded-lg shadow-md gap-8 mt-4 flex ">
<div className="flex justify-center items-center px-8 border-r-2 border-gray-700">
    <FaGraduationCap className="text-emerald-500 text-8xl mx-auto" />
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
        </div>
    );
}
export default Education;