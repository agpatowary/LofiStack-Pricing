import { ReactNode } from "react";

export type CalculatorType = 'web_pages' | 'ad_spend_launch' | 'ad_spend_scale' | 'ad_spend_excel';

export interface Calculator {
  type: CalculatorType;
  label: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  unit?: string;
}

export interface Deliverable {
  icon: string;
  title: string;
  description: string;
  tooltip?: string;
}

export interface PackSelector {
  limit: number;
  options: string[];
}

export interface Feature {
    text: string;
    tooltip?: string;
}

export interface Tier {
  name: string;
  price: string;
  timeframe?: string;
  goal?: string;
  description: string;
  features: (string | Feature)[];
  limitations?: string;
  calculator?: Calculator;
  deliverables?: Deliverable[];
  packSelector?: PackSelector;
  tooltip?: string;
}

export interface InfoBlock {
  title: string;
  content: string | string[] | ReactNode;
  example?: string;
}

export interface Service {
  name: string;
  description: string;
  tiers?: Tier[];
  details?: string[];
  pricing?: string[];
  infoBlocks?: InfoBlock[];
  tooltip?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  services: Service[];
}

export interface Pillar {
  id: string;
  name: string;
  description?: string;
  categories: Category[];
}

export interface SurveyAnswers {
  businessType: string;
  primaryGoal: string;
  budget: string;
  challenges: string;
}

export interface AIRecommendation {
  serviceName: string;
  tier: string;
  justification: string;
}

export type ViewState = 'pricing' | 'survey' | 'loading' | 'results';

export interface Filter {
  type: 'all' | 'pillar' | 'category';
  id: string | null;
}