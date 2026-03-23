import {
  Archive,
  BookMarked,
  CheckSquare,
  Database,
  ExternalLink,
  FileSearch,
  Globe,
  Microscope,
  PenTool,
  Stethoscope,
} from "lucide-react";
import { motion } from "motion/react";

const resources = [
  {
    icon: Stethoscope,
    name: "MedOne ComSci",
    description:
      "Audiology & Speech-Language Pathology Database with comprehensive clinical resources.",
    url: "https://medone-comsci.thieme.com/",
    tag: "Specialty Database",
  },
  {
    icon: BookMarked,
    name: "ProQuest",
    description:
      "Extensive collection of E-books and E-journals across multiple disciplines.",
    url: "https://www.proquest.com/",
    tag: "E-Books & Journals",
  },
  {
    icon: Microscope,
    name: "ClinicalKey",
    description:
      "Evidence-based clinical information for better patient care and decision making.",
    url: "https://www.clinicalkey.com/",
    tag: "Clinical Resource",
  },
  {
    icon: FileSearch,
    name: "Web of Science",
    description:
      "Trusted bibliographic citations and research analytics platform.",
    url: "https://jcr.clarivate.com/jcr/home",
    tag: "Citations",
  },
  {
    icon: Database,
    name: "Scopus",
    description:
      "The world's largest abstract and citation database of peer-reviewed literature.",
    url: "https://www.scopus.com/",
    tag: "Citations",
  },
  {
    icon: Globe,
    name: "UpToDate",
    description:
      "Point-of-care medical resource synthesizing the latest evidence.",
    url: "http://www.uptodate.com",
    tag: "Medical Resource",
  },
  {
    icon: CheckSquare,
    name: "Turnitin",
    description:
      "Industry-leading plagiarism detection and academic integrity tool.",
    url: "#",
    tag: "Plagiarism Detection",
  },
  {
    icon: PenTool,
    name: "Grammarly",
    description:
      "AI-powered writing assistance for clear, effective, and mistake-free writing.",
    url: "#",
    tag: "Writing Tool",
  },
  {
    icon: Archive,
    name: "Zotero",
    description:
      "Free, easy-to-use reference management tool to collect and organize research.",
    url: "https://www.zotero.org/",
    tag: "Reference Manager",
  },
];

export default function EResources() {
  return (
    <section id="eresources" className="py-20 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">
            Digital Collections
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide">
            Featured E-Resources
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((res, i) => (
            <motion.div
              key={res.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="bg-card rounded-xl shadow-card hover:shadow-card-hover border border-border/50 hover:border-gold/40 transition-all duration-300 p-6 flex flex-col group"
              data-ocid={`eresources.item.${i + 1}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <res.icon className="w-6 h-6 text-gold transition-colors" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                    {res.tag}
                  </span>
                  <h3 className="font-bold text-white text-lg leading-snug">
                    {res.name}
                  </h3>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed flex-1 mb-4">
                {res.description}
              </p>
              <a
                href={res.url !== "#" ? res.url : undefined}
                target={res.url !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                  res.url !== "#"
                    ? "text-gold hover:text-white"
                    : "text-white/40 cursor-default"
                }`}
                data-ocid={`eresources.link.${i + 1}`}
              >
                <ExternalLink className="w-4 h-4" />
                {res.url !== "#" ? "Visit Resource" : "Access via Institution"}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
