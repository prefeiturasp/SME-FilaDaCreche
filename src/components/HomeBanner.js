import React from 'react';
import PropTypes from 'prop-types';

import { Logo } from './Logo';

export const HomeBanner = ({ paragraphs }) => (
  <div className="banner">
    <Logo />
    <hr />
    <ol className="list-ordered">
      {paragraphs &&
        paragraphs.map((paragraph, i) => <li key={'p_' + i}>{paragraph}</li>)}
    </ol>
  </div>
);

HomeBanner.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};
