import React from 'react'
import PropTypes from 'prop-types'

export const ParagraphsList = (props) => (
  <div>
    {props.paragraphs && props.paragraphs.map((paragraph, i) =>
      <p key={'p_'+i}>{paragraph}</p>)
    }
  </div>
);

ParagraphsList.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string)
};
