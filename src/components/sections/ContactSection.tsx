import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { personalInfo } from '../../data/portfolioData';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Instagram, 
  Phone, 
  Send, 
  Copy, 
  Check, 
  Eye, 
  EyeOff, 
  AlertCircle
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [showPhone, setShowPhone] = useState(personalInfo.showPhoneByDefault);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const preferredEmail = personalInfo.preferredPublicEmail === 'primary' 
    ? personalInfo.primaryEmail 
    : personalInfo.secondaryEmail;

  const handleCopy = (text: string, type: 'primary' | 'secondary' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(type);
      setTimeout(() => setCopiedEmail(null), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error');
      setErrorMessage('Please fill out all fields before submitting.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setFormStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    // Launch mailto fallback so user's message is directly addressed to Ayush
    const subject = encodeURIComponent(`Collaboration Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Ayush,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    window.location.href = `mailto:${preferredEmail}?subject=${subject}&body=${body}`;

    setFormStatus('success');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-arc-navy/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          chapter="FINAL CHAPTER / OPEN TO CONNECTIONS"
          kanji="結"
          title="START THE NEXT COLLABORATION"
          subtitle="Every great story begins with a single connection. Have a project, an AI idea, or an opportunity to explore? Let's connect."
          badgeColor="cyan"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-10">
          
          {/* Left Column: Direct Contact & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-7 rounded-2xl glass-panel border border-arc-border space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-arc-cyan animate-pulse" />
                <h3 className="text-lg font-display font-bold text-white tracking-wide">
                  DIRECT TRANSMISSION CHANNELS
                </h3>
              </div>

              {/* Primary Email */}
              <div className="p-4 rounded-xl bg-arc-deep/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-arc-cyan font-bold flex items-center gap-1.5">
                    <Mail className="w-4 h-4" /> PRIMARY CONTACT
                  </span>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/20">
                    PREFERRED
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${personalInfo.primaryEmail}`}
                    className="text-sm font-mono text-white hover:text-arc-cyan truncate transition-colors"
                  >
                    {personalInfo.primaryEmail}
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(personalInfo.primaryEmail, 'primary')}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
                    title="Copy primary email"
                    aria-label="Copy primary email"
                  >
                    {copiedEmail === 'primary' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Secondary Email */}
              <div className="p-4 rounded-xl bg-arc-deep/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Mail className="w-4 h-4" /> SECONDARY CONTACT
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${personalInfo.secondaryEmail}`}
                    className="text-sm font-mono text-slate-300 hover:text-arc-cyan truncate transition-colors"
                  >
                    {personalInfo.secondaryEmail}
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(personalInfo.secondaryEmail, 'secondary')}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
                    title="Copy secondary email"
                    aria-label="Copy secondary email"
                  >
                    {copiedEmail === 'secondary' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone (Configurable & Hidden by default) */}
              <div className="p-4 rounded-xl bg-arc-deep/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-arc-ember" /> TELEPHONE
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowPhone(!showPhone)}
                    className="text-[10px] text-arc-cyan hover:underline flex items-center gap-1"
                  >
                    {showPhone ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                    {showPhone ? 'HIDE' : 'REVEAL NUMBER'}
                  </button>
                </div>
                {showPhone ? (
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm font-mono text-white hover:text-arc-ember transition-colors"
                    >
                      +91 {personalInfo.phone}
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy(personalInfo.phone, 'phone')}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
                      title="Copy phone number"
                      aria-label="Copy phone number"
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                ) : (
                  <div className="text-xs font-mono text-slate-500 italic">
                    Protected by default · Click 'Reveal Number' to view & copy
                  </div>
                )}
              </div>

            </div>

            {/* Verified Social Channels */}
            <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
                VERIFIED SOCIAL ARCHIVES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-arc-void/90 border border-slate-800 hover:border-sky-500/50 hover:bg-arc-panel text-slate-300 hover:text-white flex flex-col items-center justify-center gap-1 text-center transition-all group"
                  aria-label="Ayush's LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-mono font-medium">LinkedIn</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-arc-void/90 border border-slate-800 hover:border-slate-600 hover:bg-arc-panel text-slate-300 hover:text-white flex flex-col items-center justify-center gap-1 text-center transition-all group"
                  aria-label="Ayush's GitHub Profile"
                >
                  <Github className="w-5 h-5 text-slate-200 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-mono font-medium">GitHub</span>
                </a>

                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-arc-void/90 border border-slate-800 hover:border-rose-500/50 hover:bg-arc-panel text-slate-300 hover:text-white flex flex-col items-center justify-center gap-1 text-center transition-all group"
                  aria-label="Ayush's Instagram Profile"
                >
                  <Instagram className="w-5 h-5 text-rose-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-mono font-medium">Instagram</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form with Validation & Mailto Fallback */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl glass-panel-glow border border-arc-border-active relative overflow-hidden">
              <div className="space-y-2 mb-6">
                <span className="text-xs font-mono text-arc-cyan uppercase tracking-widest block">
                  SEND DISPATCH
                </span>
                <h3 className="text-2xl font-display font-extrabold text-white">
                  Drop a Transmission
                </h3>
                <p className="text-xs text-slate-400">
                  Submitting prepares a pre-filled dispatch directly delivered to Ayush's inbox.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Your Name / Organization
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Satoshi Nakamoto or Tanjiro Kamado"
                    className="w-full px-4 py-3 rounded-xl bg-arc-deep/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-arc-cyan focus:ring-1 focus:ring-arc-cyan text-sm font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Your Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full px-4 py-3 rounded-xl bg-arc-deep/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-arc-cyan focus:ring-1 focus:ring-arc-cyan text-sm font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Mission Brief / Collaboration Note
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, ideas, or questions..."
                    className="w-full px-4 py-3 rounded-xl bg-arc-deep/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-arc-cyan focus:ring-1 focus:ring-arc-cyan text-sm font-sans resize-none"
                  />
                </div>

                {/* Status Notifications */}
                {formStatus === 'error' && (
                  <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-500/40 text-xs font-mono text-rose-300 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {formStatus === 'success' && (
                  <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-xs font-mono text-emerald-300 flex items-center gap-2">
                    <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>Dispatch formatted! Opening your default mail client to transmit...</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-arc-cyan via-arc-water-light to-arc-ember text-slate-950 font-display font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT MESSAGE</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
