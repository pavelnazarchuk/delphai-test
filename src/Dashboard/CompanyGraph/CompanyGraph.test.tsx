import React from 'react';

import { render } from '@testing-library/react';

import CompanyGraph from './index';

test('CompanyGraph renders', () => {
  const fakeData = {
    founded: {
      '2000': 76,
    },
    headquartersCountry: {
      Russia: 10,
    },
    labels: {
      Agriculture: 49,
    },
  };

  const companyGraph = render(<CompanyGraph data={fakeData} />);

  const titles = Array.from(
    companyGraph.container.querySelectorAll('.chart-title'),
  ).map(el => el.textContent);

  expect(titles).toContain('Areas');
  expect(titles).toContain('Companies');
  expect(titles).toContain('Headquarters');
});
