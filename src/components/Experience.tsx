import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-12"></div>

        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200">
          <div className="flex items-start gap-6">
            <div className="hidden md:block">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Web Developer</h3>
                  <p className="text-xl text-blue-600 font-semibold mt-1">Zidio Development</p>
                </div>
                <div className="flex items-center gap-2 text-slate-600 bg-white px-4 py-2 rounded-lg shadow">
                  <Calendar size={18} />
                  <span className="font-medium">Jun 2024 – Sep 2024</span>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <p className="text-slate-700 leading-relaxed">
                    Successfully completed a certified Web Development internship at Zidio Development,
                    working on front-end development, responsive UI creation, and cross-browser
                    compatibility improvements.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <p className="text-slate-700 leading-relaxed">
                    Contributed to real-world projects by improving UI design, fixing bugs, and
                    enhancing overall website performance and user experience.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
