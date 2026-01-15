export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  portfolio?: string;
  dob: string;
  nationality: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description?: string;
  details?: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
  status?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Language {
  name: string;
  proficiency: number; // 1-5
  label: string;
}

export interface CVData {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  languages: Language[];
}