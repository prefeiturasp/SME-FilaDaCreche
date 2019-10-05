import React from 'react';
import PropTypes from 'prop-types';
import STRINGS from '../configs/Strings';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faChevronLeft from '@fortawesome/fontawesome-free-solid/faChevronLeft';

fontawesome.library.add(faChevronLeft)

export const BackButton = (props, context) => (
  <button className="form-control" onClick={context.router.history.goBack}>
    <span className="">
      <FontAwesomeIcon icon="chevron-left" size="lg" className="icons" />
    </span>&nbsp;{STRINGS.actions.back}
  </button>
);

BackButton.contextTypes = {
  router: PropTypes.object
};
