import * as React from 'react';

import data from './company_collection.json';
import CompanyList from './CompanyList';
import { ICompaniesState } from './types';

class Dashboard extends React.Component {
  state: ICompaniesState = {
    companies: [],
  };

  componentDidMount() {
    this.retrieveData();
  }

  retrieveData() {
    // react-window-dynamic-list requires an unique id field.
    this.setState({
      companies: data.map((el, index) => ({ id: index, ...el })),
    });
  }

  render() {
    const { companies } = this.state;

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
