import {
  Github,
  ExternalLink,
  FolderGit2,
  Users,
  GraduationCap,
} from 'lucide-react';

const projects = [
  {
    title: 'Personal Portfolio Website',
    type: 'Frontend Project',
    icon: FolderGit2,
    description:
      'Designed and developed a responsive personal portfolio website to showcase my skills, projects, internships, education, and professional profile.',
    tags: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
    highlights: [
      'Responsive portfolio design',
      'Reusable React components',
      'Interactive navigation',
    ],
  },

  {
    title: 'Employee Directory',
    type: 'React.js Project',
    icon: Users,
    description:
      'Developed an employee directory application to manage and display employee information through a simple and user-friendly interface.',
    tags: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
    highlights: [
      'Employee data management',
      'React state management',
      'Interactive employee interface',
    ],
  },

  {
    title: 'Student Database Management System',
    type: 'Python & SQL Project',
    icon: GraduationCap,
    description:
      'Developed a database-driven application for efficient student record management using Python and SQL.',
    tags: ['Python', 'SQL'],
    highlights: [
      'Student record management',
      'CRUD operations',
      'Data insertion and retrieval',
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-grid">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#1e4d8c]" />

            <span className="text-[#64b5f6] text-sm font-medium tracking-widest uppercase">
              Projects
            </span>

            <div className="h-px w-12 bg-[#1e4d8c]" />
          </div>

          <h2 className="section-title text-4xl md:text-5xl font-bold text-white mb-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="section-line w-24 mx-auto mt-4" />
        </div>


        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {projects.map((p, idx) => {
            const Icon = p.icon;

            return (
              <div
                key={idx}
                className="reveal card-glow bg-[#0a1628]/80 rounded-2xl p-7 backdrop-blur-sm group"
                style={{
                  transitionDelay: `${idx * 150}ms`,
                }}
              >

                {/* Icon & Links */}
                <div className="flex items-start justify-between mb-5">

                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1e4d8c] to-[#0a2952] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon
                      size={22}
                      className="text-[#64b5f6]"
                    />
                  </div>

                  <div className="flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity">

                    <span className="w-8 h-8 rounded-lg border border-[#1e4d8c]/40 flex items-center justify-center text-[#8892b0] hover:text-[#64b5f6] hover:border-[#64b5f6] transition-colors cursor-pointer">
                      <Github size={15} />
                    </span>

                    <span className="w-8 h-8 rounded-lg border border-[#1e4d8c]/40 flex items-center justify-center text-[#8892b0] hover:text-[#64b5f6] hover:border-[#64b5f6] transition-colors cursor-pointer">
                      <ExternalLink size={15} />
                    </span>

                  </div>
                </div>


                {/* Project Type */}
                <div className="text-xs text-[#64b5f6] font-medium tracking-wide uppercase mb-2">
                  {p.type}
                </div>


                {/* Project Title */}
                <h3 className="text-white font-bold text-xl mb-3">
                  {p.title}
                </h3>


                {/* Description */}
                <p className="text-[#8892b0] text-sm leading-relaxed mb-5">
                  {p.description}
                </p>


                {/* Highlights */}
                <div className="space-y-1.5 mb-5">

                  {p.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-[#8892b0] text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#64b5f6]" />
                      {h}
                    </div>
                  ))}

                </div>


                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1e4d8c]/20">

                  {p.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[#1e4d8c]/20 text-[#64b5f6] text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}