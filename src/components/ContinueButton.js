import React from 'react'
import { Link } from 'react-router-dom';
import { DefaultButton } from "./DefaultButton";
import PropTypes from 'prop-types';

export const ContinueButton = (props) => (
  <Link to={{pathname: props.link}}>
    <DefaultButton title={props.title} subtitle={props.subtitle} />
  </Link>
);

ContinueButton.propTypes = {
  link: PropTypes.string,
  subtitle: PropTypes.string
};
