import React from 'react';
import STRINGS from '../configs/Strings';
import logoImg from '../assets/images/logo.png';

export const Logo = () => (
  <div className="logo-banner text-center">
    <img src={logoImg} alt={STRINGS.site.tag_line} style={{width: '100%'}}/>
  </div>
);
