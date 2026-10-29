# AYUSH: THE NEXT ARC
### An Immersive Pokémon × Demon Slayer Inspired Developer Portfolio

A personal portfolio built for **Ayush Kumar Sinha**, Computer Science student at **Newton School of Technology, Ajeenkya DY Patil University** and Aspiring **AI Engineer**.

---

## ⚡ Creative Concept

- **Protagonist Narrative**: "Every great story begins with a single line of code."
- **Pokémon Influence**: Pokédex-inspired database dossier, collectible skill progression cards, adventure quest log, discovery HUDs.
- **Demon Slayer Influence**: Atmospheric midnight-navy canvas, fluid water-breathing wave motions, restrained ember particles, Japanese-inspired editorial chapter transitions.
- **Authenticity**: 100% verifiable milestones, genuine skill proficiency tiers (`LEARNING`, `PRACTISING`, `BUILDING WITH`), and zero fabricated metrics or copyrighted assets.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Bundler & Dev Server**: Vite
- **Styling**: Tailwind CSS + Custom Anime Keyframe Animations
- **Icons**: Lucide React
- **Typography**: Space Grotesk (Headings), Inter (Body), JetBrains Mono (Code/HUD)
- **Visuals**: Dynamic Canvas Particle System + Animated Fluid SVG Waves

---

## 🚀 Running the Project Locally

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Start the local development server
npm run dev

# 3. Build for production deployment (e.g. Vercel, Netlify, GitHub Pages)
npm run build

# 4. Preview production build
npm run preview
```

The dev server will run at: `http://localhost:3000/`

---

## ⚙️ How to Update Your Information

All your personal details, project links, skill categories, milestones, and settings are organized inside a single configuration file:

📁 **`src/data/portfolioData.ts`**

You can easily modify:
- **`personalInfo`**: Name, emails, university, tagline, social links.
- **`showPhoneByDefault`**: Set to `true` whenever you want your phone number displayed publicly without requiring the user to click "Reveal Number".
- **`preferredPublicEmail`**: Switch between `'primary'` or `'secondary'` email.
- **`profilePhoto`**: Located in `public/assets/AyushLv.jpg` (or `AyushLv-web.jpg`).
- **`skillsData`**: Add new skills or update levels (`LEARNING` / `PRACTISING` / `BUILDING WITH`).
- **`projectsData`**: Add new projects, live demos, and GitHub links.
- **`milestonesData`**: Add future hackathons, academic awards, and achievements.
- **`trainingAreasData`**: Update your current learning focus areas.
- **`sideQuestsData`**: Add or customize your personal hobbies and interests.

---

## 📂 Project Directory Structure

```
Portfolio/
├── public/
│   └── assets/
│       ├── AyushLv.jpg       # Full-resolution converted profile photograph
│       └── AyushLv-web.jpg   # Web-optimized profile photograph
├── src/
│   ├── types/
│   │   └── index.ts          # TypeScript models and interfaces
│   ├── data/
│   │   └── portfolioData.ts  # Master personal data & configuration file
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.tsx             # Sticky glassmorphic HUD header & mobile drawer
│   │   │   ├── ScrollProgress.tsx     # Page-scroll progress indicator
│   │   │   ├── SectionHeader.tsx      # Anime chapter markers with kanji motifs
│   │   │   └── ElementalBackground.tsx# Water waves & ember particle canvas
│   │   └── sections/
│   │       ├── HeroSection.tsx        # Anime Opening: Protagonist HUD & photo
│   │       ├── AboutSection.tsx       # Chapter 01: The Protagonist & Philosophy
│   │       ├── DossierSection.tsx     # Pokédex Database Profile & Academics
│   │       ├── SkillsSection.tsx      # Chapter 02: Interactive Skill Tree & Scanner
│   │       ├── ProjectsSection.tsx    # Chapter 03: FirstPatch & My Dream Vacation
│   │       ├── TimelineSection.tsx    # Chapter 04: Adventure Milestones Archive
│   │       ├── TrainingSection.tsx    # Chapter 05: Currently in Training Dashboard
│   │       ├── SideQuestsSection.tsx  # Life Outside Code: 7 Personal Quests
│   │       ├── ContactSection.tsx     # Final Chapter: Form, Mailto, Socials
│   │       └── Footer.tsx             # Epilogue: Signature & Return to Top
│   ├── App.tsx               # Root application coordinator
│   ├── index.css             # Tailwind directives & elemental animation keyframes
│   └── main.tsx              # Application entry point
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

*"Stay curious. Build consistently. Learn from every failure. Keep moving to the next arc."*
