import React from 'react';

import { render } from '@testing-library/react';

import CompanyCard from './index';

test('CompanyCard renders', () => {
  const fakeData = [
    {
      name: '100 Thieves',
      founded: '2016',
      description:
        '100 Thieves, LLC, an esports organization, competes in professional leagues. The company has a team which participates in leagues and championships. Additionally, it also retails sports apparel through its online store. The company was founded in 2016 and is headquartered in Detroit, Michigan.',
      url: '100thieves.com',
      headquarters: 'United States',
      industry_label: 'Retail & commerce | Sports & gaming',
      id: 0,
    },
  ];
  const Component = CompanyCard(fakeData);
  const companyCard = render(<Component index={0} style={{}} data={[]} />);

  expect(companyCard.container.querySelector('.name').textContent).toEqual(
    fakeData[0].name,
  );
  expect(companyCard.container.querySelector('[href]').textContent).toEqual(
    fakeData[0].url,
  );
  expect(
    companyCard.container.querySelector('.description').textContent,
  ).toEqual(fakeData[0].description);
  expect(
    companyCard.container.querySelector('.headquarters').textContent,
  ).toEqual(`headquarters: ${fakeData[0].headquarters}`);
  expect(
    companyCard.container.querySelector('.industry-label').textContent,
  ).toEqual(fakeData[0].industry_label);
  expect(companyCard.container.querySelector('.founded').textContent).toEqual(
    `Founded: ${fakeData[0].founded}`,
  );
});
