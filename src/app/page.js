"use client";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "I build innovative web applications |";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) index = 0;
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 overflow-hidden">

      {/* Animated Blobs with Pulsate */}
      <div className="absolute -top-40 -left-40 w-72 h-72 sm:w-96 sm:h-96 bg-pink-400 rounded-full opacity-30 animate-blob animate-pulse mix-blend-multiply filter blur-3xl"></div>
      <div className="absolute top-10 -right-24 w-72 h-72 sm:w-96 sm:h-96 bg-blue-400 rounded-full opacity-30 animate-blob animation-delay-2000 animate-pulse mix-blend-multiply filter blur-3xl"></div>
      <div className="absolute bottom-10 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-purple-400 rounded-full opacity-30 animate-blob animation-delay-4000 animate-pulse mix-blend-multiply filter blur-3xl"></div>

      {/* Main Section */}
      <div className="w-85% mx-auto flex flex-col md:flex-row h-auto md:h-[90vh] pt-24 px-4 md:px-6 gap-10">
        {/* Left Sticky Section */}
        <div className="md:w-1/3 w-full flex-shrink-0 sticky md:top-10 self-start h-auto md:h-[80vh] p-8 md:p-10 bg-white/10 backdrop-blur-3xl rounded-3xl shadow-2xl flex flex-col justify-center space-y-6 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-400 to-red-400 animate-gradient-text text-center md:text-left">
            Nitish Bainsla
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/90 text-center md:text-left">
            Front End Engineer
          </h3>
          <p className="text-white/80 text-base sm:text-sm border-b border-white/20 pb-2 text-center md:text-left">
            {typedText} <span className="blinking-cursor">|</span>
          </p>

          {/* Section Links */}
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-3 mt-4 text-white text-lg">
            <ul className="space-y-1 md:space-y-0 md:gap-4">
              <li><a href="#experience" className="hover:underline hover:text-yellow-400 transition">Experience</a></li>
              <li><a href="#projects" className="hover:underline hover:text-yellow-400 transition">Projects</a></li>
              <li><a href="#contact" className="hover:underline hover:text-yellow-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-white rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-pink-500/50 transition-transform duration-300 hover:animate-bounce">
              Download Resume
            </button>
            <button className="px-6 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white/20 hover:scale-105 transition-transform duration-300 hover:animate-bounce">
              Contact
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-6 text-white text-2xl">
            <a href="#" className="hover:text-blue-400 transition transform hover:scale-125 hover:shadow-lg hover:shadow-blue-400/50"><FaGithub /></a>
            <a href="#" className="hover:text-blue-600 transition transform hover:scale-125 hover:shadow-lg hover:shadow-blue-600/50"><FaLinkedin /></a>
            <a href="#" className="hover:text-blue-300 transition transform hover:scale-125 hover:shadow-lg hover:shadow-blue-300/50"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-400 transition transform hover:scale-125 hover:shadow-lg hover:shadow-pink-400/50"><FaInstagram /></a>
          </div>
        </div>

        {/* Right Scrollable Section */}
        <div className="md:w-2/3 w-full max-h-auto md:max-h-[90vh] overflow-y-auto pr-0 md:pr-2 space-y-10 scrollbar-hide scroll-smooth">
          {/* Hero Image */}
          <div className="flex justify-center md:justify-end mt-5">
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full shadow-2xl overflow-hidden animate-float border-4 border-white/20 ring-4 ring-white/20 hover:scale-105 transition-transform duration-500 hover:ring-pink-400/50">
              <Image
                src="/Gemini_Generated_Image_ul0ajcul0ajcul0a.png"
                alt="Nitish Bainsla"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white/10 mx-6 backdrop-blur-3xl sm:p-6 rounded-3xl shadow-2xl border border-white/20 hover:scale-105 transition-transform duration-300 animate-fadeIn">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center md:text-left underline decoration-yellow-400 underline-offset-4">About Me</h2>
            <p className="text-white text-justify text-sm leading-relaxed">
              I&apos;m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.<br /><br />
              Currently, I&apos;m a Senior Front-End Engineer at Klaviyo, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Klaviyo&apos;s frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.<br /><br />
              In the past, I&apos;ve had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. Additionally, I also released a comprehensive video course a few years ago, guiding learners through building a web app with the Spotify API.<br /><br />
              In my spare time, I&apos;m usually climbing, playing tennis, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds.
            </p>
          </div>

          {/* Experience / Projects / Contact */}
          <div className="space-y-6 mx-6">
            {/* Experience */}
            <div className="bg-white/10 p-4 sm:p-6 rounded-2xl shadow-inner border border-white/10 backdrop-blur-md hover:scale-105 transition-transform duration-300 animate-fadeIn">
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-300 mb-2">Experience</h3>
              <p className="text-white/90 font-medium text-sm sm:text-base">Senior Front-End Engineer — Klaviyo</p>
              <p className="text-white/80 mt-2 leading-relaxed text-sm sm:text-base">Worked on accessible UI components, design systems, and performance optimizations.</p>
            </div>

            {/* Projects */}
            <div className="bg-white/10 sm:p-6 rounded-2xl shadow-inner border border-white/10 backdrop-blur-md hover:scale-105 transition-transform duration-300 animate-fadeIn delay-150">
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-300 mb-2">Projects</h3>
              <p className="text-white/90 font-medium text-sm sm:text-base">Project A — Accessible Component Library</p>
              <p className="text-white/80 mt-2 leading-relaxed text-sm sm:text-base">Designed UI components with accessibility-first approach.</p>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-pink-500 to-yellow-400 p-4 sm:p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 text-white animate-fadeIn delay-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Contact</h3>
              <p className="font-medium leading-relaxed text-sm sm:text-base text-center md:text-left">Reach me via email or LinkedIn. I&apos;m always open to new opportunities!</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .blinking-cursor { animation: blink 1s step-start infinite; }
        @keyframes blink { 50% { opacity: 0; } }

        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        .animate-float { animation: float 5s ease-in-out infinite; }

        @keyframes blob { 0%,100%{transform:translate(0,0) scale(1);}33%{transform:translate(30px,-50px) scale(1.1);}66%{transform:translate(-20px,20px) scale(0.9);} }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        @keyframes fadeIn { 0%{opacity:0;transform:translateY(20px);} 100%{opacity:1;transform:translateY(0);} }
        .animate-fadeIn { animation: fadeIn 1s ease forwards; }
        .animate-fadeIn.delay-150 { animation-delay: 0.15s; }
        .animate-fadeIn.delay-300 { animation-delay: 0.3s; }

        @keyframes gradientText { 0%{background-position:0%}50%{background-position:100%}100%{background-position:0%} }
        .animate-gradient-text { background-size: 200% auto; animation: gradientText 4s linear infinite; }

        @keyframes pulse { 0%, 100% { transform: scale(1); opacity:0.3; } 50% { transform: scale(1.05); opacity:0.5; } }
        .animate-pulse { animation: pulse 6s ease-in-out infinite; }

        /* Scrollbar Hide */
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
