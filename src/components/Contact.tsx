import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-12"></div>

        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-slate-300 text-center mb-12 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
            feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:rasheedmohammad242@gmail.com"
              className="flex items-center gap-4 bg-slate-800 hover:bg-slate-700 rounded-xl p-6 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Email</p>
                <p className="text-white font-medium break-all">rasheedmohammad242@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:6281695928"
              className="flex items-center gap-4 bg-slate-800 hover:bg-slate-700 rounded-xl p-6 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Phone</p>
                <p className="text-white font-medium">6281695928</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/rasheedmohammad-268a70320"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-slate-800 hover:bg-slate-700 rounded-xl p-6 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">LinkedIn</p>
                <p className="text-white font-medium">Rasheed Mohammad</p>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-slate-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-amber-500 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Location</p>
                <p className="text-white font-medium">India</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="mailto:rasheedmohammad242@gmail.com"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Send Me an Email
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-400">
            © 2024 Rasheed Mohammad. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
