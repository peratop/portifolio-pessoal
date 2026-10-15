export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'Frontend' | 'Backend & APIs' | 'UI/UX Design' | 'Design Gráfico';
  tag: string;
  year: string;
  role: string;
  client: string;
  summary: string;
  fullDescription: string;
  techStack: string[];
  image: string;
  demoUrl?: string;
  repoUrl: string;
  behanceUrl?: string;
  technicalHighlights: string[];
  architecture: {
    frontend: string;
    backend: string;
    database: string;
  };
}

export interface CapabilityGroup {
  category: string;
  items: {
    name: string;
    level: string;
    description: string;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  serviceType: string;
  subject: string;
  message: string;
}
