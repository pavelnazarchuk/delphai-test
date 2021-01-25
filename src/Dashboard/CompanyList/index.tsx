import * as React from 'react';
import DynamicList, { createCache } from 'react-window-dynamic-list';

import _throttle from 'lodash.throttle';

import CompanyCard from '../CompanyCard';
import { IProps, IState } from './types';

const cache = createCache();

/**
 * List of all companies with all data about every a company.
 */
class CompanyList extends React.Component<IProps> {
  state: IState = {
    height: 600,
  };

  componentDidMount() {
    this.setState({
      height: window.innerHeight - 96,
    });
    window.addEventListener('resize', this.handleWindowHeight());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowHeight());
  }

  handleWindowHeight = () =>
    _throttle(() => {
      this.setState({
        height: window.innerHeight - 96,
      });
    }, 100);

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
