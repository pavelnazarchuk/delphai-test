import * as React from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { GraphField } from '../types';
import { IProps, IState } from './types';
import { composeData } from './utils';

import './style.css';
import 'react-tabs/style/react-tabs.css';

/**
 * Graph component which represents industry labels,
 * companies founded from 2000 and countries with more than 10 headquarters
 */
class CompanyGraph extends React.Component<IProps> {
  state: IState = {};

  componentDidMount() {
    const { data } = this.props;
    const labels = data?.labels;
    const founded = data?.founded;
    const headquartersCountry = data?.headquartersCountry;
    const filteredHeadquarters = Object.keys(headquartersCountry!).reduce(
      (acc: GraphField = {}, cur) => {
        const amountOfHeadquarters = headquartersCountry![cur];
        if (amountOfHeadquarters < 10) return acc;
        acc[cur] = amountOfHeadquarters;
        return acc;
      },
      {},
    );

    const foundedData = composeData(founded);
    const labelsData = composeData(labels);
    const headquartersCountryData = composeData(filteredHeadquarters);

    this.setState({ foundedData, labelsData, headquartersCountryData });
  }

  render() {
    const { foundedData, labelsData, headquartersCountryData } = this.state;

    return (
      <div>
        <Tabs>
          <TabList>
            <Tab>
              <p className="chart-title">Areas</p>
            </Tab>
            <Tab>
              <p className="chart-title">Companies</p>
            </Tab>
            <Tab>
              <p className="chart-title">Headquarters</p>
            </Tab>
          </TabList>
          <TabPanel>
            <p className="chart-subtitle">Industry labels</p>
            {labelsData && (
              <Doughnut
                data={labelsData}
                height={220}
                options={{
                  legend: {
                    position: 'bottom',
                  },
                }}
              />
            )}
          </TabPanel>
          <TabPanel>
            <p className="chart-subtitle">Companies founded from 2000</p>
            {foundedData && (
              <Line
                data={foundedData}
                options={{
                  legend: {
                    display: false,
                  },
                }}
              />
            )}
          </TabPanel>
          <TabPanel>
            <p className="chart-subtitle">
              Contries with more than 10 headquarters
            </p>
            {headquartersCountryData && (
              <Bar
                data={headquartersCountryData}
                options={{
                  legend: {
                    display: false,
                  },
                }}
              />
            )}
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default CompanyGraph;
