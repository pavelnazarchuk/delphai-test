import { CacheType } from 'react-window-dynamic-list';

export interface ICompanyData {
  name: string;
  founded: string;
  description: string;
  url: string;
  headquarters: string;
  industry_label: string;
  id: number;
}

export interface ICompaniesState {
  companies: ICompanyData[];
  cache?: CacheType;
}
