import React from 'react';
import convertKilometerToMeter from 'utils/convertKilometerToMeter';
import toTitleCase from 'utils/toTitleCase';
import { SchoolContact } from "components/SchoolContact";
import STRINGS from 'configs/Strings';

// FIXME: this will probably require another request to the api with all schools in radius, not just those that have slots
export class RegistrationList extends React.Component {
  render() {
    let schoolList;
    if (this.props.schools) {
      schoolList = this.props.schools.map((school, i) =>
        <div className="row school-list-item vertical-align" key={'school_' + i}>
          <div className="col-xs-8">
          <h4 style={{margin: 0}}>{school.nm_unidade_educacao}</h4>
            <p>{school.sg_tp_escola}</p>
            <p>{toTitleCase(school.endereco_completo)}</p>
            <p>{convertKilometerToMeter(school.distance)} {STRINGS.messages.meters}</p>
            {school.telefones && <p>{STRINGS.messages.phone}: {school.telefones[0]}</p>}
          </div>
          <div className="col-xs-4">
            <SchoolContact school={school} />
          </div>
        </div>
      );
    }
    return (
      <div className="school-list">
        {schoolList}
      </div>
    )
  }
}
