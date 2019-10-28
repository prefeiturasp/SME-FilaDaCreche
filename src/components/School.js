import React from 'react';
import toTitleCase from '../utils/toTitleCase';
import convertKilometerToMeter from '../utils/convertKilometerToMeter';
import { SchoolContact } from './SchoolContact';
import STRINGS from '../configs/Strings';
import findGroupName from '../utils/findGroupName';

export const School = ({school, groupCode, key}) => { console.log(school, groupCode, key); return (
  <div className="row school-list-item vertical-align" key={key}>
    <div className="col-xs-12">
      <h4 style={{margin:0}}>{school.nm_unidade_educacao}</h4>
      {school.sg_tp_escola != null && <p>{school.sg_tp_escola}</p>}
      {school.endereco_completo != null && <p>{toTitleCase(school.endereco_completo)}</p>}
      {groupCode != null && <p>Crianças atualmente matriculadas no {findGroupName(groupCode)}: {school.signed_up}</p>}
      {school.distance != null && <p>{convertKilometerToMeter(school.distance)} {STRINGS.messages.meters}</p>}
      {school.telefones && <p>{STRINGS.messages.phone}: {school.telefones[0]}</p>}
    </div>
    <div className="col-xs-4">
      <SchoolContact school={school} />
    </div>
  </div>
)};
