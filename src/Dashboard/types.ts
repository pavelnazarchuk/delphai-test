export interface ICompanyData {
  name: string;
  founded: string;
  description: string;
  url: string;
  headquarters: string;
  industry_label: string;
  id: number;
}

type GraphField = {
  [key: string]: number;
};
export interface IGraphData {
  chartData?: {
    labels: GraphField;
    founded: GraphField;
    headquartersCountry: GraphField;
  };
}

export interface ICompaniesState {
  companies: ICompanyData[];
  graphData?: IGraphData;
}
