import React from 'react'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight'
import PropTypes from 'prop-types';

fontawesome.library.add(faChevronRight)

export const DefaultButton = (props) => (
  <div className="default-button vertical-align" onClick={props.onClick}>
    <div className="col-xs-10 no-pad">
      <h4>{props.title}</h4>
      <p>{props.subtitle}</p>
    </div>
    <div className="col-xs-2 no-pad">
      <span className="pull-right">
        <FontAwesomeIcon icon="chevron-right" size="lg" className="icons icons-lg" />
      </span>
    </div>
  </div>
);

DefaultButton.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};
