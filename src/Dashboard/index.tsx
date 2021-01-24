import * as React from 'react';

import data from './company_collection.json';
import CompanyList from './CompanyList';
import { ICompaniesState, IGraphData } from './types';

class Dashboard extends React.Component {
  state: ICompaniesState = {
    companies: [],
  };

  componentDidMount() {
    this.retrieveData();
  }

  retrieveData() {
    const graphData: IGraphData = data.reduce((acc: IGraphData = {}, cur) => {
      const chartData = acc.chartData ?? {
        labels: {},
        founded: {},
        headquartersCountry: {},
      };

      const founded = cur.founded;
      const labels = cur.industry_label.split(' | ');
      const headquartersCountry = cur.headquarters.split(',')[0];

      labels.forEach(label => {
        if (label) {
          const val = chartData.labels[label] ?? 0;
          chartData.labels[label] = val + 1;
        }
      });

      if (founded && parseFloat(founded) >= 2000) {
        const val = chartData.founded[founded] ?? 0;
        chartData.founded[founded] = val + 1;
      }

      if (headquartersCountry) {
        const val = chartData.headquartersCountry[headquartersCountry] ?? 0;
        chartData.headquartersCountry[headquartersCountry] = val + 1;
      }

      return { chartData };
    }, {});

    // react-window-dynamic-list requires an unique id field.
    this.setState({
      graphData,
      companies: data.map((el, index) => ({ id: index, ...el })),
    });
  }

  render() {
    const { companies, graphData } = this.state;

    return (
      <section className="col">
        <div>
          <h1 className="main-title main-title_companies">
            List of companies:
          </h1>
          <CompanyList data={companies} />
        </div>
      </section>
    );
  }
}

export default Dashboard;
