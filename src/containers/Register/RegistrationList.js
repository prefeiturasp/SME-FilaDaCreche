import React from 'react';
import STRINGS from 'configs/Strings';
import GLOBALS from 'configs/MainConfigs';
import convertKilometerToMeter from 'utils/convertKilometerToMeter';
import toTitleCase from 'utils/toTitleCase';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone'
import faMapMarkerAlt from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt'

fontawesome.library.add(faPhone, faMapMarkerAlt)

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
            {school.telefones && <div className="icon-div">
              <a href={"tel:" + school.telefones[0]}>
                <p className="text-center"><FontAwesomeIcon icon="phone" size="lg" className="icons icons-lg" /><br />{STRINGS.actions.call}</p>
              </a>
            </div>}
            <div className="icons-div">
              <a href={"https://www.google.com/maps/search/?api=1&query=" + school.endereco_completo + " " + GLOBALS.city_state} target="_blank">
                <p className="text-center"><FontAwesomeIcon icon="map-marker-alt" size="lg" className="icons icons-lg" /><br />{STRINGS.actions.see_on_map}</p>
              </a>
            </div>
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
