export interface Municipality {
  id: string;
  name: string;
  canton: Canton;
  survey_indicators: Indicator[];
  fact_indicators: Indicator[];
}

export interface Canton {
  name: string;
  abbreviation: string;
}

export interface Indicator {
  name: string;
  value: number;
  subject: string;
  sector: Sector;
}

export type Sector = 'social' | 'environment' | 'economy';
export type Source = 'survey_indicators' | 'fact_indicators';
