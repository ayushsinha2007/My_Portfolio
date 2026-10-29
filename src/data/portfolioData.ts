import { PersonalInfo, SkillItem, ProjectItem, MilestoneItem, TrainingAreaItem, SideQuestItem } from '../types';

export const personalInfo: PersonalInfo = {
  fullName: "Ayush Kumar Sinha",
  displayTitle: "Computer Science Student | Aspiring AI Engineer",
  institution: "Newton School of Technology, Ajeenkya DY Patil University",
  academicBatch: "2026",
  field: "Computer Science and Technology",
  careerAspiration: "AI Engineer",
  primaryEmail: "ayushsinhajsg2007@gmail.com",
  secondaryEmail: "ayushsinha262007@gmail.com",
  preferredPublicEmail: "primary",
  phone: "9438164564",
  showPhoneByDefault: false, // Set to true whenever you wish to reveal phone publicly
  linkedIn: "https://www.linkedin.com/in/ayush-kumar-sinha-43ab89315/",
  github: "https://github.com/ayushsinha2007",
  instagram: "https://www.instagram.com/ayush_sinha_108/?hl=en",
  profilePhoto: "/assets/AyushLv-web.jpg",
  tagline: "Every great story begins with a single line of code.",
  heroHeadline: "THE NEXT ARC STARTS HERE.",
  heroSupportingCopy: "I'm a curious builder exploring programming, artificial intelligence, and creative technology. I learn by building, experiment with new ideas, and grow with every project I take on.",
  philosophyStatement: "Stay curious. Build consistently. Learn from every failure. Keep moving to the next arc.",
  nextArcStatement: "The goal isn't to know everything today. It's to become better at building tomorrow."
};

