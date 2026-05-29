export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  subservices: string[];
  gradient: string;
  badge?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  stats: {
    label: string;
    before: string;
    after: string;
  };
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  gradient: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
}
