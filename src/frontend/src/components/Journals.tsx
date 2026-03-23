import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Star } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const subscribedJournals = [
  {
    name: "American Journal of Audiology",
    url: "https://pubs.asha.org/journal/aja",
    subscribed: true,
  },
  {
    name: "Journal of American Academy of Audiology",
    url: "https://medone-comsci.thieme.com/products/15",
    subscribed: true,
  },
  {
    name: "Seminars in Hearing",
    url: "https://medone-comsci.thieme.com/products/seminars-in-hearing",
    subscribed: true,
  },
  {
    name: "Ear and Hearing",
    url: "https://journals.lww.com/ear-hearing/pages/default.aspx",
    subscribed: true,
  },
  {
    name: "Journal of Speech-Language and Hearing Research",
    url: "https://pubs.asha.org/journal/jslhr",
    subscribed: true,
  },
  {
    name: "American Journal of Speech-Language Pathology",
    url: "https://pubs.asha.org/journal/ajslp",
    subscribed: true,
  },
  {
    name: "Communication Disorders Quarterly",
    url: "https://journals.sagepub.com/home/cdq",
    subscribed: true,
  },
  {
    name: "Journal of Voice",
    url: "https://www.clinicalkey.com/",
    subscribed: true,
  },
  {
    name: "Seminars in Speech Language",
    url: "https://medone-comsci.thieme.com/products/seminars-in-speech-and-language",
    subscribed: true,
  },
  {
    name: "Cleft Palate & Craniofacial Journal",
    url: "https://journals.sagepub.com/home/cpc",
    subscribed: true,
  },
];

const openAccessJournals: Record<string, { name: string; url: string }[]> = {
  Speech: [
    {
      name: "Folia Phoniatrica et Logopaedica",
      url: "https://www.karger.com/Journal/Home/224363",
    },
    {
      name: "Clinical Linguistics & Phonetics",
      url: "https://www.tandfonline.com/toc/iclp20/current",
    },
    {
      name: "Journal of Fluency Disorders",
      url: "https://www.journals.elsevier.com/journal-of-fluency-disorders",
    },
    {
      name: "Journal of Communication Disorders",
      url: "https://www.journals.elsevier.com/journal-of-communication-disorders",
    },
    {
      name: "Logopedics Phoniatrics Vocology",
      url: "https://www.tandfonline.com/toc/ilog20/current",
    },
  ],
  Audiology: [
    {
      name: "International Journal of Audiology",
      url: "https://www.tandfonline.com/toc/iija20/current",
    },
    {
      name: "Audiology Research",
      url: "https://www.mdpi.com/journal/audiolres",
    },
    {
      name: "Hearing Research",
      url: "https://www.journals.elsevier.com/hearing-research",
    },
    {
      name: "Journal of Hearing Science",
      url: "https://journalofhearingscience.com/",
    },
    {
      name: "Cochlear Implants International",
      url: "https://www.tandfonline.com/toc/ycii20/current",
    },
  ],
  Language: [
    {
      name: "Aphasiology",
      url: "https://www.tandfonline.com/toc/paph20/current",
    },
    { name: "First Language", url: "https://journals.sagepub.com/home/fla" },
    {
      name: "Language, Speech, and Hearing Services in Schools",
      url: "https://pubs.asha.org/journal/lshss",
    },
    {
      name: "Augmentative and Alternative Communication",
      url: "https://www.tandfonline.com/toc/iaac20/current",
    },
    {
      name: "International Journal of Language & Communication Disorders",
      url: "https://onlinelibrary.wiley.com/journal/13606984",
    },
  ],
  Neurology: [
    {
      name: "Brain and Language",
      url: "https://www.journals.elsevier.com/brain-and-language",
    },
    {
      name: "Neuropsychologia",
      url: "https://www.journals.elsevier.com/neuropsychologia",
    },
    {
      name: "Journal of Neurolinguistics",
      url: "https://www.journals.elsevier.com/journal-of-neurolinguistics",
    },
    {
      name: "Aphasiology",
      url: "https://www.tandfonline.com/toc/paph20/current",
    },
  ],
  Psychology: [
    {
      name: "Journal of Child Language",
      url: "https://www.cambridge.org/core/journals/journal-of-child-language",
    },
    {
      name: "Journal of Speech & Hearing Disorders",
      url: "https://pubs.asha.org/",
    },
    {
      name: "Language Acquisition",
      url: "https://www.tandfonline.com/toc/hlac20/current",
    },
    {
      name: "Child Development",
      url: "https://www.srcd.org/research/journals/child-development",
    },
  ],
  Otolaryngology: [
    {
      name: "Otolaryngology — Head and Neck Surgery",
      url: "https://journals.sagepub.com/home/oto",
    },
    {
      name: "The Laryngoscope",
      url: "https://onlinelibrary.wiley.com/journal/15314995",
    },
    {
      name: "JAMA Otolaryngology–Head & Neck Surgery",
      url: "https://jamanetwork.com/journals/jamaotolaryngology",
    },
    {
      name: "International Journal of Pediatric Otorhinolaryngology",
      url: "https://www.journals.elsevier.com/international-journal-of-pediatric-otorhinolaryngology",
    },
  ],
  SLP: [
    {
      name: "Topics in Language Disorders",
      url: "https://journals.lww.com/topicsinlanguagedisorders/pages/default.aspx",
    },
    {
      name: "Perspectives of the ASHA Special Interest Groups",
      url: "https://pubs.asha.org/journal/persp",
    },
    {
      name: "Evidence-Based Communication Assessment and Intervention",
      url: "https://www.tandfonline.com/toc/tebr20/current",
    },
    {
      name: "International Journal of Speech-Language Pathology",
      url: "https://www.tandfonline.com/toc/iasl20/current",
    },
  ],
};

