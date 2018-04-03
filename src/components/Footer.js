import React from 'react';
import logoUnesco from 'assets/images/logo-unesco.png';
import logoSme from 'assets/images/logo-sme.png';
import logoPatio from 'assets/images/logo-patio.png';
import footerMob from 'assets/images/footer-mob.png';
import footerDesk from 'assets/images/footer-desk.png';


export class Footer extends React.Component {
  render() {
    let logos = [
      {img: logoPatio, url: "http://patiodigital.prefeitura.sp.gov.br/"},
      {img: logoUnesco, url: "http://www.unesco.org/new/pt/brasilia"},
      {img: logoSme, url: "http://www.capital.sp.gov.br/cidadao/educacao"}
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
