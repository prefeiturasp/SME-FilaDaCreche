import React from 'react'
import { Logo } from "./Logo";
import PropTypes from 'prop-types';

export const HomeBanner = (props)  => (
  <div className="banner">
    <Logo />
    <hr />
    <ol className="list-ordered">
      {props.paragraphs ? props.paragraphs.map((paragraph, i) =>
        <p key={'p_' + i}>{paragraph}</p>
      ) : null}
    </ol>
  </div>
);

HomeBanner.propTypes = {
  paragraphs : PropTypes.arrayOf(PropTypes.string)
};
