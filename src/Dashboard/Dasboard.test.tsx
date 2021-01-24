import React from 'react';

import { render } from '@testing-library/react';

import Dashboard from './index';

jest.mock('./CompanyList', () => 'div');

test('Dashboard renders', () => {
  const dashboard = render(<Dashboard />);

  expect(dashboard.container.querySelector('.main-title').textContent).toEqual(
    'List of companies:',
  );
});
