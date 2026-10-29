export type SkillLevel = 'LEARNING' | 'PRACTISING' | 'BUILDING WITH';

export interface SkillItem {
  id: string;
  name: string;
  category: 'Programming' | 'Development Tools' | 'Databases' | 'Computer Vision' | 'Creative Skills';
  level: SkillLevel;
  iconName: string;
  description: string;
  journeyNote: string;
  element: 'water' | 'fire' | 'lightning' | 'wind' | 'void';
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  statusText: string;
  liveUrl?: string;
  repoUrl?: string;
  primaryActionLabel: string;
  secondaryActionLabel?: string;
  themeColor: 'cyan' | 'blue' | 'ember' | 'indigo';
  screenshotAlt: string;
}

export interface MilestoneItem {
  id: string;
  title: string;
  organization: string;
  roleOrContext: string;
  dateOrBatch: string;
  description: string;
  badge: string;
  type: 'academic' | 'hackathon' | 'diplomacy' | 'technical';
}

export interface TrainingAreaItem {
  id: string;
  title: string;
  status: string;
  description: string;
  focusTopics: string[];
  icon: string;
  elementAccent: 'cyan' | 'water' | 'ember' | 'violet';
}

export interface SideQuestItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  elementTag: string;
}

export interface PersonalInfo {
  fullName: string;
  displayTitle: string;
  institution: string;
  academicBatch: string;
  field: string;
  careerAspiration: string;
  primaryEmail: string;
  secondaryEmail: string;
  preferredPublicEmail: 'primary' | 'secondary';
  phone: string;
  showPhoneByDefault: boolean;
  linkedIn: string;
  github: string;
  instagram: string;
  profilePhoto: string;
  tagline: string;
  heroHeadline: string;
  heroSupportingCopy: string;
  philosophyStatement: string;
  nextArcStatement: string;
}
