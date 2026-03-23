import { BookOpen, Database, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const openAccessBooks = [
  {
    name: "ASPLP Books",
    description:
      "Association of Speech-Language Pathologists open access book collection.",
    url: "https://www.asplp.in/",
  },
  {
    name: "Anatomy & Physiology (OpenStax)",
    description:
      "Free peer-reviewed textbook on Anatomy & Physiology from OpenStax.",
    url: "https://openstax.org/details/books/anatomy-and-physiology-2e",
  },
  {
    name: "NCBI Bookshelf",
    description:
      "Free access to books and documents in life science and healthcare.",
    url: "https://www.ncbi.nlm.nih.gov/books/",
  },
  {
    name: "Directory of Open Access Books",
    description: "Searchable index of peer-reviewed open access monographs.",
    url: "https://www.doabooks.org/",
  },
];

const openAccessDatabases = [
  {
    name: "PubMed Central (PMC)",
    description:
      "Free full-text archive of biomedical and life sciences journal literature.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/",
  },
  {
    name: "DOAJ – Directory of Open Access Journals",
    description:
      "Community-curated online directory indexing open access peer-reviewed journals.",
    url: "https://doaj.org/",
  },
  {
    name: "Google Scholar",
    description:
      "Free web search engine for scholarly literature across many disciplines.",
    url: "https://scholar.google.com/",
  },
  {
    name: "Unpaywall",
    description: "Find free legal full-text versions of research papers.",
    url: "https://unpaywall.org/",
  },
];

export default function OpenAccess() {
  return (
    <section id="openaccess" className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">
            Freely Available
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide">
            Open Access Resources
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Open Access Books */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden"
          >
            <div className="bg-beige px-6 py-4 flex items-center gap-3 border-b border-gold/20">
              <BookOpen className="w-5 h-5 text-gold" />
              <span className="text-white font-semibold uppercase tracking-wide text-sm">
                Open Access Books
              </span>
            </div>
            <div className="p-6 space-y-4">
              {openAccessBooks.map((book, i) => (
                <a
                  key={book.name}
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl border border-border/40 hover:border-gold/40 hover:bg-navy/60 transition-all group"
                  data-ocid={`openaccess.item.${i + 1}`}
                >
                  <div className="w-9 h-9 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white text-sm group-hover:text-gold transition-colors">
                      {book.name}
                    </p>
                    <p className="text-white/55 text-xs mt-0.5 leading-relaxed">
                      {book.description}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-gold transition-colors flex-shrink-0 mt-0.5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Open Access Databases */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden"
          >
            <div className="bg-beige px-6 py-4 flex items-center gap-3 border-b border-gold/20">
              <Database className="w-5 h-5 text-gold" />
              <span className="text-white font-semibold uppercase tracking-wide text-sm">
                Open Access Databases
              </span>
            </div>
            <div className="p-6 space-y-4">
              {openAccessDatabases.map((db, i) => (
                <a
                  key={db.name}
                  href={db.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl border border-border/40 hover:border-gold/40 hover:bg-navy/60 transition-all group"
                  data-ocid={`openaccess.item.${i + 5}`}
                >
                  <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Database className="w-5 h-5 text-gold group-hover:text-gold transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white text-sm group-hover:text-gold transition-colors">
                      {db.name}
                    </p>
                    <p className="text-white/55 text-xs mt-0.5 leading-relaxed">
                      {db.description}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-gold transition-colors flex-shrink-0 mt-0.5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
