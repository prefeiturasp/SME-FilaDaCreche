import React from 'react'
import { ParagraphsList } from "./ParagraphsList";

export class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <h1>{this.props.title}</h1>
        <ParagraphsList paragraphs={this.props.paragraphs} />
      </div>
    );
  }
}
