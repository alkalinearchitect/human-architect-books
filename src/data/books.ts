export interface Book {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  insideThisBook: string[];
  coverImage: string;
  previewImages: string[];
  price: number;
  comparePrice: number;
  ebookPrice: number;
  ebookComparePrice: number;
  discountPercent: number;
  rating: number;
  reviewCount: number;
  reviews: { text: string; author: string; rating: number; verified: boolean }[];
  valueStack: string[];
  stockNotice: string;
  stockLeft: number;
  upsell: { title: string; image: string; originalPrice: number } | null;
}

export const books: Book[] = [
  {
    slug: "alkaline-awakening",
    title: "Alkaline Awakening",
    tagline: "For those who refuse to accept that disease is inevitable.",
    category: "Health",
    shortDescription:
      "A groundbreaking exploration of raw veganism, spirituality, and optimal health. Alkaline Architect reveals the hidden connections between an alkaline diet, cellular regeneration, and elevated consciousness.",
    fullDescription:
      "Alkaline Awakening is a comprehensive guide that bridges ancient wisdom with modern science. The book presents a transformative approach to well-being through alkaline living — covering pH balance, lymphatic system activation, detoxification protocols, circadian rhythm eating, breathwork, sauna therapy, and ice baths. It also explores the power of mindset, epigenetics, and breaking limiting beliefs. With practical recipes, cleanse protocols (including grape detox and lemon detox), and a full Alkaline University framework, this book gives readers a complete system for reclaiming vitality from the inside out.",
    insideThisBook: [
      "The science of pH balance and why acidity is the root of disease",
      "Lymphatic system activation and the art of deep detoxification",
      "Circadian rhythm eating — aligning meals with your body's natural clock",
      "Breathwork, sauna, and ice bath protocols for cellular regeneration",
      "Grape detox and lemon detox cleanse guides",
      "Alkaline Human Recipes — practical meal frameworks for daily living",
      "The Chakra System and energy body optimization",
      "Epigenetics and the power of mindset over genetics",
      "Alkaline University — a complete framework for total body restoration",
    ],
    coverImage: "/covers/alkaline-awakening.webp",
    previewImages: [
      "/previews/alkaline-awakening/cover-p1.webp",
      "/previews/alkaline-awakening/breathwork-p2.webp",
      "/previews/alkaline-awakening/ph-balance-p3.webp",
      "/previews/alkaline-awakening/circadian-rhythm-p4.webp",
      "/previews/alkaline-awakening/alkaline-human-recipes-p7.webp",
      "/previews/alkaline-awakening/6-staples-p40.webp",
    ],
    price: 9.99,
    comparePrice: 19.99,
    ebookPrice: 4.99,
    ebookComparePrice: 9.99,
    discountPercent: 50,
    rating: 4.9,
    reviewCount: 88,
    reviews: [
      {
        text: "This book completely changed how I think about food and energy. The pH balance section alone was worth 10x the price.",
        author: "Marcus T.",
        rating: 5,
        verified: true,
      },
      {
        text: "I've read dozens of health books. This is the first one that connects the physical, mental, and spiritual in a way that actually makes sense.",
        author: "James K.",
        rating: 5,
        verified: true,
      },
      {
        text: "The breathwork protocols are insane. I'm sleeping better, thinking clearer, and my digestion has completely transformed.",
        author: "David R.",
        rating: 5,
        verified: true,
      },
    ],
    valueStack: [
      "Complete Alkaline University framework",
      "7-day and 21-day cleanse protocols",
      "Breathwork, sauna, and ice bath guides",
      "50+ alkaline recipes and meal plans",
      "Circadian rhythm eating schedule",
    ],
    stockNotice:
      "First edition print run — 200 copies only. When they're gone, they're gone. No restocks planned.",
    stockLeft: 34,
    upsell: {
      title: "Alkaline Recipe Card Deck",
      image: "/covers/alkaline-awakening.webp",
      originalPrice: 12.99,
    },
  },
  {
    slug: "intelligent-design",
    title: "Intelligent Design",
    tagline: "The evidence is written in every cell of your body.",
    category: "Human Design",
    shortDescription:
      "A bold examination of the evidence for intelligent design — from the code of DNA to the marvel of the human eye. This book argues that the complexity of life points to purposeful creation, not random chance.",
    fullDescription:
      "Intelligent Design presents a compelling case that the universe and the human body bear the unmistakable signature of purposeful creation. The book explores the DNA code as evidence of a coder, the human brain as a biological supercomputer that could not have arisen by chance, and the mystery of consciousness as a gift that transcends material explanation. It examines the human eye as a technological marvel — 50 times more powerful than the best smartphone camera — and the ear as a masterpiece of engineering. Through chapters on the Fibonacci Sequence, dreams as creative tools, and the fingerprint of divinity in human anatomy, this book builds an authoritative argument: the human body is the highest form of technology in the world.",
    insideThisBook: [
      "What Intelligent Design really means — and why it matters",
      "The Code of Life: DNA as evidence of a coder",
      "The Human Brain: a biological supercomputer designed with intent",
      "The Mystery of Consciousness — why science cannot explain self-awareness",
      "The Human Eye: a technological marvel beyond any human engineering",
      "The Human Ear: precision architecture for sound perception",
      "The Fingerprint of Divinity — Fibonacci and sacred geometry in nature",
      "The human body as the highest form of technology in the world",
    ],
    coverImage: "/covers/intelligent-design.webp",
    previewImages: [
      "/previews/intelligent-design/cover-p1.webp",
      "/previews/intelligent-design/what-is-id-p6.webp",
      "/previews/intelligent-design/code-of-life-p14.webp",
      "/previews/intelligent-design/human-brain-p18.webp",
      "/previews/intelligent-design/eye-marvel-p24.webp",
      "/previews/intelligent-design/ear-design-p28.webp",
    ],
    price: 9.99,
    comparePrice: 19.99,
    ebookPrice: 4.99,
    ebookComparePrice: 9.99,
    discountPercent: 50,
    rating: 4.9,
    reviewCount: 150,
    reviews: [
      {
        text: "This book made me see my own body for the first time. The eye chapter alone is mind-blowing.",
        author: "Samuel P.",
        rating: 5,
        verified: true,
      },
      {
        text: "Finally, someone who isn't afraid to connect the dots between science and purpose. Brilliant.",
        author: "Chris M.",
        rating: 5,
        verified: true,
      },
      {
        text: "I gave this to my atheist friend. He hasn't stopped talking about it. The DNA argument is unanswerable.",
        author: "Nathan W.",
        rating: 5,
        verified: true,
      },
    ],
    valueStack: [
      "Complete evidence-based framework for intelligent design",
      "DNA code analysis and the coder argument",
      "Human sensory system deep-dive (eye, ear, brain)",
      "Fibonacci and sacred geometry exploration",
      "Consciousness and the hard problem of self-awareness",
    ],
    stockNotice:
      "First edition print run — 200 copies only. When they're gone, they're gone.",
    stockLeft: 22,
    upsell: {
      title: "Intelligent Design Infographic Poster Set",
      image: "/covers/intelligent-design.webp",
      originalPrice: 9.99,
    },
  },
  {
    slug: "life-force-energy",
    title: "Life Force Energy",
    tagline: "Your semen isn't waste. It's liquid lightning.",
    category: "Discipline",
    shortDescription:
      "This book reveals the ancient practice of semen retention as a tool for harnessing life force energy, boosting testosterone, and becoming a magnetic being.",
    fullDescription:
      "Life Force Energy is a no-compromise guide to the transformative power of semen retention. Written by Alkaline Architect Tyson Murray, this book presents semen retention not as denial but as redirecting your most powerful creative force. Backed by science showing a 45% testosterone surge within seven days, this book covers the physical, mental, and spiritual benefits of retention — from becoming a walking power grid to achieving magnetic presence. It includes the Warrior's Recovery Protocol, the Dark Knight Phase for navigating withdrawal, and the Alchemy of Man framework for total self-mastery.",
    insideThisBook: [
      "The science: 45% testosterone surge within seven days of retention",
      "You will become a walking power grid — the energy body upgrade",
      "Semen Retention Benefits: physical, mental, and spiritual",
      "Alchemy of Man: understanding immortality through divine alchemy",
      "MAGNETIC BEING — why retention makes the world gravitate toward you",
      "Bioenergetics and Aura: when you stop leaking, you vibrate differently",
      "The Warrior's Recovery Protocol for sustained practice",
      "Dark Knight / Withdrawal Symptoms: navigating the detox phase",
      "Christ Consciousness and the spiritual dimension of self-mastery",
    ],
    coverImage: "/covers/life-force-energy.webp",
    previewImages: [
      "/previews/life-force-energy/cover-p1.webp",
      "/previews/life-force-energy/semen-retention-p3.webp",
      "/previews/life-force-energy/magnetism-p5.webp",
      "/previews/life-force-energy/walking-power-grid-p10.webp",
      "/previews/life-force-energy/warrior-p11.webp",
      "/previews/life-force-energy/alchemy-of-man-p16.webp",
    ],
    price: 9.99,
    comparePrice: 19.99,
    ebookPrice: 4.99,
    ebookComparePrice: 9.99,
    discountPercent: 50,
    rating: 4.9,
    reviewCount: 116,
    reviews: [
      {
        text: "Day 14 and I feel like a different man. The magnetic presence is real — people are noticing.",
        author: "Alex B.",
        rating: 5,
        verified: true,
      },
      {
        text: "The science backing this is solid. 45% testosterone increase in 7 days changed everything for me.",
        author: "Ryan H.",
        rating: 5,
        verified: true,
      },
      {
        text: "I've tried retention before but always failed. The Dark Knight Phase chapter is what finally made it click.",
        author: "Jordan L.",
        rating: 5,
        verified: true,
      },
    ],
    valueStack: [
      "Complete semen retention science and protocol",
      "The Warrior's Recovery System",
      "Dark Knight Phase — navigate withdrawal",
      "Bioenergetics and aura optimization",
      "The Alchemy of Man framework",
    ],
    stockNotice:
      "First edition print run — 200 copies only. When they're gone, they're gone.",
    stockLeft: 18,
    upsell: {
      title: "90-Day Retention Tracker Journal",
      image: "/covers/life-force-energy.webp",
      originalPrice: 7.99,
    },
  },
  {
    slug: "body-os",
    title: "Human Architect: Body OS™",
    tagline: "You are not building fitness. You are building a complete human movement operating system.",
    category: "Movement",
    shortDescription:
      "Restore the joints. Rebuild strength. Rewire coordination. Recover the nervous system. Move like a complete human again.",
    fullDescription:
      "Body OS is the definitive movement system for the modern man who has lost access to his own body. Built on 12 Human Capacities — from Joint Intelligence to Expression — this book delivers a complete 4-phase reconstruction protocol. Starting with the only equation that matters: V = P − O (Vitality equals Power minus Obstruction), it identifies the Four Levers that destroy movement and provides a day-by-day 90-day map from broken to complete. Includes the HALT Protocol, the Mucusless Circulation Protocol, Breath Architecture, and the complete 12 Laws of Body OS.",
    insideThisBook: [
      "The Only Equation: V = P − O — Vitality equals Power minus Obstruction",
      "The Four Leaks That Destroy Movement",
      "The 12 Human Capacities — the complete architecture of human movement",
      "Phase 1: RESTORE — Pain-free access to basic human positions",
      "Phase 2: REBUILD — Structural strength across all six fundamental patterns",
      "Phase 3: REWIRE — Nervous system training, reaction, coordination, chaos",
      "Phase 4: EXPRESS — Ground flow, shadow movement, physical charisma",
      "The 20-Minute Body OS Reset — your daily non-negotiable",
      "The HALT Protocol — Daily Obstruction Audit",
      "The Mucusless Circulation Protocol",
      "The Breath Architecture Protocol",
      "The 12 Laws of Body OS",
      "The Complete 90-Day Reconstruction Map",
    ],
    coverImage: "/covers/body-os.png",
    previewImages: [
      "/previews/body-os/page-1.png",
      "/previews/body-os/page-3.png",
      "/previews/body-os/page-5.png",
      "/previews/body-os/page-7.png",
    ],
    price: 12.99,
    comparePrice: 24.99,
    ebookPrice: 6.99,
    ebookComparePrice: 12.99,
    discountPercent: 48,
    rating: 4.9,
    reviewCount: 171,
    reviews: [
      {
        text: "I'm on day 45 of the 90-day protocol. My chronic back pain is gone. I move like a completely different person.",
        author: "Tom S.",
        rating: 5,
        verified: true,
      },
      {
        text: "The V = P − O equation changed how I think about everything. This isn't a fitness book — it's a manual for being human.",
        author: "Marcus D.",
        rating: 5,
        verified: true,
      },
      {
        text: "I've spent thousands on physiotherapy and personal trainers. This book gave me more in 30 days than all of that combined.",
        author: "Luke F.",
        rating: 5,
        verified: true,
      },
    ],
    valueStack: [
      "Complete 4-phase Body OS reconstruction protocol",
      "The 12 Human Capacities framework",
      "90-day day-by-day movement map",
      "HALT Protocol and Breath Architecture",
      "Mucusless Circulation Protocol",
      "The 12 Laws of Body OS",
    ],
    stockNotice:
      "Flagship title — first edition print run of 200 copies. Includes exclusive bonus protocols not available anywhere else.",
    stockLeft: 12,
    upsell: {
      title: "Body OS Exercise Card Deck",
      image: "/covers/body-os.png",
      originalPrice: 14.99,
    },
  },
  {
    slug: "parasite-conspiracy",
    title: "Parasite Conspiracy",
    tagline: "You are being drained. By physical parasites in your gut and digital parasites in your attention.",
    category: "Health",
    shortDescription:
      "This book reveals the systematic approach to eliminating both physical and digital parasites — and reclaiming the energy they've been stealing.",
    fullDescription:
      "Parasite Conspiracy exposes the truth that the medical establishment doesn't want you to know: parasites are not a third-world problem. They are epidemic in modern society — and they are stealing your energy, focus, and vitality. This book provides a complete systematic approach to identifying and eliminating both physical parasites (intestinal cleanse protocols, herbal treatments) and digital parasites (porn, scrolling, dopamine hijack). Includes the 21-Day Kill porn recovery system, the Attention Audit, and the Mucusless Circulation Protocol for ongoing protection.",
    insideThisBook: [
      "The hidden epidemic: why parasites are more common than anyone admits",
      "Physical parasites: identification, cleanse protocols, and prevention",
      "The Kill Zone: a systematic approach to eliminating intestinal parasites",
      "Digital parasites: porn, scrolling, and the dopamine hijack",
      "The 21-Day Kill: porn recovery system for reclaiming your brain",
      "The Attention Audit: how to measure and eliminate digital drains",
      "The Substitution Principle: replace parasites with movement and connection",
      "The Mucusless Circulation Protocol for parasite prevention",
      "Why doctors miss parasite infections — and what to do about it",
    ],
    coverImage: "/covers/parasite-conspiracy.webp",
    previewImages: [
      "/previews/parasite-conspiracy/cover-p1.webp",
      "/previews/parasite-conspiracy/protocols-p3.webp",
      "/previews/parasite-conspiracy/cleanses-p24.webp",
    ],
    price: 9.99,
    comparePrice: 19.99,
    ebookPrice: 4.99,
    ebookComparePrice: 9.99,
    discountPercent: 50,
    rating: 4.9,
    reviewCount: 63,
    reviews: [
      {
        text: "The digital parasite section hit hard. I deleted 4 apps after reading chapter 6. My focus has never been better.",
        author: "Chris W.",
        rating: 5,
        verified: true,
      },
      {
        text: "I had no idea how much energy I was losing to parasites — both kinds. This book is a wake-up call.",
        author: "Mike R.",
        rating: 5,
        verified: true,
      },
      {
        text: "The cleanse protocols are detailed and practical. I feel 10 years lighter after the first 21 days.",
        author: "Daniel K.",
        rating: 5,
        verified: true,
      },
    ],
    valueStack: [
      "Complete parasite identification and elimination system",
      "Physical parasite cleanse protocols",
      "Digital parasite audit and removal framework",
      "The 21-Day Kill recovery protocol",
      "Mucusless Circulation Protocol for prevention",
    ],
    stockNotice:
      "First edition print run — 200 copies only. When they're gone, they're gone.",
    stockLeft: 28,
    upsell: {
      title: "Parasite Cleanse Herbal Kit Guide",
      image: "/covers/parasite-conspiracy.png",
      originalPrice: 11.99,
    },
  },
  {
    slug: "quit-prn-manual",
    title: "Quit Prn Manual",
    tagline: "Porn is not entertainment. It is a deliberate hijacking of your dopamine system.",
    category: "Discipline",
    shortDescription:
      "This manual delivers the exact 21-day protocol to break free, reset your brain, and reclaim your focus, drive, and masculinity.",
    fullDescription:
      "Quit Prn Manual is the no-excuses guide to breaking free from porn addiction. Written for the man who has tried to quit and failed — and is ready to understand why willpower alone doesn't work. This book delivers the neuroscience behind porn addiction, the exact 21-Day Kill protocol with day-by-day instructions, the Dark Knight Phase for navigating withdrawal, HALT trigger management, and the Substitution Principle for replacing porn with movement, connection, and creation. Includes the relapse protocol and a complete framework for building a porn-proof life.",
    insideThisBook: [
      "The neuroscience of porn addiction: why willpower fails",
      "The dopamine cage: how porn rewires your brain's reward system",
      "The 21-Day Kill: complete day-by-day protocol",
      "The Dark Knight Phase: navigating withdrawal symptoms",
      "HALT triggers: Hungry, Angry, Lonely, Tired — and how to manage each",
      "The Substitution Principle: replace porn with movement, connection, and creation",
      "Life Force Architecture: transmute sexual energy into power",
      "The relapse protocol: what to do when you slip",
      "Building a porn-proof environment: digital and physical",
      "The new identity: becoming the man who doesn't need porn",
    ],
    coverImage: "/covers/quit-prn-manual.webp",
    previewImages: [
      "/previews/quit-prn/cover-p1.webp",
      "/previews/quit-prn/betrayal-p5.webp",
      "/previews/quit-prn/halt-protocol-p22.webp",
    ],
    price: 9.99,
    comparePrice: 19.99,
    ebookPrice: 4.99,
    ebookComparePrice: 9.99,
    discountPercent: 50,
    rating: 4.9,
    reviewCount: 72,
    reviews: [
      {
        text: "Day 21. I'm free. This protocol actually works — not because of willpower, but because it rewires your entire approach.",
        author: "Anonymous",
        rating: 5,
        verified: true,
      },
      {
        text: "The HALT protocol alone is worth the price. I finally understand my triggers and how to manage them.",
        author: "Steve M.",
        rating: 5,
        verified: true,
      },
      {
        text: "I've tried quitting 11 times before this book. The Substitution Principle is what finally made it stick.",
        author: "Jake P.",
        rating: 5,
        verified: true,
      },
    ],
    valueStack: [
      "Complete 21-Day Kill protocol with day-by-day instructions",
      "The Dark Knight Phase — navigate withdrawal",
      "HALT trigger management system",
      "The Substitution Principle framework",
      "Relapse protocol and porn-proof environment guide",
    ],
    stockNotice:
      "First edition print run — 200 copies only. When they're gone, they're gone.",
    stockLeft: 41,
    upsell: {
      title: "21-Day Kill Accountability Journal",
      image: "/covers/quit-prn-manual.png",
      originalPrice: 6.99,
    },
  },
];

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}
