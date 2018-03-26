import React from 'react'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faChevronDown from '@fortawesome/fontawesome-free-solid/faChevronDown'

fontawesome.library.add(faChevronDown)

export class CollapseButton extends React.Component {
  render() {
    return (
      <div className="default-button vertical-align" onClick={this.props.onClick}>
        <div className="col-xs-12 no-pad text-center">
          <h4>{this.props.title} <span className=""><FontAwesomeIcon icon="chevron-down" size="lg" className="icons" /></span></h4>
        </div>
      </div>
    );
  }
}
