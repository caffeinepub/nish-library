import { BookOpen, Library } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage:
          "url('/assets/generated/library-hero.dim_1920x800.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark navy overlay */}
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-8 bg-gold rounded-full" />
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">
              Nitte Institute of Speech and Hearing
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            NISH
            <span className="block text-gold">Library</span>
          </h1>
          <p className="text-white/85 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
            Your Gateway to Knowledge in Audiology &amp; Speech-Language
            Pathology. Explore world-class resources, journals, and digital
            collections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#eresources"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-semibold px-8 py-3.5 rounded-full hover:brightness-110 transition-all duration-200"
              data-ocid="hero.primary_button"
            >
              <BookOpen className="w-5 h-5" />
              Explore Resources
            </a>
            <a
              href="https://nish.easylib.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/25 transition-all duration-200"
              data-ocid="hero.secondary_button"
            >
              <Library className="w-5 h-5" />
              Access Catalog
            </a>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {[
            { value: "9+", label: "E-Resources" },
            { value: "50+", label: "Subscribed Journals" },
            { value: "100+", label: "Open Access Journals" },
            { value: "5", label: "Sign Language Dictionaries" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-gold text-3xl font-bold">{stat.value}</p>
              <p className="text-white/70 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        aria-hidden="true"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          role="img"
          aria-label="Scroll down"
        >
          <title>Scroll down</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </section>
  );
}
