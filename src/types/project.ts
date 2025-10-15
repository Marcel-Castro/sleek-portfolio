export interface Project {
  title: string;
  description: string;
  image: string;
  video?: string;
  link: string;
  technologies: { name: string; icon: React.ReactNode }[];
  github?: string;
  live: string;
  details: boolean;
  projectDetailsPageSlug: string;
}

export interface ProjectCaseStudyFrontmatter {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  website: string;
  timeline: string;
  role: string;
  team?: string;
  isPublished: boolean;
}

export interface ProjectCaseStudy {
  slug: string;
  frontmatter: ProjectCaseStudyFrontmatter;
  content: string;
}

export interface ProjectCaseStudyPreview {
  slug: string;
  frontmatter: ProjectCaseStudyFrontmatter;
}
