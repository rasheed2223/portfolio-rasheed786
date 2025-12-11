import { Code2, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Invoice Pro',
      subtitle: 'A Billing System',
      description: 'Invoice Pro is a web-based application designed to simplify billing and invoicing for businesses and freelancers. It allows users to create, manage, and send professional invoices, track payments, generate financial reports, and manage clients efficiently.',
      features: [
        'Multiple payment methods support',
        'Tax calculations',
        'Automated payment reminders',
        'Financial reporting',
        'Client management'
      ],
    },
    {
      title: 'Wikipedia Search Application',
      subtitle: 'Custom Search Interface',
      description: 'Developed a custom Wikipedia search application providing curated, beautifully presented results using HTML, CSS, and Bootstrap, with responsive design for all devices.',
      features: [
        'Responsive design for all devices',
        'Asynchronous fetch GET HTTP API calls',
        'Clean and intuitive user interface',
        'Open results in new tabs',
        'Real-time search functionality'
      ],
    },
    {
      title: 'Appointment Management System',
      subtitle: 'Built with React.js',
      description: 'Developed an Appointment Management System that enables users to schedule, update, and manage appointments efficiently, improving time management and operational workflow.',
      features: [
        'Schedule and manage appointments',
        'Update and cancel bookings',
        'Time slot management',
        'User-friendly interface',
        'Real-time availability tracking'
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-slate-200"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                  <Code2 className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-4">{project.subtitle}</p>

                <p className="text-slate-700 mb-4 leading-relaxed">{project.description}</p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-900 mb-2">Key Features:</p>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-slate-600">
                        <span className="text-blue-600">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
