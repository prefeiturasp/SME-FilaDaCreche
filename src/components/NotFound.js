import React from 'react';

import { ContinueButton } from 'components/ContinueButton';
import STRINGS from 'configs/Strings';

export const NotFound = () => (
    <div className='alert row' style={{ 'margin': 'auto', 'textAlign': 'center' }}>
        <h1>Oooops, página não encontrada </h1>
        <p className="p-b-20" >a página que você está tentando acessar não pode ser encontrada.</p>

        <ContinueButton title={STRINGS.actions.back_to_start} subtitle='' link='/' />
    </div>
);
