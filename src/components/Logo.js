import React from 'react';
import logo from 'logo.svg';

export class Logo extends React.Component {
  render() {
    return (
      <div className="logo-banner text-center">
        <object data={logo} type="image/svg+xml"></object>
      </div>
    );
  }
}
