import { useEffect } from 'react';
import { Code2, GitBranch, Wrench, Heart } from 'lucide-react';

const skillGroups = [
  {
    label: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'React.js', level: 80 },
      { name: 'JavaScript', level: 80 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'CSS Grid', level: 85 },
      { name: 'Flexbox', level: 85 },
      { name: 'Bootstrap', level: 80 },
      { name: 'Responsive Design', level: 85 },
      { name: 'DOM Manipulation', level: 80 },
    ],
  },
  {
    label: 'React',
    icon: Code2,
    skills: [
      { name: 'Functional Components', level: 85 },
      { name: 'useState Hook', level: 85 },
      { name: 'Props', level: 85 },
      { name: 'Reusable Components', level: 80 },
    ],
  },
  {
    label: 'Backend',
    icon: Wrench,
    skills: [
      { name: 'Python', level: 75 },
      { name: 'Django', level: 65 },
      { name: 'REST APIs', level: 70 },
      { name: 'SQL', level: 70 },
      { name: 'DBMS', level: 70 },
      { name: 'OOP', level: 70 },
    ],
  },
  {
    label: 'APIs and Web',
    icon: Code2,
    skills: [
      { name: 'Fetch API', level: 80 },
      { name: 'Async/Await', level: 75 },
      { name: 'JSON', level: 85 },
      { name: 'HTTP/HTTPS', level: 75 },
      { name: 'REST API Integration', level: 75 },
    ],
  },
  {
    label: 'Tools',
    icon: GitBranch,
    skills: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 85 },
      { name: 'Version Control', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Vercel', level: 80 },
      { name: 'NPM', level: 80 },
      { name: 'PIP', level: 75 },
      { name: 'MS Excel', level: 75 },
    ],
  },
  {
    label: 'Soft Skills',
    icon: Heart,
    skills: [
      { name: 'Problem Solving', level: 90 },
      { name: 'Communication', level: 85 },
      { name: 'Teamwork', level: 90 },
      { name: 'Adaptability', level: 85 },
    ],
  },
];

const techTags = [
  'React.js',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Bootstrap',
  'Python',
  'Django',
  'SQL',
  'Git',
  'GitHub',
  'VS Code',
  'Vercel',
];

export default function Skills() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const bars =
              e.target.querySelectorAll<HTMLElement>('.skill-bar-fill');

            bars.forEach(bar => {
              bar.style.width = bar.dataset.level + '%';
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('skills');

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 px-6 bg-grid">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#1e4d8c]" />

            <span className="text-[#64b5f6] text-sm font-medium tracking-widest uppercase">
              Skills
            </span>

            <div className="h-px w-12 bg-[#1e4d8c]" />
          </div>

          <h2 className="section-title text-4xl md:text-5xl font-bold text-white mb-2">
            Technical <span className="gradient-text">Expertise</span>
          </h2>

          <div className="section-line w-24 mx-auto mt-4" />
        </div>

        {/* Skill Groups */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">

          {skillGroups.map((group, gi) => {
            const Icon = group.icon;

            return (
              <div
                key={gi}
                className="reveal card-glow bg-[#0a1628]/80 rounded-2xl p-6 backdrop-blur-sm"
                style={{
                  transitionDelay: `${gi * 100}ms`,
                }}
              >

                {/* Group Title */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-[#1e4d8c]/30 flex items-center justify-center">
                    <Icon
                      size={16}
                      className="text-[#64b5f6]"
                    />
                  </div>

                  <h3 className="text-white font-semibold">
                    {group.label}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-4">

                  {group.skills.map(skill => (
                    <div key={skill.name}>

                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-[#8892b0] text-sm">
                          {skill.name}
                        </span>

                        <span className="text-[#64b5f6] text-sm font-medium">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="h-1.5 bg-[#1e4d8c]/20 rounded-full overflow-hidden">
                        <div
                          className="skill-bar-fill"
                          data-level={skill.level}
                        />
                      </div>

                    </div>
                  ))}

                </div>
              </div>
            );
          })}

        </div>

        {/* Technologies & Tools */}
        <div className="reveal text-center">

          <p className="text-[#8892b0] text-sm mb-5 tracking-wide">
            Technologies & Tools
          </p>

          <div className="flex flex-wrap justify-center gap-3">

            {techTags.map(tag => (
              <span
                key={tag}
                className="px-4 py-2 rounded-lg bg-[#0a1628]/80 border border-[#1e4d8c]/30 text-[#8892b0] text-sm"
              >
                {tag}
              </span>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}