export default function Journals() {
  const [activeTab, setActiveTab] = useState("subscribed");

  return (
    <section id="journals" className="py-20 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">
            Peer-Reviewed
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide">
            Subscribed Journals
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent mb-8 justify-center p-0">
            {["subscribed", ...Object.keys(openAccessJournals)].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="px-4 py-2 rounded-full text-sm font-medium border border-white/20 data-[state=active]:bg-gold data-[state=active]:text-navy data-[state=active]:border-gold bg-transparent text-white/70 hover:text-white hover:border-white/50 transition-all"
                data-ocid="journals.tab"
              >
                {tab === "subscribed" ? "Audiology & SLP" : tab}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="subscribed">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden"
            >
              <div className="bg-navy px-6 py-4 flex items-center gap-3 border-b border-gold/20">
                <Star className="w-5 h-5 text-gold fill-gold" />
                <span className="text-white font-semibold">
                  Subscribed Journals — Premium Access
                </span>
              </div>
              <div className="divide-y divide-border/30">
                {subscribedJournals.map((j, i) => (
                  <a
                    key={j.name}
                    href={j.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-6 py-4 hover:bg-navy/60 transition-colors group"
                    data-ocid={`journals.item.${i + 1}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-7 h-7 rounded-full bg-gold/20 text-gold text-sm font-bold flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-white font-medium group-hover:text-gold transition-colors text-sm sm:text-base">
                        {j.name}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-gold transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {Object.entries(openAccessJournals).map(([category, journals]) => (
            <TabsContent key={category} value={category}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden"
              >
                <div className="bg-navy px-6 py-4 border-b border-gold/20">
                  <span className="text-white font-semibold">
                    {category} — Open Access Journals
                  </span>
                </div>
                <div className="divide-y divide-border/30">
                  {journals.map((j, i) => (
                    <a
                      key={j.name}
                      href={j.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-6 py-4 hover:bg-navy/60 transition-colors group"
                      data-ocid={`journals.item.${i + 1}`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-7 h-7 rounded-full bg-gold/20 text-gold text-sm font-bold flex items-center justify-center flex-shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-white font-medium group-hover:text-gold transition-colors text-sm sm:text-base">
                          {j.name}
                        </span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-gold transition-colors flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
