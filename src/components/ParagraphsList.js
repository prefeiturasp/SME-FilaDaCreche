import React from 'react'

export class ParagraphsList extends React.Component {
  render() {
    let paragraphsList;
    if (this.props.paragraphs) {
      paragraphsList = this.props.paragraphs.map((paragraph, i) =>
        <p key={'p_' + i}>{paragraph}</p>
      );
    }
    return (
      <div>{paragraphsList}</div>
    );
  }
}
