import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileDownload,FaUser,FaTag,FaCommentDots
} from "react-icons/fa";

function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope />,
      text: "Email",
      subtext:"shrishtigupta2812@gmail.com",
    link: "mailto:shrishtigupta2812@gmail.com",
    },
    {
      icon: <FaGithub />,
      text: "GitHub",
      subtext:"github.com/Shrishti2812",
      link: "https://github.com/Shrishti2812",
    },
    {
      icon: <FaLinkedin />,
      text: "LinkedIn",
subtext:"linkedin.com/in/shrishti-gupta-584b82373",
      link: "http://linkedin.com/in/shrishti-gupta-584b82373",
    },
    {
      icon: <FaFileDownload />,
      text: "Resume",
      subtext:"View Resume",
      link: "/resume.pdf",
    },
  ];
  return (
    <>
    <section id="contact">
      <div className="bg-gray-950 p-4 md:p-10">
        <div className="border-gray-400 inline-block px-2 py-1 border rounded-full"> <h1 className="text-xs text-emerald-400  ">Let's connect</h1></div>
        <div className="flex flex-col md:flex-row justify-between px-5 mt-2 mx-auto" >
          <div >
            <h1 className="text-3xl text-white mt-2 font-bold">Let's Build Something Together</h1>
            <p className="mt-4 text-gray-500 text-base md:text-lg leading-6 max-w-lg">From innovative ideas to real-world applications, I'm always excited to take on new challenges.
              If you're interested in collaborating, offering an internship, or simply connecting,
              my inbox is always open.</p>
       <div className="flex flex-col gap-5 mt-6">
  {contacts.map((item, idx) => (
    <a
      key={idx}
      href={item.link}
      target={item.link.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="group flex items-center gap-4"
    >
      <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border-2 border-emerald-500 bg-slate-900 text-emerald-500 shadow-[0_0_18px_rgba(16,185,129,.35)] transition-all duration-300 group-hover:scale-110 ">
        {item.icon}
      </div>

      <div className="leading-tight">
        <p className="text-white font-medium group-hover:text-emerald-400 transition-colors">
          {item.text}
        </p>
        <p className="text-sm text-slate-400">
          {item.subtext}
        </p>
      </div>
    </a>
  ))}
</div>
            <div>
            </div>
          </div>

       <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-xl hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300">
 <div className="flex items-center gap-3">
  <div className=" flex items-center justify-center">
    <FaCommentDots className="text-emerald-400 text-2xl" />
  </div>

  <h2 className="text-3xl font-semibold text-white">
    Send a Message
  </h2>
</div>
  <p className="text-gray-500 mt-1">Have a question or want to work together?</p>
  <p className="text-gray-500">Fill out the form below and I'll get back to you as soon as possible.</p>

  <div className="grid grid-cols-2 gap-4 mt-5">
    <div className="relative">
      <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
      <input
        placeholder="Your Name"
        className="w-full bg-slate-800 border border-slate-700 rounded-xl py-2 pl-10 pr-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 transition-all"
      />
    </div>

    <div className="relative">
      <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
      <input
        placeholder="Your Email"
        className="w-full bg-slate-800 border border-slate-700 rounded-xl py-2 pl-10 pr-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 transition-all"
      />
    </div>
  </div>

  <div className="relative mt-4">
    <FaTag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
    <input
      placeholder="Subject"
      className="w-full bg-slate-800 border border-slate-700 rounded-xl py-2 pl-10 pr-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 transition-all"
    />
  </div>

  <div className="relative mt-4">
    <FaCommentDots className="absolute left-3 top-4 text-gray-500" />
    <textarea
      rows="5"
      placeholder="Your Message"
      className="w-full resize-none bg-slate-800 border border-slate-700 rounded-xl pt-3 pl-10 pr-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 transition-all"
    ></textarea>
  </div>
<a
  href="mailto:shrishtigupta2812@gmail.com?subject=Portfolio%20Inquiry"
>
 

  <button className="w-full mt-5 bg-emerald-600 text-slate-950 font-semibold py-2 rounded-xl hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all duration-300">
    📩 Send Message
  </button></a>
</div>
        </div>
      </div>
</section>
    </>
  )
}
export default Contact;