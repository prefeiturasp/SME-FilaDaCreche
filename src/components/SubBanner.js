import React from 'react'
import { ParagraphsList } from "./ParagraphsList";

export class SubBanner extends React.Component {
  render() {
    return (
      <div className="sub-banner">
        <h4><strong>{this.props.title}</strong></h4>
        <ParagraphsList paragraphs={this.props.paragraphs} />
      </div>
    );
  }
}
