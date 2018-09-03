import React from 'react'
import PropTypes from 'prop-types';

export const Spacer = (props) => (
  <div className={props.classSize}>
  </div>
);

Spacer.propTypes = {
  classSize: PropTypes.string,
};
