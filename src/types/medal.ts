
export interface CountryMedals {
  id: string;
  country: string;
  countryCode: string;
  flag: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
}

export type SortField = 'total' | 'gold' | 'silver' | 'bronze' | 'country';
export type SortOrder = 'asc' | 'desc';