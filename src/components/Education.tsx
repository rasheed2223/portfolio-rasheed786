import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'B.Tech. (CSE-AIML)',
      grade: '6.79 CGPA',
      institution: 'Holy Mary Institute Of Technology and Science',
      period: '2020 – 2024',
    },
    {
      degree: 'Intermediate (Class 12)',
      grade: '95%',
      institution: 'Sri Gayatri Group of Institutions',
      period: '2018 – 2020',
    },
    {
      degree: 'SSC',
      grade: '8.3 CGPA',
      institution: 'Pragati Vidya Nilayam',
      period: '2018',
    },
  ];

  return (
    <section id="education" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Education
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-12"></div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <div className="hidden md:block">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900">{edu.degree}</h3>
                      <p className="text-blue-600 font-semibold text-lg mt-1">{edu.grade}</p>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{edu.period}</span>
                    </div>
                  </div>
                  <p className="text-slate-700">{edu.institution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
