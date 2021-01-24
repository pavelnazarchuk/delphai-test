import * as React from 'react';
import DynamicList, { createCache } from 'react-window-dynamic-list';

import data from './company_collection.json';
import CompanyCard from './CompanyCard';
import { ICompaniesState } from './types';

const cache = createCache();

class Companies extends React.Component {
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
      <div className="col">
        <div>
          <h1 className="main-title">List of companies:</h1>
          <DynamicList cache={cache} height={500} width={600} data={companies}>
            {CompanyCard}
          </DynamicList>
        </div>
      </div>
    );
  }
}

export default Companies;
