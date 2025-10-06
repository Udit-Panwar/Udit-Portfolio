import React from "react";

export default function Navbar() {
  return (
    <nav className="flex flex-col min-h-screen p-8 bg-gradient-to-b from-slate-900 via-purple-900/50 to-slate-900 text-white w-72 relative overflow-hidden shadow-2xl">
 
      {/* Animated Background Effect */}
      <div className="absolute top-10 left-0 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-0 w-40 h-40 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>

      {/* Logo/Name Section with Gradient */}
      <div className="relative z-10 mb-16">
        <div className="text-3xl font-black mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 animate-gradient">
            Udit Panwar
          </span>
        </div>
        <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-purple-500 rounded-full"></div>
        <p className="text-gray-400 text-sm mt-3 font-light">Full Stack Developer</p>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-col gap-3 text-lg font-medium relative z-10">
        <li>
          <a 
            href="/" 
            className="group flex items-center gap-4 px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-gradient-to-r hover:from-red-500/20 hover:to-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🏠</span>
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-purple-400 transition-all duration-300">
              Home
            </span>
          </a>
        </li>
        
        <li>
          <a 
            href="/about" 
            className="group flex items-center gap-4 px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-gradient-to-r hover:from-red-500/20 hover:to-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">👤</span>
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-purple-400 transition-all duration-300">
              About
            </span>
          </a>
        </li>
        
        <li>
          <a 
            href="/projects" 
            className="group flex items-center gap-4 px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-gradient-to-r hover:from-red-500/20 hover:to-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">💼</span>
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-purple-400 transition-all duration-300">
              Projects
            </span>
          </a>
        </li>
        
        <li>
          <a 
            href="/contact" 
            className="group flex items-center gap-4 px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-gradient-to-r hover:from-red-500/20 hover:to-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">📧</span>
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-purple-400 transition-all duration-300">
              Contact
            </span>
          </a>
        </li>
      </ul>

      {/* Bottom Social Links */}
      <div className="mt-auto relative z-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>
        
        <div className="flex justify-center gap-4">
          <a 
            href="https://github.com/Udit-Panwar?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            title="GitHub"
          >
            <span className="text-xl">💻</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/udit-panwar-306a272ab" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            title="LinkedIn"
          >
            <span className="text-xl">💼</span>
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            title="Twitter"
          >
            <span className="text-xl">🐦</span>
          </a>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </nav>
  );
}