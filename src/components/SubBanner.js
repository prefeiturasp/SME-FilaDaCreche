import React from 'react'
import { ParagraphsList } from "./ParagraphsList";
import PropTypes from 'prop-types';

export const SubBanner = (props) => (
  <div className="sub-banner">
    <h4><strong>{props.title}</strong></h4>
    <ParagraphsList paragraphs={props.paragraphs} />
  </div>
);

SubBanner.propTypes = {
  title: PropTypes.string,
  paragraphs: PropTypes.arrayOf(PropTypes.string)
};
