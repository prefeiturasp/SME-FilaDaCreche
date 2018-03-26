import React from 'react'
import { Logo } from "./Logo";

export class HomeBanner extends React.Component {
  render() {
    let paragraphsList;
    if (this.props.paragraphs) {
      paragraphsList = this.props.paragraphs.map((paragraph, i) =>
        <p key={'p_' + i}>{paragraph}</p>
      );
    }
    return (
      <div className="banner">
        <Logo />
        <hr />
        <h2>{this.props.title}</h2>
        <div>{paragraphsList}</div>
      </div>
    );
  }
}
