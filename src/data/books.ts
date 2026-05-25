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
    tagline: "Your blood is either feeding disease or fighting it. Choose.",
    category: "Health",
    shortDescription:
      "The acid you eat is killing you slowly. This book shows you exactly how to flip the switch — pH balance, lymphatic drainage, circadian eating, breathwork, and the full Alkaline University framework.",
    fullDescription:
      "You've been told your body just breaks down with age. That's a lie. Your body wants to heal. You've been drowning it in acid — dead food, toxic water, stagnant lymph, no sunlight. Alkaline Awakening is the reset. Tyson Architect spent years mapping the exact protocols that reverse cellular damage: pH balance that actually works, lymphatic activation that moves waste out, circadian rhythm eating that aligns your meals with your biology, breathwork that oxygenates your blood, and cleanse protocols that strip the acid from your system. This isn't theory. It's the system Tyson used to rebuild himself. Now it's yours.",
    insideThisBook: [
      "Why acidity is the root of every disease you're afraid of",
      "The lymphatic system: your body's waste removal system — and why yours is clogged",
      "Circadian rhythm eating — eat with the sun or pay the price",
      "Breathwork protocols that oxygenate your blood in minutes",
      "Grape detox and lemon detox — step-by-step cleanse guides",
      "50+ alkaline recipes that don't taste like punishment",
      "The Chakra System and why your energy body matters",
      "Epigenetics: your genes are not your destiny",
      "Alkaline University — the complete restoration framework",
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
        text: "I stopped drinking tap water and eating dead food after chapter 3. Two weeks in, my brain fog lifted. I didn't know I was walking through life half-dead.",
        author: "Marcus T.",
        rating: 5,
        verified: true,
      },
      {
        text: "Every other health book talks around the problem. This one names it: you're acidic, your lymph is stagnant, and your body is drowning in its own waste. Then it gives you the fix.",
        author: "James K.",
        rating: 5,
        verified: true,
      },
      {
        text: "The breathwork section alone changed my sleep. I went from 4 hours of broken sleep to 7 hours of deep rest in 10 days.",
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
    tagline: "Your body is not an accident. It is the most advanced technology on Earth.",
    category: "Human Design",
    shortDescription:
      "DNA is code. Code requires a coder. The human eye processes 10 million colors. Your brain has 86 billion neurons. This isn't random. This book proves it.",
    fullDescription:
      "You've been told you're a cosmic accident. Atoms bouncing around for no reason. That story is lazy. Intelligent Design walks through the evidence your body is screaming at you: DNA is a language — and languages have authors. Your brain is 86 billion neurons wired with precision no human engineer could replicate. Your eye processes 10 million colors at a resolution no camera can match. Your ear detects sound frequencies that border on the impossible. The Fibonacci sequence isn't a coincidence — it's a signature. Tyson Architect doesn't ask you to believe. He asks you to look at the evidence and decide for yourself.",
    insideThisBook: [
      "What Intelligent Design actually means — stripped of the politics",
      "The Code of Life: DNA as evidence of a coder",
      "The Human Brain: 86 billion neurons, zero explanation from randomness",
      "The Mystery of Consciousness — why science can't explain self-awareness",
      "The Human Eye: 10 million colors, no engineer on Earth could design it",
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
        text: "The eye chapter broke me. I've looked at my own face in the mirror for 30 years and never once thought about what I was actually looking at. A machine that makes NASA's best equipment look like a toy.",
        author: "Samuel P.",
        rating: 5,
        verified: true,
      },
      {
        text: "I bought this to argue with it. I couldn't. The DNA argument alone is the most honest thing I've read in years.",
        author: "Chris M.",
        rating: 5,
        verified: true,
      },
      {
        text: "Gave this to my atheist friend. He read it in one sitting. He hasn't stopped talking about it. The code argument is unanswerable.",
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
    tagline: "You're leaking your most powerful creative force. Stop.",
    category: "Discipline",
    shortDescription:
      "Your semen isn't waste. It's liquid lightning. This book gives you the science, the protocol, and the warrior framework to redirect that energy into unstoppable drive.",
    fullDescription:
      "You're bleeding out through your fingertips. Every session costs you focus, drive, and the man you were supposed to become. Life Force Energy is the manual for stopping the leak. Tyson Architect lays out the science: a 45% testosterone surge within seven days of retention. But this isn't about willpower. It's about understanding what you're actually losing — and what you build when you stop. The Warrior's Recovery Protocol. The Dark Knight Phase for navigating withdrawal. The Alchemy of Man framework for total self-mastery. This book doesn't ask you to believe. It gives you the protocol and dares you to follow it.",
    insideThisBook: [
      "The science: 45% testosterone surge within seven days of retention",
      "You're a walking power grid — here's how to stop the leak",
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
        text: "Day 14. I feel like a different man. The magnetic presence is real — people are noticing. My girlfriend asked me what changed. I couldn't explain it. I just stopped leaking.",
        author: "Alex B.",
        rating: 5,
        verified: true,
      },
      {
        text: "The 45% testosterone stat is real. I got blood work done before and after 7 days. My doctor asked what I changed. I handed him this book.",
        author: "Ryan H.",
        rating: 5,
        verified: true,
      },
      {
        text: "I tried retention 6 times before this. Always failed by day 3. The Dark Knight Phase chapter told me exactly why — and what to do when the wall hits. Day 30 now. Not going back.",
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
    tagline: "You don't have a fitness problem. You have an operating system problem.",
    category: "Movement",
    shortDescription:
      "Your joints are locked. Your nervous system is fried. Your movement patterns are broken. Body OS is the 90-day protocol to rebuild the complete human — from the inside out.",
    fullDescription:
      "You can't squat to the ground. You can't hang from a bar without your shoulders screaming. You can't breathe through your nose while sitting still. These aren't fitness problems. They're operating system failures. Body OS is the rebuild. Tyson Architect built this system after years of breaking his own body and putting it back together. The equation is simple: V = P − O. Vitality equals Power minus Obstruction. Find the obstructions. Remove them. Build the power. Four phases: Restore, Rebuild, Rewire, Express. Ninety days. Day-by-day instructions. The HALT Protocol. The Mucusless Circulation Protocol. Breath Architecture. The 12 Laws of Body OS. This isn't a fitness book. It's a manual for being human.",
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
        text: "Day 45 of the 90-day protocol. My chronic back pain — 3 years of it — is gone. I can squat to the ground for the first time in a decade. I'm 34.",
        author: "Tom S.",
        rating: 5,
        verified: true,
      },
      {
        text: "The V = P − O equation changed how I think about everything. I stopped chasing strength and started removing obstructions. The strength came on its own.",
        author: "Marcus D.",
        rating: 5,
        verified: true,
      },
      {
        text: "I spent £4,000 on physiotherapy and personal trainers over 2 years. This book gave me more in 30 days than all of that combined. The system works.",
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
    tagline: "Something is living inside you. And it's not paying rent.",
    category: "Health",
    shortDescription:
      "Physical parasites in your gut. Digital parasites in your attention. Both are draining your energy, focus, and vitality. This book shows you how to kill both.",
    fullDescription:
      "You're being drained. Not metaphorically. Physically — organisms in your gut are stealing your nutrients and poisoning your system. Digitally — porn, scrolling, and dopamine hijack are stealing your focus and rewiring your brain. The medical establishment won't tell you this. Parasite Conspiracy does. Tyson Architect lays out the complete elimination protocol: identify the physical parasites, cleanse them with herbal treatments, audit your digital drains, and rebuild your attention from scratch. The 21-Day Kill porn recovery system. The Attention Audit. The Mucusless Circulation Protocol for ongoing protection. This book is a wake-up call. The question is whether you'll answer it.",
    insideThisBook: [
      "The hidden epidemic: why parasites are more common than any doctor admits",
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
        text: "The digital parasite section hit me like a truck. I deleted 4 apps after chapter 6. My focus went from nonexistent to razor-sharp in two weeks. I didn't know how much bandwidth I was losing.",
        author: "Chris W.",
        rating: 5,
        verified: true,
      },
      {
        text: "I had parasites. My doctor missed it. The cleanse protocol in this book identified what 3 blood tests didn't. I feel 10 years lighter.",
        author: "Mike R.",
        rating: 5,
        verified: true,
      },
      {
        text: "The 21-Day Kill isn't just about porn. It's about reclaiming your attention from everything that's been stealing it. Day 21 and my mind is mine again.",
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
    tagline: "You've tried to quit 11 times. This is the one that works.",
    category: "Discipline",
    shortDescription:
      "Willpower fails. This protocol doesn't. The 21-Day Kill system with HALT trigger management, the Dark Knight Phase, and the Substitution Principle — the exact framework that works when nothing else has.",
    fullDescription:
      "You've tried to quit. You failed. Not because you're weak — because you were using willpower against a dopamine system that's been engineered to win. Quit Prn Manual doesn't ask you to try harder. It gives you a different system entirely. The neuroscience of why your brain is hijacked. The 21-Day Kill protocol with day-by-day instructions. The Dark Knight Phase — the withdrawal wall that kills most attempts, and exactly how to break through it. HALT trigger management: Hungry, Angry, Lonely, Tired — the four states that make you relapse, and what to do in each one. The Substitution Principle: you can't just remove porn. You have to replace it with something. This book tells you what. The relapse protocol for when you slip. And the identity shift that makes quitting permanent.",
    insideThisBook: [
      "The neuroscience of porn addiction: why willpower fails every time",
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
        text: "Attempt number 12. The only one that stuck. Not because this book is more motivating — because it's more honest. Willpower doesn't work. Systems do. This is the system.",
        author: "Anonymous",
        rating: 5,
        verified: true,
      },
      {
        text: "The HALT protocol alone is worth 10x the price. I finally understand my triggers. Hungry, Angry, Lonely, Tired — I relapse in every single one of those states. Now I know what to do.",
        author: "Steve M.",
        rating: 5,
        verified: true,
      },
      {
        text: "The Substitution Principle is what made it stick. I didn't just quit porn. I replaced it with lifting, cold showers, and reading. Day 60. The urge is gone. Not suppressed — gone.",
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
