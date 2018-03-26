import React from 'react';
import logo from 'logo.svg';

export class Logo extends React.Component {
  render() {
    return (
      <div className="logo-banner text-center">
        <img src={logo} alt="logo" />
      </div>
    );
  }
}
