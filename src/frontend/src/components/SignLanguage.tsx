import { ExternalLink, Hand } from "lucide-react";
import { motion } from "motion/react";

const dictionaries = [
  {
    name: "India Sign Language Portal",
    description:
      "Comprehensive Indian Sign Language dictionary with video demonstrations for hundreds of words.",
    url: "https://indiansignlanguage.org/",
    country: "\u{1F1EE}\u{1F1F3} India",
  },
  {
    name: "ASL Pro",
    description:
      "American Sign Language video dictionary with thousands of signs demonstrated by native signers.",
    url: "http://www.aslpro.com/",
    country: "\u{1F1FA}\u{1F1F8} USA",
  },
  {
    name: "Start ASL Dictionary",
    description:
      "Free American Sign Language learning resource with dictionary and video lessons.",
    url: "http://www.start-american-sign-language.com/",
    country: "\u{1F1FA}\u{1F1F8} USA",
  },
  {
    name: "Handspeak Dictionary",
    description:
      "Rich ASL dictionary with illustrated and animated signs, fingerspelling, and cultural content.",
    url: "http://www.handspeak.com/",
    country: "\u{1F1FA}\u{1F1F8} USA",
  },
  {
    name: "ASL University Free Classes",
    description:
      "Free ASL lessons and university-level curriculum from Lifeprint.com \u2014 the internet's largest ASL resource.",
    url: "https://www.lifeprint.com/",
    country: "\u{1F1FA}\u{1F1F8} USA",
  },
];

export default function SignLanguage() {
  return (
    <section id="signlanguage" className="py-20 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">
            Communication Access
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide">
            Sign Language Dictionaries
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="text-white/60 mt-4 max-w-xl mx-auto text-sm">
            Access comprehensive sign language dictionaries and learning
            resources for inclusive communication.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dictionaries.map((dict, i) => (
            <motion.a
              key={dict.name}
              href={dict.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="bg-card rounded-2xl shadow-card hover:shadow-card-hover border border-border/50 hover:border-gold/40 transition-all duration-300 p-6 group flex flex-col"
              data-ocid={`signlanguage.item.${i + 1}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-navy border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <Hand className="w-6 h-6 text-gold" />
                </div>
                <span className="text-xs text-white/50">{dict.country}</span>
              </div>
              <h3 className="font-bold text-white text-base mb-2 group-hover:text-gold transition-colors">
                {dict.name}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed flex-1 mb-4">
                {dict.description}
              </p>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-gold">
                <ExternalLink className="w-4 h-4" />
                Visit Resource
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
