import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Linkedin, Facebook } from 'lucide-react';

const footerColumns = [
  {
    title: 'About',
    links: [
      { label: 'About CYMG', href: '/about' },
      { label: 'History \u0026 Mandate', href: '/about/history-mandate' },
      { label: 'Governance', href: '/governance' },
    ],
  },
  {
    title: 'Thematic Areas',
    links: [
      { label: 'Working Groups', href: '/working-groups' },
      { label: 'Chemicals \u0026 Waste', href: '/working-groups/chemicals-waste-pollution' },
      { label: 'Nature \u0026 Ecosystems', href: '/working-groups/nature-ecosystems' },
      { label: 'Ocean Science', href: '/working-groups/ocean-science-governance' },
    ],
  },
  {
    title: 'UNEA',
    links: [
      { label: 'UNEA Hub', href: '/unea-and-core-processes' },
      { label: 'YEA 2025', href: '/unea-and-core-processes' },
      { label: 'UNEA-7 Consultations', href: '/unea-and-core-processes' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Join CYMG', href: '/join' },
      { label: 'Contact', href: '/contact' },
      { label: 'Policies \u0026 Safeguarding', href: '/about/policies-and-safeguarding' },
    ],
  },
];

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/cymgunep' },
  { icon: Twitter, label: 'X/Twitter', href: 'https://twitter.com/cymgunep' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@cymgunep' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/cymgunep' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/cymgunep' },
];

export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{ backgroundColor: 'var(--ink)', color: 'var(--paper)' }}
    >
      <div className="max-w-[1320px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <h3 className="font-display text-xl font-bold mb-3">CYMG</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--ink-60)', opacity: 0.8 }}>
              The official UN-recognized children and youth constituency engaging with UNEP, UNEA, and Multilateral Environmental Agreements.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition-opacity hover:opacity-70"
                  style={{ color: 'var(--paper)' }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4
                className="text-mono-label font-medium mb-4"
                style={{ color: 'var(--ink-60)', opacity: 0.7 }}
              >
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm transition-opacity hover:opacity-70"
                      style={{ color: 'var(--paper)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'var(--ink-60)', opacity: 0.3 }}
        >
          <p className="text-mono-sm" style={{ opacity: 0.6 }}>
            All rights reserved &copy; {new Date().getFullYear()} Children and Youth Major Group to UNEP.
          </p>
          <p className="text-mono-sm" style={{ opacity: 0.5 }}>
            Youth Leading Environmental Action.
          </p>
        </div>
      </div>
    </footer>
  );
}
