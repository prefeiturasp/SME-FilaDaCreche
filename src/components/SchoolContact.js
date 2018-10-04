import React from 'react';
import PropTypes from 'prop-types';
import STRINGS from 'configs/Strings';
import GLOBALS from 'configs/MainConfigs';

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone'
import faMapMarkerAlt from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt'

fontawesome.library.add(faPhone, faMapMarkerAlt)

export const SchoolContact = ({school}) => (
  <React.Fragment>
    {school.telefones && <div className="icon-div">
      <a href={"tel:" + school.telefones[0]}>
        <p className="text-center"><FontAwesomeIcon icon="phone" size="2x" /><br />{STRINGS.actions.call}</p>
      </a>
    </div>}
    <div className="icons-div">
      <a href={"https://www.google.com/maps/search/?api=1&query=" + school.endereco_completo + " " + GLOBALS.city_state} target="_blank">
        <p className="text-center"><FontAwesomeIcon icon="map-marker-alt" size="2x" className="icons" /><br />{STRINGS.actions.see_on_map}</p>
      </a>
    </div>
  </React.Fragment>
);

SchoolContact.propTypes = {
  school: PropTypes.object
};
