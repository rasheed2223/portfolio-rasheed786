import { Code, Database, Server, Cpu } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React.js'],
      color: 'from-blue-600 to-cyan-500',
    },
    {
      icon: Server,
      title: 'Backend',
      skills: ['Express', 'Node.js'],
      color: 'from-emerald-600 to-teal-500',
    },
    {
      icon: Database,
      title: 'Database',
      skills: ['SQLite', 'PostgreSQL'],
      color: 'from-orange-600 to-amber-500',
    },
    {
      icon: Cpu,
      title: 'Other',
      skills: ['DSA', 'Python'],
      color: 'from-violet-600 to-purple-500',
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Technical Skills
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4 shadow-lg`}>
                <category.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">{category.title}</h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
