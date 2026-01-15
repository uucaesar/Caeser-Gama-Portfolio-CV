import { CVData } from './types';

export const CAESER_CV: CVData = {
  name: "CAESER GAMA",
  title: "WEB & GRAPHIC DESIGNER | DIGITAL SOLUTIONS SPECIALIST",
  summary: "A creative and technical Freelance Web & Graphic Designer with a background in Software Engineering. I partner with small local businesses to build their digital presence through custom web development, brand identity design, and digital marketing. I possess a unique advantage in business process automation—using AI and low-code tools to create efficient, scalable solutions for clients.",
  contact: {
    dob: "16-04-2003",
    nationality: "South African",
    email: "gamacaesar02@gmail.com",
    phone: "066 487 8968",
    location: "Mbombela, Mpumalanga"
    // Portfolio link removed
  },
  experience: [
    {
      company: "FREELANCE",
      role: "Web & Graphic Designer",
      period: "2022 – Present",
      description: "Design and deploy responsive, user-friendly websites. Create complete branding packages including identity and strategy.",
      details: [
        "Web Development: Design and deploy responsive, user-friendly websites.",
        "Brand Identity: Create complete branding packages, identity, and direction.",
        "Marketing & Growth: Manage paid advertising campaigns to ensure growth.",
        "Business Automation: Utilize n8n, Make.com, and WhatsApp Business API."
      ]
    }
  ],
  education: [
    {
      institution: "EDUVOS (Mbombela Campus)",
      degree: "Bachelor of Science in IT (Software Engineering)",
      year: "Completed 1st Year 2022"
    },
    {
      institution: "PENRYN COLLEGE",
      degree: "National Senior Certificate (Matric)",
      year: "Completed 2021"
    }
  ],
  skills: [
    {
      title: "Web Development",
      skills: ["React JS", "Python (Flask)", "JavaScript", "HTML / CSS", "C++", "GitHub"]
    },
    {
      title: "Design & UI/UX",
      skills: ["Figma", "Graphic Design", "Brand Identity"]
    },
    {
      title: "Automation & AI",
      skills: ["n8n", "Make.com", "Zapier", "Google AI Studio", "WhatsApp Business API"]
    },
    {
      title: "Digital Marketing",
      skills: ["Google Ads", "Meta Ads", "Meta Business Suite", "Social Media Strategy"]
    }
  ],
  languages: [
    { name: "English", proficiency: 5, label: "Professional Proficiency" },
    { name: "Siswati", proficiency: 5, label: "Native Proficiency" }
  ]
};

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Minimalist Brand Identity",
    category: "Branding",
    image: "https://picsum.photos/seed/arch1/800/1000"
  },
  {
    id: 2,
    title: "E-Commerce Web Design",
    category: "Web Development",
    image: "https://picsum.photos/seed/arch2/800/800"
  },
  {
    id: 3,
    title: "Editorial Fashion Layout",
    category: "Print Design",
    image: "https://picsum.photos/seed/arch3/800/1000"
  },
  {
    id: 4,
    title: "Tech Startup Dashboard",
    category: "UI/UX",
    image: "https://picsum.photos/seed/arch4/800/800"
  },
  {
    id: 5,
    title: "Luxury Product Packaging",
    category: "Packaging",
    image: "https://picsum.photos/seed/arch5/800/1000"
  },
  {
    id: 6,
    title: "Urban Photography Series",
    category: "Photography",
    image: "https://picsum.photos/seed/arch6/800/800"
  },
  {
    id: 7,
    title: "Urban Photography Series",
    category: "Photography",
    image: "https://picsum.photos/seed/arch6/800/800"
  }  
];