import React from 'react'
import { Logo } from "./Logo";

export class HomeBanner extends React.Component {
  render() {
    let paragraphsList;
    if (this.props.paragraphs) {
      paragraphsList = this.props.paragraphs.map((paragraph, i) =>
        <li key={'p_' + i}>{paragraph}</li>
      );
    }
    return (
      <div className="banner">
        <Logo />
        <hr />
        <ol className="list-ordered">{paragraphsList}</ol>
      </div>
    );
  }
}
