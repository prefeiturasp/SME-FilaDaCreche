import React from 'react'

export class SubBanner extends React.Component {
  render() {
    let paragraphsList;
    if (this.props.paragraphs) {
      paragraphsList = this.props.paragraphs.map((paragraph, i) =>
        <p key={'p_' + i}>{paragraph}</p>
      );
    }
    return (
      <div className="sub-banner">
        <h4><strong>{this.props.title}</strong></h4>
        <div>{paragraphsList}</div>
      </div>
    );
  }
}
