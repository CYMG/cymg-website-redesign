import { useState } from 'react';
import { Lock, Shield, Clock, CheckCircle, ExternalLink } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function PoliciesSafeguarding() {
  const [anonymous, setAnonymous] = useState(false);

  return (
    <div style={{ backgroundColor: 'var(--paper)' }}>
      <div className="pt-24 pb-16 px-6" style={{ backgroundColor: '#15257A' }}>
        <div className="max-w-[1320px] mx-auto">
          <Breadcrumbs items={[{ label: 'About', href: '/about' }, { label: 'Policies & Safeguarding' }]} />
          <div className="flex items-center gap-3 mt-4">
            <Lock size={24} style={{ color: 'var(--signal-lime)' }} />
            <h1 className="text-h1 font-display font-bold" style={{ color: 'var(--paper)' }}>
              Policies &amp; Safeguarding
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 py-16 md:py-24">
        {/* Commitment */}
        <div className="mb-16">
          <h2 className="text-h2 font-display mb-4" style={{ color: 'var(--ink)' }}>
            Our Commitment
          </h2>
          <p className="text-body-lg max-w-[65ch]" style={{ color: 'var(--ink)' }}>
            CYMG is committed to providing a safe, respectful, and inclusive environment for all
            members, volunteers, and participants. We have zero tolerance for discrimination,
            harassment, or any form of abuse. Our safeguarding policies apply to all CYMG activities,
            both online and in-person.
          </p>
        </div>

        {/* Code of Conduct */}
        <div
          className="rounded-[20px] p-8 mb-16"
          style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Shield size={20} style={{ color: 'var(--canopy-green)' }} />
            <h3 className="text-h3 font-display" style={{ color: 'var(--ink)' }}>
              Code of Conduct
            </h3>
          </div>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--ink-60)' }}>
            All CYMG members, volunteers, and participants are expected to adhere to our Code of
            Conduct, which outlines expected behavior, reporting mechanisms, and consequences for
            violations. The Code covers all CYMG activities including meetings, events, online
            communications, and social media interactions.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: 'var(--assembly-blue)' }}
          >
            View Code of Conduct <ExternalLink size={14} />
          </a>
        </div>

        {/* Report Form */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Lock size={20} style={{ color: 'var(--assembly-blue)' }} />
            <h2 className="text-h2 font-display" style={{ color: 'var(--ink)' }}>
              Report an Incident
            </h2>
          </div>
          <div
            className="rounded-[20px] p-8"
            style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
          >
            <p className="text-sm mb-6" style={{ color: 'var(--ink-60)' }}>
              If you have experienced or witnessed behavior that violates our Code of Conduct, you
              can report it confidentially using the form below. You may choose to remain anonymous.
            </p>

            <form className="flex flex-col gap-5">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={anonymous}
                  onChange={(e) => setAnonymous(e.target.checked)}
                  className="w-5 h-5 rounded accent-blue-600"
                />
                <span className="text-sm" style={{ color: 'var(--ink)' }}>
                  I prefer to remain anonymous
                </span>
              </label>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--ink)' }}>
                  What happened? <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2 resize-none"
                  style={{
                    backgroundColor: 'var(--paper)',
                    border: '1px solid var(--line)',
                    color: 'var(--ink)',
                  }}
                  placeholder="Please describe the incident in as much detail as you are comfortable sharing..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--ink)' }}>
                    When did this occur?
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2"
                    style={{
                      backgroundColor: 'var(--paper)',
                      border: '1px solid var(--line)',
                      color: 'var(--ink)',
                    }}
                    placeholder="Date or approximate timeframe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--ink)' }}>
                    Where did this occur?
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2"
                    style={{
                      backgroundColor: 'var(--paper)',
                      border: '1px solid var(--line)',
                      color: 'var(--ink)',
                    }}
                    placeholder="Event name, location, or online platform"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--ink)' }}>
                  Who was involved? (optional)
                </label>
                <textarea
                  rows={2}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2 resize-none"
                  style={{
                    backgroundColor: 'var(--paper)',
                    border: '1px solid var(--line)',
                    color: 'var(--ink)',
                  }}
                  placeholder="Names, roles, or descriptions of individuals involved..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3" style={{ color: 'var(--ink)' }}>
                  Urgency level
                </label>
                <div className="flex flex-col gap-2">
                  {[
                    { value: 'immediate', label: 'I need immediate help' },
                    { value: 'serious', label: 'This is serious but not urgent' },
                    { value: 'document', label: 'I want to document this' },
                  ].map((option) => (
                    <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="urgency"
                        value={option.value}
                        className="w-4 h-4 accent-blue-600"
                      />
                      <span className="text-sm" style={{ color: 'var(--ink)' }}>
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {!anonymous && (
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--ink)' }}>
                    Your contact info (optional)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2"
                    style={{
                      backgroundColor: 'var(--paper)',
                      border: '1px solid var(--line)',
                      color: 'var(--ink)',
                    }}
                    placeholder="Email or other contact method for follow-up"
                  />
                </div>
              )}

              <button
                type="submit"
                className="btn-pill self-start"
                style={{ backgroundColor: 'var(--assembly-blue)', color: 'var(--paper)' }}
              >
                Submit Report
              </button>
            </form>

            <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--line)' }}>
              <p className="text-sm" style={{ color: 'var(--ink-60)' }}>
                If you prefer to use our external form:{' '}
                <a
                  href="#"
                  className="inline-flex items-center gap-1 font-medium"
                  style={{ color: 'var(--assembly-blue)' }}
                >
                  Google Form <ExternalLink size={12} />
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* What Happens Next */}
        <div>
          <h2 className="text-h2 font-display mb-6" style={{ color: 'var(--ink)' }}>
            What Happens Next
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Lock, title: 'Confidential Receipt', desc: 'Your report is received by our safeguarding team within 24 hours and stored securely.' },
              { icon: Clock, title: 'Assessment', desc: 'The team assesses the report, determines appropriate action, and contacts you if you provided details.' },
              { icon: CheckCircle, title: 'Resolution', desc: 'Appropriate measures are taken, which may include mediation, policy review, or disciplinary action.' },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-[20px] p-6"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
              >
                <step.icon size={24} className="mb-4" style={{ color: 'var(--assembly-blue)' }} />
                <h3 className="font-display text-lg font-medium mb-2" style={{ color: 'var(--ink)' }}>
                  {step.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--ink-60)' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
