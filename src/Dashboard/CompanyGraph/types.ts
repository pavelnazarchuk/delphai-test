import { ChartData } from 'react-chartjs-2';

import * as chartjs from 'chart.js';

import { IGraphData } from '../types';

export interface IProps {
  data: IGraphData['chartData'];
}

export interface IState {
  foundedData?: ChartData<chartjs.ChartData>;
  labelsData?: ChartData<chartjs.ChartData>;
  headquartersCountryData?: ChartData<chartjs.ChartData>;
}
