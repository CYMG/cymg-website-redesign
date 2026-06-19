import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="max-w-[600px] mx-auto border border-line p-6 md:p-8 text-center my-16 md:my-24 bg-surface">
      <h3 className="text-xl font-semibold text-ink mb-2">Stay informed</h3>
      <p className="text-sm text-[var(--ink-60)] mb-6">
        Receive updates on consultations, events, and opportunities.
      </p>
      {submitted ? (
        <div className="flex items-center justify-center gap-2 py-3 text-[var(--canopy-green)]">
          <Check size={18} />
          <span className="text-sm font-medium">Thanks for subscribing.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Mail
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--ink-60)]"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full pl-9 pr-4 py-2.5 text-sm outline-none border border-line bg-paper focus:border-[var(--assembly-blue)]"
              style={{ color: 'var(--ink)' }}
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 text-sm font-medium text-white bg-[var(--assembly-blue)] hover:bg-[var(--assembly-blue-deep)] transition-colors"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
