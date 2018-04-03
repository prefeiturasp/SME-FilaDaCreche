import React from 'react';
import logo from 'assets/images/logo.svg';
import logoImg from 'assets/images/logo.png';

export class Logo extends React.Component {
  render() {
    return (
      <div className="logo-banner text-center">
        <img src={logoImg} alt="Fila da Creche - O melhor caminho para sua vaga" style={{width: '100%'}}/>
      </div>
    );
  }
}
