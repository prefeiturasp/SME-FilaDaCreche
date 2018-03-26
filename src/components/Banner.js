import React from 'react'

export class Banner extends React.Component {
  render() {
    let paragraphsList;
    if (this.props.paragraphs) {
      paragraphsList = this.props.paragraphs.map((paragraph, i) =>
        <p key={'p_' + i}>{paragraph}</p>
      );
    }
    return (
      <div className="banner">
        <h1>{this.props.title}</h1>
        <div>{paragraphsList}</div>
      </div>
    );
  }
}