export const skillsData: SkillItem[] = [
  // Programming
  {
    id: "python",
    name: "Python",
    category: "Programming",
    level: "PRACTISING",
    iconName: "Code",
    description: "Core programming, scripting, data handling, and exploring algorithms as the foundation for modern AI and ML systems.",
    journeyNote: "Primary language for algorithmic problem-solving and AI experimentation.",
    element: "water"
  },
  {
    id: "c-lang",
    name: "C Fundamentals",
    category: "Programming",
    level: "BUILDING WITH",
    iconName: "Binary",
    description: "Deep dive into memory management, pointers, low-level data structures, and computer architecture fundamentals.",
    journeyNote: "Sharpening core hardware and computational fundamentals through academic coursework.",
    element: "lightning"
  },
  {
    id: "java-lang",
    name: "Java Fundamentals",
    category: "Programming",
    level: "LEARNING",
    iconName: "Coffee",
    description: "Object-oriented design principles, class hierarchies, interfaces, and modular software structuring.",
    journeyNote: "Developing structured OOP paradigms and robust software architecture habits.",
    element: "wind"
  },

  // Development Tools
  {
    id: "git-github",
    name: "Git & GitHub",
    category: "Development Tools",
    level: "BUILDING WITH",
    iconName: "GitBranch",
    description: "Version control workflows, commit etiquette, branching, pull requests, and collaborative repository management.",
    journeyNote: "Central to all collaborative builds and hackathon development pipelines.",
    element: "fire"
  },
  {
    id: "vscode",
    name: "Visual Studio Code",
    category: "Development Tools",
    level: "BUILDING WITH",
    iconName: "Layout",
    description: "Customized development environment configured with linters, debuggers, extensions, and modern CLI tools.",
    journeyNote: "Primary IDE workspace for web, scripting, and computer vision projects.",
    element: "lightning"
  },
  {
    id: "cli",
    name: "Command-Line Fundamentals",
    category: "Development Tools",
    level: "PRACTISING",
    iconName: "Terminal",
    description: "Unix shell navigation, command pipelines, automation scripts, and package management workflows.",
    journeyNote: "Harnessing terminal efficiency to streamline daily engineering workflows.",
    element: "wind"
  },
  {
    id: "macos-dev",
    name: "macOS Development Environment",
    category: "Development Tools",
    level: "BUILDING WITH",
    iconName: "Apple",
    description: "Optimized UNIX-based workflow utilizing zsh, Homebrew, local environments, and native developer tooling.",
    journeyNote: "Personal daily driver for building and deploying engineering experiments.",
    element: "void"
  },

  // Databases
  {
    id: "mysql",
    name: "MySQL Fundamentals",
    category: "Databases",
    level: "PRACTISING",
    iconName: "Database",
    description: "Relational database concepts, schema structuring, primary/foreign keys, joins, and data querying with SQL.",
    journeyNote: "Understanding structured data persistence and database relationships.",
    element: "water"
  },

  // Computer Vision
  {
    id: "opencv",
    name: "Exploring OpenCV",
    category: "Computer Vision",
    level: "LEARNING",
    iconName: "Eye",
    description: "Image processing pipelines, reading matrix feeds, video capture frames, and computational vision fundamentals.",
    journeyNote: "Stepping stone into perception models and real-time computer vision.",
    element: "lightning"
  },
  {
    id: "hsv-color",
    name: "HSV Colour Spaces",
    category: "Computer Vision",
    level: "LEARNING",
    iconName: "Palette",
    description: "Analyzing hue, saturation, and value representations to achieve lighting-invariant computer vision processing.",
    journeyNote: "Key conceptual breakthrough for robust environmental color segmentation.",
    element: "fire"
  },
  {
    id: "color-detection",
    name: "Colour Detection & Tracking",
    category: "Computer Vision",
    level: "LEARNING",
    iconName: "Crosshair",
    description: "Applying spatial masks, finding visual contours, and tracking target elements across live webcam streams.",
    journeyNote: "Practical implementation bridging computer vision concepts with robotics.",
    element: "water"
  },
  {
    id: "feature-tracking",
    name: "Introductory Feature Tracking",
    category: "Computer Vision",
    level: "LEARNING",
    iconName: "Scan",
    description: "Understanding keypoints, corner detection, and basic optical motion markers in sequential frames.",
    journeyNote: "Laying the analytical bedrock for advanced AI perception models.",
    element: "void"
  },

  // Creative Skills
  {
    id: "video-editing",
    name: "Video Editing Exploration",
    category: "Creative Skills",
    level: "PRACTISING",
    iconName: "Film",
    description: "Visual pacing, audio-visual rhythm, cut transitions, and cinematic storytelling through timeline editing.",
    journeyNote: "Translating cinematic inspiration into dynamic creative presentations.",
    element: "fire"
  },
  {
    id: "animation-interest",
    name: "Interest in Animation",
    category: "Creative Skills",
    level: "LEARNING",
    iconName: "Sparkles",
    description: "Appreciating frame pacing, fluid keyframe mechanics, anime motion arcs, and interactive web choreography.",
    journeyNote: "Direct creative driver behind the motion aesthetic of this portfolio.",
    element: "water"
  },
  {
    id: "sketching",
    name: "Sketching & Visual Expression",
    category: "Creative Skills",
    level: "PRACTISING",
    iconName: "PenTool",
    description: "Freehand character sketches, compositional balance, visual perspective, and illustrative creativity.",
    journeyNote: "A grounding offline side quest that trains eye for detail and design harmony.",
    element: "wind"
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "firstpatch",
    title: "FIRSTPATCH — OPEN-SOURCE ISSUE FINDER",
    subtitle: "PR Pumpkins HackDay 2026 Collaboration",
    category: "Open Source Tool & Developer Discovery",
    description: "An open-source contribution discovery tool designed to help developers find beginner-friendly issues that match their skills, with explanations of why each issue may be a good fit.",
    highlights: [
      "Built collaboratively in the PR Pumpkins HackDay 2026 hackathon context",
      "Features skill and category filters tailored to developer competencies",
      "Includes GitHub username input for profile-aware exploration",
      "Presents contextual recommendations and evaluated issue breakdowns to remove the barrier of entry for first-time open-source contributors"
    ],
    technologies: ["JavaScript / Web Stack", "GitHub API Workflows", "Filter Algorithms", "Open Source UX"],
    statusText: "Live Demo Available · Open Source Repository",
    liveUrl: "https://open-source-contribution-finder--ayushsinhajsg20.replit.app/",
    repoUrl: "https://github.com/ayushsinha2007/PR_Pumpkins_HackDay2026",
    primaryActionLabel: "OPEN LIVE PROJECT",
    secondaryActionLabel: "EXPLORE SOURCE CODE",
    themeColor: "cyan",
    screenshotAlt: "FirstPatch Open-Source Contribution Finder interface"
  },
  {
    id: "mydreamvacation",
    title: "MY DREAM VACATION",
    subtitle: "Interactive Travel Exploration Web Application",
    category: "Travel & Discovery Web Experience",
    description: "A travel-themed web project exploring the idea of discovering and planning dream destinations.",
    highlights: [
      "Focused on destination curation and intuitive travel daydreaming",
      "Clean visual navigation structured for exploring global getaway spots",
      "Deployed on Vercel with responsive design across mobile and desktop devices",
      "Explores modern frontend layout principles and travel catalog presentation"
    ],
    technologies: ["React / Frontend", "Responsive UI", "Vercel Deployment", "Visual Travel Layout"],
    statusText: "Deployed Live on Vercel",
    liveUrl: "https://nirman-mydreamvacation.vercel.app/",
    primaryActionLabel: "EXPLORE MY DREAM VACATION",
    themeColor: "ember",
    screenshotAlt: "My Dream Vacation travel discovery platform"
  }
];

