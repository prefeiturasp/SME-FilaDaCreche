import React from 'react';
import logoUnesco from 'assets/images/logo-unesco.png';
import logoSme from 'assets/images/logo-sme.png';
import logoPatio from 'assets/images/logo-patio.png';
import footerMob from 'assets/images/footer-mob.png';
import footerDesk from 'assets/images/footer-desk.png';


export class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="visible-xs logo-div">
          <img src={footerMob} />
        </div>
        <div className="hidden-xs logo-div">
          <img src={footerDesk} />
        </div>
      </div>
    );
  }
}
