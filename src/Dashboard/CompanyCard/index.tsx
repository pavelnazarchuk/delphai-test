import * as React from 'react';
import { ListChildComponentProps } from 'react-window';

import { ICompanyData } from '../types';

import './style.css';

/**
 * A presentational component for company data.
 */

// because react-window-dynamic-list doesn't pass data to child component
// we have to pass it ourselves
const CompanyCard = (data: ICompanyData[]) => ({
  index,
  style,
}: ListChildComponentProps) => {
  const {
    name,
    founded,
    description,
    url,
    headquarters,
    industry_label: industryLabel,
  } = data[index];

  return (
    <div style={style}>
      <div className="card__row" key={index}>
        <div className="card__container">
          <p className="card__title name">{name}</p>
          {url && (
            <a href={url} className="d-block card__title_small">
              {url}
            </a>
          )}
          {description && (
            <p className="card__text description">{description}</p>
          )}
          {headquarters && (
            <p className="card__title_small headquarters">
              headquarters: {headquarters}
            </p>
          )}
          {industryLabel && (
            <p className="card__title_small industry-label">{industryLabel}</p>
          )}
          <p className="card__title_small founded">Founded: {founded}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
