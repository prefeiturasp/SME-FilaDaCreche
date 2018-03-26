import React from 'react';
import PropTypes from 'prop-types';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faChevronLeft from '@fortawesome/fontawesome-free-solid/faChevronLeft';

fontawesome.library.add(faChevronLeft)

export class BackButton extends React.Component {
  static contextTypes = {
    // router: () => true, // replace with PropTypes.object if you use them
    router: PropTypes.object
  }

  render() {
    return (
      <button
        className="form-control"
        onClick={this.context.router.history.goBack}>
          <span className=""><FontAwesomeIcon icon="chevron-left" size="lg" className="icons" /></span>&nbsp;Voltar
      </button>
    )
  }
}
