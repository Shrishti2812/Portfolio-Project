function About(){
    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-950 p-6 lg:px-12 ">
            <section className="flex flex-col justify-center">
<h1 className="text-3xl md:text-6xl font-bold text-gray-300 mb-6">About Me</h1>
<p className="text-lg text-gray-200 mb-4"> I build responsive and interactive web applications for better user experience with 
    an emphasis on clean code and intuitive design. I am a frontend developer focused on building meaningful
    projects, learning new technologies and continously impoving through hands-on development and problem 
    solving.
</p>
 
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 mt-8 lg:mt-0 lg:ml-8">
<div className="bg-slate-900 px-10 py-5 rounded-lg  ">
    <p className=" text-center  text-lg text-gray-300 mb-1">Frontend Developer </p>
    <p className="text-sm text-center text-gray-400" >Building responsive and interactive user interfaces using React, JavaScript, and Tailwind CSS 
        with a focus on clean design and usability.
    </p>
    </div>
    
<div className="bg-slate-900 p-4 rounded-lg    ">
 <p className="text-center  text-lg text-gray-300 mb-1"> Learning Backend Development </p>
    <p className="text-sm text-center text-gray-400">Currently learning Node.js, Express, and databases
        while expanding from frontend into full-stack development.
    </p>
</div>
<div className="bg-slate-900 p-4 rounded-lg ">
    <p className="text-center  text-lg text-gray-300 mb-1">Problem Solving </p>
    <p className="text-sm text-center text-gray-400">Improving algorithmic thinking through consistent
        DSA practice and writing efficient solutions.
    </p>
</div>
<div className="bg-slate-900 p-4 rounded-lg   ">
    <p className="text-center  text-lg text-gray-300 mb-1">Project Based Learning</p>
    <p className="text-sm text-center text-gray-400">Building projects to apply new concepts,
        strengthen practical skills, and gain hands-on development experience.
    </p>
</div>
            </section>
        </div>
        </>
    )
}
export default About;