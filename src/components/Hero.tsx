import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-32 px-6">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djZoLTZ2LTZoNnptLTEyIDB2NmgtNnYtNmg2em0yNCAwdjZoLTZ2LTZoNnptLTEyIDEydjZoLTZ2LTZoNnptLTEyIDB2NmgtNnYtNmg2em0yNCAwdjZoLTZ2LTZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          <div className="inline-block mb-6">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-5xl font-bold shadow-2xl">
              RM
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Rasheed Mohammad
          </h1>

          <p className="text-2xl md:text-3xl text-slate-300 mb-8 font-light">
            Software Developer
          </p>

          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Proactive developer with proven experience in delivering responsive, user-friendly web applications
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="mailto:rasheedmohammad242@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Mail size={20} />
              <span>Email Me</span>
            </a>

            <a
              href="https://linkedin.com/in/rasheedmohammad-268a70320"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-slate-400">
            <a href="mailto:rasheedmohammad242@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={18} />
              <span className="text-sm">rasheedmohammad242@gmail.com</span>
            </a>
            <a href="tel:6281695928" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={18} />
              <span className="text-sm">6281695928</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
