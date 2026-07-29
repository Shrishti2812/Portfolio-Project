import {
  FaCode,
  FaServer,
  FaBrain,
  FaRocket,
} from "react-icons/fa";

function About() {
  const aboutCards = [
  {
    id: 1,
    icon: FaCode,
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces using React, JavaScript, and Tailwind CSS with a focus on clean design and usability.",
  },
  {
    id: 2,
    icon: FaServer,
    title: "Backend Journey",
    description:
      "Currently learning Node.js, Express, and MongoDB while expanding from frontend into full-stack development.",
  },
  {
    id: 3,
    icon: FaBrain,
    title: "Problem Solving",
    description:
      "Strengthening algorithmic thinking through consistent DSA practice and writing clean, efficient solutions.",
  },
  {
    id: 4,
    icon: FaRocket,
    title: "Project Based Learning",
    description:
      "Applying new concepts by building real-world projects that improve practical development skills and confidence.",
  },
];
 
    return(
        <>
       <section id="about">
  <div className="grid grid-cols-1 gap-8 bg-slate-950 p-6 lg:grid-cols-2 lg:p-8">

    {/* About Text */}
    <section className="flex flex-col justify-center">
      <p className="mb-4 w-fit rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-300">
        About Me
      </p>
      <h1 className="mb-4 mt-2 text-3xl font-bold text-gray-200 sm:text-4xl">
        A clear focus on thoughtful web experiences
      </h1>
      <p className="mt-2 text-[16px] leading-8 text-gray-300">
        I build responsive and interactive web applications with a strong
        emphasis on clean code and intuitive design. I am a frontend developer
        focused on building meaningful projects, learning new technologies,
        and continuously improving through hands-on development and problem
        solving.
      </p>
    </section>
       <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {aboutCards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.id}
            className="
              group rounded-2xl border border-slate-800  bg-slate-900 p-3 md:p-5 transition-all duration-300  hover:-translate-y-1    hover:border-emerald-500"       >
           <div className="mb-3 flex items-center gap-4">
              <div
                className="
                  flex h-10 w-10 items-center justify-center    rounded-xl border border-emerald-500  bg-emerald-500/20   sm:h-12 sm:w-12" >
                <Icon
                  className="
                    text-xl text-emerald-400
                    transition-transform duration-300
                    group-hover:scale-125
                  "
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200">{card.title}       </h3>
                <div
                  className="
                    mt-3 h-1 w-16 rounded-full bg-emerald-500
                    transition-all duration-300
                    group-hover:w-24
                  "
                />
              </div>

            </div>


            <p className="text-sm leading-7 text-gray-400">
              {card.description}
            </p>

          </div>
        );
      })}

    </div>

  </div>
</section>
        </>
    )
}
export default About;