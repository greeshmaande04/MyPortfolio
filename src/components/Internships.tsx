import { Briefcase, Calendar, MapPin } from 'lucide-react';

const internships = [
  {
    company: 'YBI Foundation',
    role: 'Data Science and AI/ML Intern',
    period: 'October 2024',
    location: 'Remote',
    description: [
      'Worked on machine learning workflows, predictive analytics, and data preprocessing.',
      'Collaborated on real-world datasets to derive meaningful insights and support data-driven decision-making.',
      'Improved understanding of model training, evaluation, and result interpretation.',
    ],
  },
  {
    company: 'YBI Foundation',
    role: 'Python Programming Intern',
    period: 'November 2024',
    location: 'Remote',
    description: [
      'Strengthened Python fundamentals including loops, functions, and logical problem-solving.',
      'Practiced problem-solving by implementing Python solutions for real-world programming scenarios.',
      'Improved debugging and coding efficiency through practical exercises.',
    ],
  },
];

export default function Internships() {
  return (
    <section id="internships" className="py-24 px-6 bg-[#020c1b]">
      <div className="max-w-4xl mx-auto">

        {/* Section Heading */}
        <div className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#1e4d8c]" />

            <span className="text-[#64b5f6] text-sm font-medium tracking-widest uppercase">
              Experience
            </span>

            <div className="h-px w-12 bg-[#1e4d8c]" />
          </div>

          <h2 className="section-title text-4xl md:text-5xl font-bold text-white mb-2">
            Internship <span className="gradient-text">Experience</span>
          </h2>

          <div className="section-line w-24 mx-auto mt-4" />
        </div>


        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#1e4d8c] via-[#64b5f6]/50 to-transparent" />

          <div className="space-y-8">

            {internships.map((exp, idx) => (
              <div
                key={idx}
                className="reveal relative pl-16"
                style={{
                  transitionDelay: `${idx * 150}ms`,
                }}
              >

                {/* Timeline Dot */}
                <div className="absolute left-0 top-6 w-10 h-10 rounded-full bg-[#0a1628] border-2 border-[#1e4d8c] flex items-center justify-center z-10">
                  <Briefcase
                    size={16}
                    className="text-[#64b5f6]"
                  />
                </div>

                <div className="absolute left-1.5 top-7.5 w-7 h-7 rounded-full bg-[#1e4d8c]/20 blur-sm" />


                {/* Internship Card */}
                <div className="card-glow bg-[#0a1628]/80 rounded-2xl p-6 backdrop-blur-sm">

                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">

                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        {exp.company}
                      </h3>

                      <p className="text-[#64b5f6] text-sm mt-1 font-medium">
                        {exp.role}
                      </p>
                    </div>

                  </div>


                  {/* Date & Location */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-[#8892b0] text-sm">

                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {exp.period}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      {exp.location}
                    </span>

                  </div>


                  {/* Description */}
                  <ul className="space-y-2">

                    {exp.description.map((d, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-[#8892b0] text-sm leading-relaxed"
                      >

                        <span className="text-[#64b5f6] mt-1.5 w-1 h-1 rounded-full bg-[#64b5f6] shrink-0" />

                        {d}

                      </li>
                    ))}

                  </ul>

                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}