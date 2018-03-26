import React from 'react'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight'

fontawesome.library.add(faChevronRight)

export class DefaultButton extends React.Component {
  render() {
    return (
      <div className="default-button vertical-align" onClick={this.props.onClick}>
        <div className="col-xs-10 no-pad">
          <h4>{this.props.title}</h4>
          <p>{this.props.subtitle}</p>
        </div>
        <div className="col-xs-2 no-pad">
          <span className="pull-right"><FontAwesomeIcon icon="chevron-right" size="lg" className="icons icons-lg" /></span>
        </div>
      </div>
    );
  }
}
