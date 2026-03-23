import { BookOpen, Menu, Search, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "E-Resources", href: "#eresources" },
  { label: "Services", href: "#services" },
  { label: "Journals", href: "#journals" },
  { label: "Open Access", href: "#openaccess" },
  { label: "Sign Language", href: "#signlanguage" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.open(
        `https://nish.easylib.net/search?query=${encodeURIComponent(searchQuery)}`,
        "_blank",
      );
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 flex-shrink-0"
            data-ocid="nav.link"
          >
            <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-bold text-base leading-tight tracking-wide">
                NISH LIBRARY
              </p>
              <p className="text-gold text-xs font-medium tracking-wider">
                Knowledge & Discovery
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-gold text-sm font-medium px-3 py-2 rounded-md transition-colors duration-200"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5"
          >
            <Search className="w-4 h-4 text-white/60" />
            <input
              type="text"
              placeholder="Search catalog..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-white placeholder-white/50 text-sm outline-none w-36 lg:w-48"
              data-ocid="nav.search_input"
            />
          </form>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-white/80 hover:text-gold py-2 px-3 rounded-md text-sm font-medium transition-colors"
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
              <form
                onSubmit={handleSearch}
                className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-2 mt-2"
              >
                <Search className="w-4 h-4 text-white/60" />
                <input
                  type="text"
                  placeholder="Search catalog..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-white placeholder-white/50 text-sm outline-none flex-1"
                  data-ocid="nav.search_input"
                />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
