import { Github, ExternalLink, FolderGit2, Lightbulb } from 'lucide-react';

const projects = [
  {
    title: 'Image Forgery Detection',
    type: 'Academic Project',
    icon: FolderGit2,
    description: 'Detects manipulated or forged regions in digital images using ML-based analysis to support image authenticity verification.',
    tags: ['Machine Learning', 'Image Processing', 'Python'],
    highlights: ['Feature extraction', 'ML classifier', 'Tamper localization'],
  },
  {
    title: 'Vending Machine System',
    type: 'Verilog HDL Project',
    icon: Lightbulb,
    description: 'Designed a digital vending machine using Verilog HDL that dispenses products based on coin input and handles change calculation.',
    tags: ['Verilog HDL', 'Digital Design', 'FPGA'],
    highlights: ['Finite state machine', 'Coin logic', 'Change return'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-grid">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#1e4d8c]" />
            <span className="text-[#64b5f6] text-sm font-medium tracking-widest uppercase">Projects</span>
            <div className="h-px w-12 bg-[#1e4d8c]" />
          </div>
          <h2 className="section-title text-4xl md:text-5xl font-bold text-white mb-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-line w-24 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="reveal card-glow bg-[#0a1628]/80 rounded-2xl p-7 backdrop-blur-sm group"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1e4d8c] to-[#0a2952] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon size={22} className="text-[#64b5f6]" />
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

                <div className="text-xs text-[#64b5f6] font-medium tracking-wide uppercase mb-2">{p.type}</div>
                <h3 className="text-white font-bold text-xl mb-3">{p.title}</h3>
                <p className="text-[#8892b0] text-sm leading-relaxed mb-5">{p.description}</p>

                <div className="space-y-1.5 mb-5">
                  {p.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-[#8892b0] text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#64b5f6]" />
                      {h}
                    </div>
                  ))}
                </div>

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
