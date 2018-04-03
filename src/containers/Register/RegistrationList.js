import React from 'react';
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
            <p>{convertKilometerToMeter(school.distance)} metros</p>
            {school.properties.ct && <p>Telefone: {school.properties.ct[0]}</p>}
          </div>
          <div className="col-xs-4">
            {school.properties.ct && <div className="icon-div">
              <a href={"tel:" + school.properties.ct[0]}>
                <p className="text-center"><FontAwesomeIcon icon="phone" size="lg" className="icons icons-lg" /><br />Ligar</p>
              </a>
            </div>}
            <div className="icons-div">
              <a href={"https://www.google.com/maps/search/?api=1&query=" + school.properties.end + " São Paulo, SP"} target="_blank">
                <p className="text-center"><FontAwesomeIcon icon="map-marker-alt" size="lg" className="icons icons-lg" /><br />Ver no mapa</p>
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
