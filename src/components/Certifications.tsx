import { Award, BadgeCheck } from 'lucide-react';

const certifications = [
  {
    title: 'Technical English for Engineers',
    issuer: 'NPTEL',
    description: 'Developed technical communication skills, professional writing, and workplace language proficiency.',
    icon: BadgeCheck,
  },
  {
    title: 'Introduction to Internet of Things',
    issuer: 'NPTEL',
    description: 'Learned IoT architecture, sensor networks, communication protocols, and smart systems design.',
    icon: BadgeCheck,
  },
  {
    title: 'Developing Soft Skills and Personality',
    issuer: 'NPTEL',
    description: 'Focused on interpersonal skills, leadership, communication, and professional development.',
    icon: BadgeCheck,
  },
  {
    title: 'Python Programming',
    issuer: 'YBI Foundation',
    description: 'Gained hands-on experience in Python fundamentals, data structures, logic development, and problem solving.',
    icon: BadgeCheck,
  },
  {
    title: 'Data Science and AI/ML',
    issuer: 'YBI Foundation',
    description: 'Covered core data science methodologies, machine learning algorithms, data analysis, and predictive modeling.',
    icon: BadgeCheck,
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-[#020c1b]">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#1e4d8c]" />
            <span className="text-[#64b5f6] text-sm font-medium tracking-widest uppercase">Achievements</span>
            <div className="h-px w-12 bg-[#1e4d8c]" />
          </div>
          <h2 className="section-title text-4xl md:text-5xl font-bold text-white mb-2">
            Certifications <span className="gradient-text">& Awards</span>
          </h2>
          <div className="section-line w-24 mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="reveal card-glow bg-[#0a1628]/80 rounded-2xl p-6 backdrop-blur-sm group relative overflow-hidden"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Decorative corner glow */}
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-[#1e4d8c]/20 blur-2xl group-hover:bg-[#1e4d8c]/40 transition-colors" />

                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1e4d8c] to-[#0a2952] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={20} className="text-[#64b5f6]" />
                  </div>
                  <h3 className="text-white font-semibold text-base leading-tight mb-1">{c.title}</h3>
                  <p className="text-[#64b5f6] text-xs font-medium mb-3">{c.issuer}</p>
                  <p className="text-[#8892b0] text-xs leading-relaxed">{c.description}</p>

                  <div className="flex items-center gap-1.5 mt-4 pt-4 border-t border-[#1e4d8c]/20">
                    <Award size={12} className="text-[#64b5f6]" />
                    <span className="text-[#8892b0] text-xs">Certified</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}