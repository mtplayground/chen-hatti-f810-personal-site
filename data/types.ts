export type DateString = string;
export type YearString = string;
export type IconName = string;

export interface ContentLink {
  label: string;
  href: string;
  external?: boolean;
  ariaLabel?: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface SocialLink extends ContentLink {
  platform: string;
  username?: string;
  icon?: IconName;
}

export interface NavItem extends ContentLink {
  activeMatch?: string;
}

export interface Profile {
  name: string;
  title: string;
  affiliation: string;
  location?: string;
  email?: string;
  bio: string[];
  researchIntro: string;
  researchInterests: string[];
  avatar: ImageAsset;
  heroImage: ImageAsset;
  cvHref: string;
  socials: SocialLink[];
}

export interface NewsItem {
  id: string;
  date: DateString;
  title: string;
  description?: string;
  venue?: string;
  href?: string;
  links?: ContentLink[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  location?: string;
  startDate: DateString;
  endDate?: DateString;
  logo?: ImageAsset;
  description?: string;
  highlights?: string[];
  links?: ContentLink[];
}

export interface AwardItem {
  id: string;
  title: string;
  organization: string;
  year: YearString;
  description?: string;
  logo?: ImageAsset;
  links?: ContentLink[];
}

export interface PublicationAuthor {
  name: string;
  isSelf?: boolean;
}

export type PublicationType =
  | "conference"
  | "journal"
  | "preprint"
  | "workshop"
  | "thesis"
  | "other";

export interface PublicationLinks {
  pdf?: string;
  code?: string;
  bibtex?: string;
  project?: string;
  doi?: string;
  slides?: string;
  video?: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: PublicationAuthor[];
  venue: string;
  year: YearString;
  type: PublicationType;
  selected?: boolean;
  abstract?: string;
  thumbnail?: ImageAsset;
  tags?: string[];
  links?: PublicationLinks;
}

export interface BlogItem {
  id: string;
  title: string;
  slug: string;
  date: DateString;
  excerpt: string;
  tags?: string[];
  readingTime?: string;
  coverImage?: ImageAsset;
  href?: string;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  location?: string;
  startDate: DateString;
  endDate?: DateString;
  current?: boolean;
  description?: string;
  highlights?: string[];
  logo?: ImageAsset;
  links?: ContentLink[];
}

export interface TeachingItem {
  id: string;
  courseTitle: string;
  courseCode?: string;
  role: string;
  institution: string;
  term?: string;
  year?: YearString;
  description?: string;
  links?: ContentLink[];
}

export interface ServiceItem {
  id: string;
  title: string;
  organization?: string;
  role?: string;
  year?: YearString;
  description?: string;
  links?: ContentLink[];
}

export interface ServiceGroup {
  id: string;
  title: string;
  icon?: IconName;
  items: ServiceItem[];
}

export interface SiteContent {
  profile: Profile;
  nav: NavItem[];
  news: NewsItem[];
  education: EducationItem[];
  awards: AwardItem[];
  publications: PublicationItem[];
  blogs: BlogItem[];
  experience: ExperienceItem[];
  teaching: TeachingItem[];
  services: ServiceGroup[];
}