export const milestonesData: MilestoneItem[] = [
  {
    id: "nst-adypu",
    title: "Newton School of Technology",
    organization: "Ajeenkya DY Patil University",
    roleOrContext: "Undergraduate Computer Science & Technology",
    dateOrBatch: "Academic Batch 2026",
    description: "Joined the 2026 academic cohort to pursue a rigorous foundation in computer science and technology, collaborating with peers on hands-on software development and algorithmic problem-solving.",
    badge: "ACADEMIC MILESTONE",
    type: "academic"
  },
  {
    id: "hackday-2026",
    title: "PR Pumpkins HackDay 2026",
    organization: "Hackathon Build Sprint",
    roleOrContext: "FirstPatch Project Developer",
    dateOrBatch: "HackDay 2026",
    description: "Collaborated under rapid hackathon constraints to design and build 'FirstPatch'—an open-source issue finder lowering the barrier of entry for junior developers to start contributing to repositories.",
    badge: "HACKATHON BUILD",
    type: "hackathon"
  },
  {
    id: "ipmune",
    title: "IPMUNE — Model United Nations",
    organization: "United Nations Women Committee",
    roleOrContext: "Delegate Representing Hungary",
    dateOrBatch: "Diplomatic Delegation",
    description: "Participated in an intense multilateral simulation representing Hungary in the UN Women committee, articulating policy stances on establishing robust judicial mechanisms to combat violence against women.",
    badge: "DIPLOMACY & ADVOCACY",
    type: "diplomacy"
  },
  {
    id: "robotics-cv",
    title: "Robotics & Computer Vision Lab",
    organization: "Technical Exploration",
    roleOrContext: "Vision & Perception Exploration",
    dateOrBatch: "Hands-on Exploration",
    description: "Explored introductory robotics-related programming concepts, applying OpenCV pipelines, HSV color-space thresholding, and live webcam feature tracking to understand computer vision perception.",
    badge: "TECHNICAL LAB",
    type: "technical"
  }
];

