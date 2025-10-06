import React from "react";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex flex-col items-center px-10 py-20 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-5xl w-full relative z-10 space-y-16">
        
        {/* About Me Section */}
        <div className="animate-fade-in-up">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">👨‍💻</span>
            <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 animate-gradient">
              About Me
            </h2>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:border-blue-500/30 group">
            <p className="text-gray-200 text-lg leading-relaxed">
              I am a <span className="text-cyan-400 font-semibold">frontend developer</span> with experience in <span className="text-blue-400 font-semibold">React</span> and <span className="text-indigo-400 font-semibold">TailwindCSS</span>.
              <br /><br />
              I love building <span className="text-cyan-300">responsive, modern websites</span> that deliver exceptional user experiences.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="animate-fade-in-up animation-delay-200">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">🎓</span>
            <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 animate-gradient">
              Education
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:border-blue-500/30 space-y-6">
            
            {/* Education Item 1 */}
            <div className="relative pl-8 border-l-4 border-cyan-500/50 hover:border-cyan-500 transition-all duration-300">
              <div className="absolute -left-2.5 top-0 w-4 h-4 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50"></div>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
                <span className="font-bold text-xl text-white">Java Full Stack Course From Qspiders, Noida</span>
                <span className="text-sm text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full mt-2 lg:mt-0 w-fit">Jan 2025 - Present</span>
              </div>
            </div>
            
            {/* Education Item 2 */}
            <div className="relative pl-8 border-l-4 border-blue-500/50 hover:border-blue-500 transition-all duration-300">
              <div className="absolute -left-2.5 top-0 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
                <span className="font-bold text-xl text-white">Bachelor of Technology</span>
                <span className="text-sm text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full mt-2 lg:mt-0 w-fit">July 2020 - June 2023</span>
              </div>
              <span className="text-gray-300">Meerut Institute of Technology, Meerut</span>
            </div>
            
            {/* Education Item 3 */}
            <div className="relative pl-8 border-l-4 border-indigo-500/50 hover:border-indigo-500 transition-all duration-300">
              <div className="absolute -left-2.5 top-0 w-4 h-4 bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/50"></div>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
                <span className="font-bold text-xl text-white">Diploma From Beacon Institute of Technology, Meerut</span>
                <span className="text-sm text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full mt-2 lg:mt-0 w-fit">2017 - 2020</span>
              </div>
            </div>
            
            {/* Education Item 4 */}
            <div className="relative pl-8 border-l-4 border-purple-500/50 hover:border-purple-500 transition-all duration-300">
              <div className="absolute -left-2.5 top-0 w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
                <span className="font-bold text-xl text-white">High School From SGRR Public School</span>
                <span className="text-sm text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full mt-2 lg:mt-0 w-fit">June 2017</span>
              </div>
              <span className="text-gray-300">Ghaziabad, Uttar Pradesh</span>
            </div>

          </div>
        </div>

        {/* Experience Section */}
        <div className="animate-fade-in-up animation-delay-400">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">💼</span>
            <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 animate-gradient">
              Experience
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:border-blue-500/30">
            
            <div className="relative pl-8 border-l-4 border-cyan-500/50 hover:border-cyan-500 transition-all duration-300">
              <div className="absolute -left-2.5 top-0 w-4 h-4 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50 animate-pulse"></div>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
                <span className="font-bold text-2xl text-white">Solar Design</span>
                <span className="text-sm text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full mt-2 lg:mt-0 w-fit">July 3, 2023 - December 14, 2024</span>
              </div>
              <span className="text-gray-300 text-lg">Finulent Solutions LLP</span>
              <div className="mt-3 inline-block">
                <span className="text-cyan-400 font-semibold bg-cyan-500/20 px-4 py-2 rounded-full border border-cyan-500/30">
                  1.6 Years Experience
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}