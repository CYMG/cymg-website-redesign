import { useState } from 'react';
import { Check, ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';
import { workingGroups } from '@/data/workingGroups';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

const interests = [
  'Policy advocacy',
  'Event organizing',
  'Communications',
  'Research',
  'Fundraising',
  'Community outreach',
];

export default function Join() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', organization: '', country: '', ageVerified: false,
    workingGroups: [] as string[], region: '', interests: [] as string[],
    termsAccepted: false,
  });

  const canProceed = () => {
    if (step === 1) return formData.name && formData.email && formData.country && formData.ageVerified;
    if (step === 2) return formData.workingGroups.length > 0;
    if (step === 3) return formData.termsAccepted;
    return false;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ backgroundColor: 'var(--paper)' }}>
        <div className="max-w-[1320px] mx-auto px-6 py-32 text-center">
          <CheckCircle size={64} className="mx-auto mb-6" style={{ color: 'var(--signal-lime)' }} />
          <h1 className="text-h1 font-display mb-4" style={{ color: 'var(--ink)' }}>
            Welcome to CYMG!
          </h1>
          <p className="text-body-lg max-w-[500px] mx-auto" style={{ color: 'var(--ink-60)' }}>
            Your application has been received. You will hear from us within 5 business days with next steps.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'var(--paper)' }}>
      <div className="pt-24 pb-16 px-6" style={{ backgroundColor: 'var(--signal-lime)' }}>
        <div className="max-w-[1320px] mx-auto">
          <Breadcrumbs items={[{ label: 'Join CYMG' }]} />
          <h1 className="text-h1 font-display font-bold mt-4" style={{ color: '#0B1220' }}>
            Join CYMG
          </h1>
        </div>
      </div>

      <div className="max-w-[700px] mx-auto px-6 py-16 md:py-24">
        {/* Progress */}
        <div className="flex items-center gap-2 mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all"
                style={{
                  backgroundColor: step >= s ? 'var(--assembly-blue)' : 'var(--surface)',
                  color: step >= s ? 'var(--paper)' : 'var(--ink-60)',
                  border: step >= s ? 'none' : '1px solid var(--line)',
                }}
              >
                {step > s ? <Check size={14} /> : s}
              </div>
              {s < 3 && (
                <div
                  className="flex-1 h-px"
                  style={{ backgroundColor: step > s ? 'var(--assembly-blue)' : 'var(--line)' }}
                />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1 - Basics */}
          {step === 1 && (
            <div className="flex flex-col gap-5">
              <h2 className="text-h2 font-display mb-2" style={{ color: 'var(--ink)' }}>
                Your Details
              </h2>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--ink)' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2"
                  style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)', color: 'var(--ink)' }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--ink)' }}>
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2"
                  style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)', color: 'var(--ink)' }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--ink)' }}>
                  Organization
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2"
                  style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)', color: 'var(--ink)' }}
                  placeholder="Youth organization, university, or individual"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--ink)' }}>
                  Country *
                </label>
                <input
                  type="text"
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2"
                  style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)', color: 'var(--ink)' }}
                />
              </div>
              <label className="flex items-center gap-3 cursor-pointer mt-2">
                <input
                  type="checkbox"
                  checked={formData.ageVerified}
                  onChange={(e) => setFormData({ ...formData, ageVerified: e.target.checked })}
                  className="w-5 h-5 rounded accent-blue-600"
                />
                <span className="text-sm" style={{ color: 'var(--ink)' }}>
                  I confirm I am between 15 and 35 years old *
                </span>
              </label>
            </div>
          )}

          {/* Step 2 - Interests */}
          {step === 2 && (
            <div className="flex flex-col gap-5">
              <h2 className="text-h2 font-display mb-2" style={{ color: 'var(--ink)' }}>
                Your Interests
              </h2>
              <div>
                <label className="block text-sm font-medium mb-3" style={{ color: 'var(--ink)' }}>
                  Working Groups (select at least one)
                </label>
                <div className="flex flex-wrap gap-2">
                  {workingGroups.map((wg) => {
                    const selected = formData.workingGroups.includes(wg.id);
                    return (
                      <button
                        key={wg.id}
                        type="button"
                        onClick={() => {
                          const updated = selected
                            ? formData.workingGroups.filter((id) => id !== wg.id)
                            : [...formData.workingGroups, wg.id];
                          setFormData({ ...formData, workingGroups: updated });
                        }}
                        className="px-4 py-2 rounded-full text-sm transition-all"
                        style={{
                          backgroundColor: selected ? 'var(--assembly-blue)' : 'var(--surface)',
                          color: selected ? 'var(--paper)' : 'var(--ink)',
                          border: selected ? 'none' : '1px solid var(--line)',
                        }}
                      >
                        {wg.name}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-3" style={{ color: 'var(--ink)' }}>
                  Areas of Interest
                </label>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => {
                    const selected = formData.interests.includes(interest);
                    return (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => {
                          const updated = selected
                            ? formData.interests.filter((i) => i !== interest)
                            : [...formData.interests, interest];
                          setFormData({ ...formData, interests: updated });
                        }}
                        className="px-4 py-2 rounded-full text-sm transition-all"
                        style={{
                          backgroundColor: selected ? 'var(--assembly-blue)' : 'var(--surface)',
                          color: selected ? 'var(--paper)' : 'var(--ink)',
                          border: selected ? 'none' : '1px solid var(--line)',
                        }}
                      >
                        {interest}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Step 3 - Confirm */}
          {step === 3 && (
            <div className="flex flex-col gap-5">
              <h2 className="text-h2 font-display mb-2" style={{ color: 'var(--ink)' }}>
                Confirm
              </h2>
              <div
                className="rounded-[20px] p-6"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
              >
                <h3 className="font-display font-medium mb-4" style={{ color: 'var(--ink)' }}>
                  Summary
                </h3>
                <div className="flex flex-col gap-2 text-sm">
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Country:</strong> {formData.country}</p>
                  {formData.organization && <p><strong>Organization:</strong> {formData.organization}</p>}
                  <p>
                    <strong>Working Groups:</strong>{' '}
                    {formData.workingGroups.map((id) => workingGroups.find((wg) => wg.id === id)?.name).join(', ')}
                  </p>
                  {formData.interests.length > 0 && (
                    <p><strong>Interests:</strong> {formData.interests.join(', ')}</p>
                  )}
                </div>
              </div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.termsAccepted}
                  onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                  className="w-5 h-5 rounded accent-blue-600"
                />
                <span className="text-sm" style={{ color: 'var(--ink)' }}>
                  I agree to CYMG&apos;s Terms of Engagement and Code of Conduct *
                </span>
              </label>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-2 text-sm font-medium"
                style={{ color: 'var(--ink-60)' }}
              >
                <ChevronLeft size={16} /> Back
              </button>
            ) : <div />}
            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className="btn-pill disabled:opacity-50"
                style={{ backgroundColor: 'var(--assembly-blue)', color: 'var(--paper)' }}
              >
                Next <ChevronRight size={16} />
              </button>
            ) : (
              <button
                type="submit"
                disabled={!canProceed()}
                className="btn-pill disabled:opacity-50"
                style={{ backgroundColor: 'var(--signal-lime)', color: '#0B1220' }}
              >
                Submit Application
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
