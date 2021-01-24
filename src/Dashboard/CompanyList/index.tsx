import * as React from 'react';
import DynamicList, { createCache } from 'react-window-dynamic-list';

import CompanyCard from '../CompanyCard';
import { IProps, IState } from './types';

const cache = createCache();
class CompanyList extends React.Component<IProps> {
  state: IState = {
    height: 600,
  };

  render() {
    const { height } = this.state;
    const { data } = this.props;

    return (
      <DynamicList cache={cache} height={height} width={600} data={data}>
        {CompanyCard(data)}
      </DynamicList>
    );
  }
}

export default CompanyList;
