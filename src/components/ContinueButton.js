import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { DefaultButton } from "./DefaultButton";

export class ContinueButton extends React.Component {
  handleClick = () => {
    // alert(this.props.link);
  }

  render() {
    return (
      <Link to={{
        pathname: this.props.link,
        state: this.props.state
      }}>
        <DefaultButton title={this.props.title} subtitle={this.props.subtitle} onClick={this.handleClick} />
      </Link>
    );
  }
}
