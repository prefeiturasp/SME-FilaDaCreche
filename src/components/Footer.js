import React from 'react';
import logoUnesco from 'assets/images/logo-unesco.png';
import logoSme from 'assets/images/logo-sme.png';
import logoPatio from 'assets/images/logo-patio.png';
import footerMob from 'assets/images/footer-mob.png';
import footerDesk from 'assets/images/footer-desk.png';


export class Footer extends React.Component {
  render() {
    let logos = [logoPatio, logoUnesco, logoSme].map((logo, i) =>
        <div className="col-xs-4 logo-div">
          <div className="logo-div" style={{backgroundImage: `url(${logo})`}} ></div>
        </div>
      );
    return (
      <div className="row footer">
        {logos}
      </div>
    );
  }
}
