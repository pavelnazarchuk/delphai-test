import { ChartData } from 'react-chartjs-2';

import * as chartjs from 'chart.js';

import { GraphField } from '../types';

export const composeData = (data?: GraphField): ChartData<chartjs.ChartData> =>
  Object.keys(data!).reduce((acc: any = {}, cur) => {
    if (!acc.labels) {
      acc.labels = [];
      acc.datasets = [
        {
          data: [],
          backgroundColor: [],
          hoverBackgroundColor: [],
        },
      ];
    }

    // this random color function took from here: https://css-tricks.com/snippets/javascript/random-hex-color/
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    acc.labels.push(cur);
    acc.datasets[0].data.push(data![cur]);
    acc.datasets[0].backgroundColor.push(`#${randomColor}`);

    return acc;
  }, {});
