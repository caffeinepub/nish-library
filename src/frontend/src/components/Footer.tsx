import { BookOpen, ExternalLink, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "E-Resources", href: "#eresources" },
  { label: "Services", href: "#services" },
  { label: "Journals", href: "#journals" },
  { label: "Open Access", href: "#openaccess" },
  { label: "Sign Language", href: "#signlanguage" },
];

const usefulLinks = [
  { label: "OPAC Catalog", href: "https://nish.easylib.net/", external: true },
  {
    label: "Plagiarism Check",
    href: "https://forms.gle/wCZAzr8jbr1TjGtF6",
    external: true,
  },
  {
    label: "SLP Resources",
    href: "https://drive.google.com/drive/folders/1gcVQzMg8f2MGRyGrJC1s9vP0IqQmP2Zg",
    external: true,
  },
  {
    label: "Audiology Resources",
    href: "https://drive.google.com/drive/folders/1ztmMX3wWXhzBmZX26tgc9vvYZGDLLSYm",
    external: true,
  },
  {
    label: "NISH Official Website",
    href: "https://www.nish.ac.in/",
    external: true,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "nish-library";

  return (
    <footer
      id="contact"
      className="bg-navy text-white"
      style={{ borderTop: "1px solid oklch(0.38 0.08 260 / 0.5)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-gold flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-navy" />
              </div>
              <div>
                <p className="font-bold text-lg leading-tight text-white">
                  NISH LIBRARY
                </p>
                <p className="text-gold text-xs tracking-wider">
                  Knowledge &amp; Discovery
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              The library of Nitte Institute of Speech and Hearing, dedicated to
              supporting research and education in Audiology &amp;
              Speech-Language Pathology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gold uppercase tracking-widest text-xs mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-gold text-sm transition-colors"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-semibold text-gold uppercase tracking-widest text-xs mb-5">
              Useful Links
            </h4>
            <ul className="space-y-2.5">
              {usefulLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-white/60 hover:text-gold text-sm transition-colors inline-flex items-center gap-1.5"
                    data-ocid="footer.link"
                  >
                    {link.label}
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gold uppercase tracking-widest text-xs mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>
                  Nitte Institute of Speech and Hearing, Deralakatte, Mangalore
                  575018, Karnataka, India
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span>+91-471-2944666</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="mailto:library@nish.ac.in"
                  className="text-white/60 hover:text-gold transition-colors"
                >
                  library@nish.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid oklch(0.38 0.08 260 / 0.3)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">
            \u00A9 {year} NISH Library &mdash; Nitte Institute of Speech and
            Hearing. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Built with \u2764\uFE0F using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/70 hover:text-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
