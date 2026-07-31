import { Heart, ArrowUp, Mail, Phone, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#010810] border-t border-[#1e4d8c]/20 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-bold section-title mb-3">
              Greeshma<span className="text-[#64b5f6]"> Ande</span>
            </h3>
            <p className="text-[#8892b0] text-sm leading-relaxed max-w-xs">
              ECE graduate and frontend developer passionate about building elegant,
              responsive web experiences.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Education', 'Skills', 'Projects', 'Contact'].map(l => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-[#8892b0] hover:text-[#64b5f6] text-sm transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Get in Touch</h4>
            <div className="space-y-2">
              <a href="mailto:greeshmaande04@gmail.com" className="flex items-center gap-2 text-[#8892b0] hover:text-[#64b5f6] text-sm transition-colors">
                <Mail size={14} /> greeshmaande04@gmail.com
              </a>
              <a href="tel:+919391368605" className="flex items-center gap-2 text-[#8892b0] hover:text-[#64b5f6] text-sm transition-colors">
                <Phone size={14} /> +91 9391368605
              </a>
              <a href="https://linkedin.com/in/greeshma-ande" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#8892b0] hover:text-[#64b5f6] text-sm transition-colors">
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[#1e4d8c]/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#8892b0] text-xs flex items-center gap-1.5">
            Made with <Heart size={12} className="text-[#64b5f6] fill-[#64b5f6]" /> by Greeshma Ande
          </p>
          <a
            href="#hero"
            className="flex items-center gap-2 text-[#8892b0] hover:text-[#64b5f6] text-xs transition-colors group"
          >
            Back to top
            <span className="w-8 h-8 rounded-full border border-[#1e4d8c]/40 flex items-center justify-center group-hover:border-[#64b5f6] group-hover:-translate-y-0.5 transition-all">
              <ArrowUp size={14} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
