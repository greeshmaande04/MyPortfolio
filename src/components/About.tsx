import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 bg-grid">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#1e4d8c]" />
            <span className="text-[#64b5f6] text-sm font-medium tracking-widest uppercase">About Me</span>
            <div className="h-px w-12 bg-[#1e4d8c]" />
          </div>
          <h2 className="section-title text-4xl md:text-5xl font-bold text-white mb-2">
            Professional <span className="gradient-text">Summary</span>
          </h2>
          <div className="section-line w-24 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: avatar / decorative */}
          <div className="reveal-left flex justify-center">
            <div className="relative">
              {/* Outer ring */}
              <div className="w-64 h-64 rounded-full border-2 border-[#1e4d8c]/40 flex items-center justify-center">
                {/* Inner ring */}
                <div className="w-52 h-52 rounded-full border border-[#64b5f6]/20 bg-[#0a1628] flex items-center justify-center">
                  {/* Avatar placeholder */}
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#1e4d8c] to-[#0a2952] flex items-center justify-center">
                    <User size={60} className="text-[#64b5f6]" />
                  </div>
                </div>
              </div>
              {/* Pulse rings */}
              <div className="absolute inset-0 rounded-full border border-[#1e4d8c]/20 animate-ping" style={{ animationDuration: '3s' }} />
              {/* Floating badges */}
              <div className="absolute -bottom-4 -right-4 bg-[#0a1628] border border-[#1e4d8c]/40 rounded-xl px-3 py-2 text-xs text-[#64b5f6] font-medium shadow-lg">
                ECE Graduate
              </div>
              <div className="absolute -top-4 -left-4 bg-[#0a1628] border border-[#1e4d8c]/40 rounded-xl px-3 py-2 text-xs text-[#64b5f6] font-medium shadow-lg">
                Frontend Dev
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="reveal-right space-y-6">
            <p className="text-[#8892b0] text-lg leading-relaxed">
              Motivated and detail-oriented{' '}
              <span className="text-[#64b5f6] font-medium">Electronics and Communication Engineering</span>{' '}
              graduate with a strong foundation in HTML5, CSS3, JavaScript, and Git.
            </p>
            <p className="text-[#8892b0] leading-relaxed">
              Passionate about building responsive, user-friendly web applications and
              creating engaging digital experiences. Strong analytical, problem-solving,
              and teamwork skills with a commitment to continuous learning and delivering
              high-quality frontend solutions.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { label: 'B.Tech CGPA', value: '76%' },
                { label: 'Intermediate', value: '95%' },
                { label: 'SSC', value: '100%' },
                { label: 'Internships', value: '2+' },
              ].map(stat => (
                <div
                  key={stat.label}
                  className="bg-[#0a1628]/60 border border-[#1e4d8c]/30 rounded-xl p-4 card-glow"
                >
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-[#8892b0] text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
