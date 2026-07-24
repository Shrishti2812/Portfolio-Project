import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileDownload,FaUser,FaTag,FaCommentDots
} from "react-icons/fa";
function Footer(){
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
     
  ];
    return(
        <>
     <div className="bg-slate-950 border-t border-slate-800 px-6 md:px-16 py-8">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <a href="#home" className="font-mono text-4xl font-bold">
        <span className="text-emerald-400">&lt;</span>
        <span className="text-white">SG</span>
        <span className="text-emerald-400">/&gt;</span>
      </a>

      <p className="mt-2 max-w-md text-gray-400 leading-7">
        Turning ideas into interactive experiences through clean code.
      </p>
    </div>

    <div className="flex justify-center md:justify-end gap-10 flex-wrap">
      {contacts.map((item) => (
        <a
          key={item.text}
          href={item.link}
          target={item.link.startsWith("http") ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="group flex flex-col items-center"
        >
        <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border-2 border-emerald-500 bg-slate-900 text-emerald-500 shadow-[0_0_18px_rgba(16,185,129,.35)] transition-all duration-300 group-hover:scale-110">
        {item.icon}
      </div>

          <span className="mt-1 text-gray-300 group-hover:text-emerald-400 transition">
            {item.text}
          </span>
         
        </a>
      ))}
    </div>
  </div>

  <p className="mt-6 text-center text-sm text-emerald-300">
    Thanks for visiting my portfolio! 👋
  </p>

  <div className="my-6 border-t border-slate-800" />

  <p className="text-center text-sm text-gray-500">
    © 2026 <span className="text-emerald-400">Shrishti Gupta</span>. All rights reserved.
  </p>
</div>
        </>
    )
}
export default Footer;