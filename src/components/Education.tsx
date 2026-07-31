import { GraduationCap, Calendar, Award } from 'lucide-react';

const education = [
  {
    institution: 'Malla Reddy College of Engineering for Women',
    degree: 'B.Tech in Electronics and Communication Engineering',
    period: '2022 – 2026',
    score: '76%',
    scoreLabel: 'CGPA',
  },
  {
    institution: 'SR Junior College, Nizamabad',
    degree: 'Intermediate (MPC)',
    period: '2020 – 2022',
    score: '95%',
    scoreLabel: 'Score',
  },
  {
    institution: 'Sri Sai Vidyalayam, Nizamabad',
    degree: 'SSC (10th Grade)',
    period: '2019 – 2020',
    score: '100%',
    scoreLabel: 'Score',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-[#020c1b]">
      <div className="max-w-4xl mx-auto">
        <div className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#1e4d8c]" />
            <span className="text-[#64b5f6] text-sm font-medium tracking-widest uppercase">Education</span>
            <div className="h-px w-12 bg-[#1e4d8c]" />
          </div>
          <h2 className="section-title text-4xl md:text-5xl font-bold text-white mb-2">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <div className="section-line w-24 mx-auto mt-4" />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#1e4d8c] via-[#64b5f6]/50 to-transparent" />

          <div className="space-y-8">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="reveal relative pl-16"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 w-10 h-10 rounded-full bg-[#0a1628] border-2 border-[#1e4d8c] flex items-center justify-center z-10">
                  <GraduationCap size={16} className="text-[#64b5f6]" />
                </div>
                {/* Glow behind dot */}
                <div className="absolute left-1.5 top-7.5 w-7 h-7 rounded-full bg-[#1e4d8c]/20 blur-sm" />

                <div className="card-glow bg-[#0a1628]/80 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg leading-tight">{edu.institution}</h3>
                      <p className="text-[#64b5f6] text-sm mt-1 font-medium">{edu.degree}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-2xl font-bold gradient-text">{edu.score}</div>
                      <div className="text-[#8892b0] text-xs">{edu.scoreLabel}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-3 text-[#8892b0] text-sm">
                    <Calendar size={13} />
                    <span>{edu.period}</span>
                  </div>
                  {edu.score === '100%' && (
                    <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-[#1e4d8c]/20 border border-[#1e4d8c]/40 text-[#64b5f6] text-xs">
                      <Award size={11} />
                      Perfect Score
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
