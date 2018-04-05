import React from 'react'
import { DefaultButton } from "components/DefaultButton";
import { BrowserRouter as Link } from 'react-router-dom';
import STRINGS from 'configs/Strings';
import convertKilometerToMeter from 'utils/convertKilometerToMeter';
import toTitleCase from 'utils/toTitleCase';

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone'
import faMapMarkerAlt from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt'

fontawesome.library.add(faPhone, faMapMarkerAlt)

export class SchoolList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolList: this.props.schools,
      schoolListPaginated: this.props.schools.slice(0, 5)
    };
    this.handleSeeMore = this.handleSeeMore.bind(this)
  }

  generateSchoolList(schools) {
    let schoolList;
    if (schools) {
      schoolList = schools.map((school, i) =>
        <div className={"row school-list-item vertical-align"} key={'school_' + i}>
          <div className="col-xs-12">
            <h4 style={{margin: 0}}>{school.properties.nome}</h4>
            <p>{toTitleCase(school.properties.end)}</p>
            <p>Crianças atualmente matriculadas no {this.props.groupName}: {school.mat}</p>
            <p>{convertKilometerToMeter(school.distance)} metros</p>
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
    return schoolList;
  }

  handleSeeMore() {
    const schoolList = this.state.schoolList;
    this.setState({
      schoolListPaginated: schoolList.slice(0, schoolList.length)
    });
  }

  render() {
    let paginate = this.props.schools.length > 5 && this.state.schoolList.length !== this.state.schoolListPaginated.length ? true : false;
    return (
      <div>
        <div className="school-list">
          <div className="row school-list-header">
            <div className="col-xs-8">
              <h5>Creche</h5>
            </div>
          </div>
          {this.generateSchoolList(this.state.schoolListPaginated)}
          <div className="row margin-bottom-sm">
            {paginate && <Link to="#" >
              <DefaultButton title={STRINGS.actions.see_more} onClick={this.handleSeeMore} />
            </Link>}
          </div>
          <p>{this.props.updatedAtMsg}</p>
        </div>
      </div>
    )
  }
}
