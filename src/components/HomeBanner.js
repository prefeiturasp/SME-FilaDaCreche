import React from 'react'
import { Logo } from "./Logo";
import PropTypes from 'prop-types';

export const HomeBanner = (props)  => (
  <div className="banner">
    <Logo />
    <hr />
    <ol className="list-ordered">
      {props.paragraphs ? props.paragraphs.map((paragraph, i) =>
        <li key={'p_' + i}>{paragraph}</li>
      ) : null}
    </ol>
  </div>
);

HomeBanner.propTypes = {
  paragraphs : PropTypes.arrayOf(PropTypes.string)
};
