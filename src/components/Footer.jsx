function Footer(){
    return(
        <>
         <div className="flex flex-col gap-4 p-2 md:p-4 bg-gray-900 text-white">

  <div className="flex flex-col gap-4 md:flex-row md:justify-around md:text-left">

    <div className="flex flex-col justify-center items-center md:items-start  md:gap-4">
      <span className="font-bold text-sm sm:text-lg md:text-3xl lg:text-4xl tracking-tight text-white">
      Shrishti Gupta
      </span> 
    </div>

    <div className="flex justify-center gap-4 md:gap-30 p-2">

      <div className="flex flex-col gap-1 items-center">
        <h2 className="text-sm md:text-lg font-semibold mt-2">
          Quick Links
        </h2>

        <section
          className="text-gray-300 hover:text-white transition-colors text-sm md:text-md"
          to="/"
        >
          Home
        </section>

        <section
          className="text-gray-300 hover:text-white transition-colors text-sm md:text-md"
          to="/about"
        >
          About
        </section>
           <section    
          className="text-gray-300 hover:text-white transition-colors text-sm md:text-md"
          to="/contact"
        >
         Skills
        </section>
        <section    
          className="text-gray-300 hover:text-white transition-colors text-sm md:text-md"
          to="/contact"
        >
        Projects
        </section>
        <section    
          className="text-gray-300 hover:text-white transition-colors text-sm md:text-md"
          to="/contact"
        >
          Contact
        </section>

         
      </div>

      <div className="flex flex-col gap-1 items-center">
        <h2 className="text-sm md:text-lg font-semibold mt-2">
          Contact 
        </h2>

        <p className="text-gray-300 text-sm md:text-md">
            GitHub
        </p>

        <p className="text-gray-300 text-sm md:text-md">
         LinkedIn
        </p>
           <p className="text-gray-300 text-sm md:text-md">
        shrishtigupta2812@gmail.com
        </p>
      </div>

    

    </div>
  </div>

  <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
    © 2026 Shrishti Gupta
  </div>
</div>
        </>
    )
}
export default Footer;