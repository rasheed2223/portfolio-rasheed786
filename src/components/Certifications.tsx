import { Award, Trophy } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    'Machine Learning Pipelines with Azure ML Studio',
    'Certification of Completion - Token Service Technology Virtual Experience Program',
    'Web Development',
  ];

  const achievements = [
    'Successfully completed the "Programming Foundations with Python" course',
    'Certificate of Achievement for completing a course on Responsive Web Design utilizing Flexbox',
    'Completed the "XPM 4.0 Fundamentals for achieving an Exponential Performance Mind-Set" course',
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Certifications & Achievements
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Certifications</h3>
            </div>

            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <p className="text-slate-700 leading-relaxed">{cert}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-lg flex items-center justify-center shadow-lg">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Achievements</h3>
            </div>

            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-emerald-600 font-bold mt-1">•</span>
                  <p className="text-slate-700 leading-relaxed">{achievement}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