export const trainingAreasData: TrainingAreaItem[] = [
  {
    id: "train-prog",
    title: "Programming Fundamentals",
    status: "ACTIVE TRAINING",
    description: "Strengthening core programming fundamentals and developing deeper algorithmic problem-solving habits in Python and C.",
    focusTopics: ["Data Structures & Algorithms", "Memory & Pointer Arithmetic", "Modular Architecture", "Clean Code Disciplines"],
    icon: "Terminal",
    elementAccent: "cyan"
  },
  {
    id: "train-dev",
    title: "Software Development",
    status: "ACTIVE TRAINING",
    description: "Learning to build useful, reliable projects and understanding practical real-world software engineering workflows.",
    focusTopics: ["Git Branching & PR Workflows", "API Integration & Consumption", "Responsive Web Interfaces", "Deployment & CI/CD Basics"],
    icon: "Laptop",
    elementAccent: "water"
  },
  {
    id: "train-ai",
    title: "Artificial Intelligence",
    status: "NEXT ARC PREPARATION",
    description: "Working towards a deeper theoretical and practical understanding of artificial intelligence, machine learning models, and intelligent agents.",
    focusTopics: ["Mathematical Foundations for ML", "Neural Network Principles", "AI Architecture Exploration", "Agentic Systems & Automation"],
    icon: "Cpu",
    elementAccent: "ember"
  },
  {
    id: "train-cv",
    title: "Computer Vision",
    status: "ACTIVE LAB",
    description: "Exploring OpenCV, colour detection, HSV colour spaces, and introductory feature-tracking concepts for visual intelligence.",
    focusTopics: ["OpenCV Frame Processing", "HSV Color Space Segmentation", "Contour & Object Tracking", "Spatial Feature Point Mapping"],
    icon: "Eye",
    elementAccent: "violet"
  }
];

export const sideQuestsData: SideQuestItem[] = [
  {
    id: "quest-anime",
    title: "Anime & Manga",
    category: "Storytelling & Visual Motion",
    description: "Drawn to compelling world-building, epic character arcs, and masterclass animation direction—with Pokémon and Demon Slayer standing among personal favorites.",
    icon: "Tv",
    elementTag: "WATER & FLAME"
  },
  {
    id: "quest-sketching",
    title: "Sketching",
    category: "Artistic Expression",
    description: "Translating imagination onto paper with pencils and pens. Freehand sketches cultivate observational patience, line control, and composition balance.",
    icon: "PenTool",
    elementTag: "CREATIVE FOCUS"
  },
  {
    id: "quest-cooking",
    title: "Cooking",
    category: "Culinary Alchemy",
    description: "Experimenting with recipes, balancing flavors, and appreciating the procedural precision of culinary craft—much like debugging a delicate script.",
    icon: "Utensils",
    elementTag: "EXPLORATION"
  },
  {
    id: "quest-travelling",
    title: "Travelling",
    category: "Real-World Exploration",
    description: "Stepping out to discover new landscapes, vibrant cultures, and fresh perspectives that reset the mind and inspire broad-horizon thinking.",
    icon: "Compass",
    elementTag: "ADVENTURE MAP"
  },
  {
    id: "quest-reading",
    title: "Reading",
    category: "Knowledge Quest",
    description: "Absorbing written thoughts across disciplines, expanding vocabulary, and discovering concepts that challenge existing mental models.",
    icon: "BookOpen",
    elementTag: "INTELLECT"
  },
  {
    id: "quest-badminton",
    title: "Badminton",
    category: "Athletics & Agility",
    description: "Fast-paced court movement, razor-sharp reflexes, tactical shot placements, and physical energy reset after long coding sessions.",
    icon: "Activity",
    elementTag: "AGILITY & STAMINA"
  },
  {
    id: "quest-video-editing",
    title: "Video Editing",
    category: "Digital Craft",
    description: "Piecing together clips, shaping visual rhythm with sound design, color grading, and timing cuts to evoke emotional narrative resonance.",
    icon: "Film",
    elementTag: "CINEMATIC ARC"
  }
];
