import {
  BookOpen,
  Copy,
  Ear,
  FileQuestion,
  HelpCircle,
  Mic,
  RefreshCw,
  Search,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: HelpCircle,
    name: "Reference Service",
    description:
      "Expert assistance in finding information and navigating library resources.",
    url: null,
  },
  {
    icon: RefreshCw,
    name: "Circulation Service",
    description:
      "Borrow and return books, manage your library account and renewals.",
    url: null,
  },
  {
    icon: BookOpen,
    name: "Books, CDs & DVDs",
    description:
      "Access a wide collection of physical media including books, CDs, and DVDs.",
    url: null,
  },
  {
    icon: Copy,
    name: "Reprography",
    description:
      "Photocopying and printing services for study and research purposes.",
    url: null,
  },
  {
    icon: FileQuestion,
    name: "Previous Question Papers",
    description:
      "Access previous examination question papers for study preparation.",
    url: "https://tinyurl.com/2p8zxw3z",
  },
  {
    icon: Mic,
    name: "SLP Resources",
    description:
      "Speech-Language Pathology curated resources and study materials.",
    url: "https://drive.google.com/drive/folders/1gcVQzMg8f2MGRyGrJC1s9vP0IqQmP2Zg",
  },
  {
    icon: Ear,
    name: "Audiology Resources",
    description:
      "Comprehensive audiology study resources and clinical references.",
    url: "https://drive.google.com/drive/folders/1ztmMX3wWXhzBmZX26tgc9vvYZGDLLSYm",
  },
  {
    icon: Search,
    name: "OPAC Catalog",
    description:
      "Online Public Access Catalog — search the complete library collection.",
    url: "https://nish.easylib.net/",
  },
  {
    icon: ShieldCheck,
    name: "Plagiarism Check",
    description: "Submit your work for plagiarism checking through Turnitin.",
    url: "https://forms.gle/wCZAzr8jbr1TjGtF6",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide">
            Library Services
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              data-ocid={`services.item.${i + 1}`}
            >
              {svc.url ? (
                <a
                  href={svc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 bg-card rounded-xl border border-border/50 hover:border-gold/40 shadow-card hover:shadow-card-hover p-6 transition-all duration-300 group h-full"
                  data-ocid={`services.link.${i + 1}`}
                >
                  <ServiceCardInner svc={svc} />
                </a>
              ) : (
                <div className="flex items-start gap-4 bg-card rounded-xl border border-border/50 shadow-card p-6 h-full">
                  <ServiceCardInner svc={svc} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCardInner({ svc }: { svc: (typeof services)[0] }) {
  return (
    <>
      <div className="w-12 h-12 rounded-lg bg-navy border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
        <svc.icon className="w-6 h-6 text-gold" />
      </div>
      <div>
        <h3 className="font-bold text-white text-base mb-1 group-hover:text-gold transition-colors">
          {svc.name}
        </h3>
        <p className="text-white/60 text-sm leading-relaxed">
          {svc.description}
        </p>
        {svc.url && (
          <span className="text-xs text-gold font-semibold mt-2 inline-block">
            Click to access →
          </span>
        )}
      </div>
    </>
  );
}
