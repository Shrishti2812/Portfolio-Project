import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <section id="hero">
      <div className="min-h-screen bg-slate-950 p-6 lg:p-36">
        <div className="grid grid-cols-1 max-w-8xl bg-slate-900 p-8 rounded-lg md:grid-cols-2 gap-6 lg:gap-12">
          <section className="flex flex-col space-y-2 lg:space-y-4">
            <p className="text-2xl font-bold">Hi, I'm</p>
            <p className="text-3xl font-bold">Shrishti Gupta</p>
            <p className="text-3xl font-bold">Frontend Developer</p>
            <p className="text-xl font-bold text-gray-300 max-w-lg">
              Turning ideas into responsive and interactive web applications using React,
              Tailwind CSS, and modern JavaScript with seamless user experience.
            </p>

            <div className="flex space-x-4">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded">
                  Resume
                </button>
              </a>

              <a href="#projects">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded">
                  View Projects
                </button>
              </a>
            </div>
          </section>

          <section className="flex justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyIxY4qLBfL_3XetAQQ0sX7R0zQUuozAUTNcT2XoFifaPX3615QCxq6I&s"
              alt="Shrishti Gupta"
              className="w-80 h-80 object-cover"
            />
          </section>
        </div>
      </div>
    </section>
  );
}

export default Hero;