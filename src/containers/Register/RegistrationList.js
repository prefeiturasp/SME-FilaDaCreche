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

export class RegistrationList extends React.Component {
  render() {
    let schoolList;
    if (this.props.schools) {
      schoolList = this.props.schools.map((school, i) =>
        <div className="row school-list-item vertical-align" key={'school_' + i}>
          <div className="col-xs-8">
            <h4>{school.properties.nome}</h4>
            <p>{school.properties.tipo}</p>
            <p>{toTitleCase(school.properties.end)}</p>
            <p>{convertKilometerToMeter(school.distance)} {STRINGS.messages.meters}</p>
            {school.properties.ct && <p>{STRINGS.messages.phone}: {school.properties.ct[0]}</p>}
          </div>
          <div className="col-xs-4">
            {school.properties.ct && <div className="icon-div">
              <a href={"tel:" + school.properties.ct[0]}>
                <p className="text-center"><FontAwesomeIcon icon="phone" size="lg" className="icons icons-lg" /><br />{STRINGS.actions.call}</p>
              </a>
            </div>}
            <div className="icons-div">
              <a href={"https://www.google.com/maps/search/?api=1&query=" + school.properties.end + " " + GLOBALS.city_state} target="_blank">
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
