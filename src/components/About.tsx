import { User, Lightbulb, Clock, Zap } from 'lucide-react';

export default function About() {
  const personalSkills = [
    { icon: User, text: 'Leadership Qualities' },
    { icon: Zap, text: 'Work Under Pressure' },
    { icon: Clock, text: 'Time Management' },
    { icon: Lightbulb, text: 'Problem-Solving Initiative' },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-12"></div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed text-center">
            Proactive Software developer with proven internship experience in delivering responsive,
            user-friendly web applications. Strong foundation in modern frontend technologies combined
            with problem-solving and time management skills to drive effective solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <skill.icon className="w-12 h-12 text-blue-600 mb-4" />
              <p className="text-slate-800 font-medium">{skill.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
