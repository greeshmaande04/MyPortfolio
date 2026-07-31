import { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:greeshmaande04@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const contactItems = [
    { icon: Mail, label: 'Email', value: 'greeshmaande04@gmail.com', href: 'mailto:greeshmaande04@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9391368605', href: 'tel:+919391368605' },
    { icon: Linkedin, label: 'LinkedIn', value: 'greeshma-ande', href: 'https://linkedin.com/in/greeshma-ande' },
    { icon: MapPin, label: 'Location', value: 'Hyderabad, India', href: '#' },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-grid">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#1e4d8c]" />
            <span className="text-[#64b5f6] text-sm font-medium tracking-widest uppercase">Contact</span>
            <div className="h-px w-12 bg-[#1e4d8c]" />
          </div>
          <h2 className="section-title text-4xl md:text-5xl font-bold text-white mb-2">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="section-line w-24 mx-auto mt-4" />
          <p className="text-[#8892b0] mt-6 max-w-xl mx-auto">
            Open to opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: contact info */}
          <div className="reveal-left space-y-4">
            {contactItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="card-glow bg-[#0a1628]/80 rounded-2xl p-5 flex items-center gap-4 backdrop-blur-sm group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1e4d8c] to-[#0a2952] flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <Icon size={20} className="text-[#64b5f6]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[#8892b0] text-xs uppercase tracking-wide">{item.label}</div>
                    <div className="text-white text-sm font-medium truncate group-hover:text-[#64b5f6] transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            className="reveal-right bg-[#0a1628]/80 border border-[#1e4d8c]/30 rounded-2xl p-6 backdrop-blur-sm space-y-5"
          >
            <div>
              <label className="block text-[#8892b0] text-sm mb-2">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full bg-[#020c1b] border border-[#1e4d8c]/30 rounded-lg px-4 py-3 text-white text-sm focus:border-[#64b5f6] focus:outline-none focus:ring-1 focus:ring-[#64b5f6] transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-[#8892b0] text-sm mb-2">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full bg-[#020c1b] border border-[#1e4d8c]/30 rounded-lg px-4 py-3 text-white text-sm focus:border-[#64b5f6] focus:outline-none focus:ring-1 focus:ring-[#64b5f6] transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-[#8892b0] text-sm mb-2">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full bg-[#020c1b] border border-[#1e4d8c]/30 rounded-lg px-4 py-3 text-white text-sm focus:border-[#64b5f6] focus:outline-none focus:ring-1 focus:ring-[#64b5f6] transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#1e4d8c] hover:bg-[#2563b0] text-white font-medium py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#1e4d8c]/40"
            >
              {sent ? (
                <>
                  <CheckCircle2 size={18} /> Opening your email...
                </>
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
