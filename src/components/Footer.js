import React from 'react';
import GLOBALS from 'configs/MainConfigs';
import logoUnesco from 'assets/images/logo-unesco.png';
import logoSme from 'assets/images/logo-sme.png';
import logoPatio from 'assets/images/logo-patio.png';
import footerMob from 'assets/images/footer-mob.png';
import footerDesk from 'assets/images/footer-desk.png';


export class Footer extends React.Component {
  render() {
    let logos = [
      {img: logoPatio, url: GLOBALS.url_patio},
      {img: logoUnesco, url: GLOBALS.url_unesco},
      {img: logoSme, url: GLOBALS.url_sme}
    ]
    let logosList = logos.map((logo, i) =>
        <div className="col-xs-4 logo-div" key={"footer_div_" + i}>
          <a href={logo.url} >
            <div className="logo-div" style={{backgroundImage: `url(${logo.img})`}} ></div>
          </a>
        </div>
      );
    return (
      <div className="row footer">
        {logosList}
      </div>
    );
  }
}
