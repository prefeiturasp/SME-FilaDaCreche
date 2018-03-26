import React from 'react';
import logoUnesco from 'assets/images/logo-unesco.png';
import logoSme from 'assets/images/logo-sme.png';
import logoPatio from 'assets/images/logo-patio.png';
import footerMob from 'assets/images/footer-mob.png';
import footerDesk from 'assets/images/footer-desk.png';


export class Footer extends React.Component {
  render() {
    return (
      <div className="row footer">
        <div className="col-xs-4 logo-div">
          <div className="logo-div" style={{backgroundImage: `url(${logoUnesco})`}} ></div>
        </div>
        <div className="col-xs-4 logo-div">
          <div className="logo-div" style={{backgroundImage: `url(${logoSme})`}} ></div>
        </div>
        <div className="col-xs-4 logo-div">
          <div className="logo-div" style={{backgroundImage: `url(${logoPatio})`, marginTop: "15px"}} ></div>
        </div>
      </div>
    );
  }
}
