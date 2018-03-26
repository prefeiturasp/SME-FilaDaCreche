import React from 'react'
import convertKilometerToMeter from 'utils/convertKilometerToMeter';

export class SchoolList extends React.Component {
  render() {
    let schoolList;
    if (this.props.schools) {
      schoolList = this.props.schools.map((school, i) =>
        <div className={"row school-list-item" + (i > 9 ? " show" : " show")} key={'school_' + i}>
          <div className="col-xs-12">
            <h4>{school.properties.nome}</h4>
          </div>
          <div className="col-xs-8">
            <p>{school.properties.tipo}</p>
            <p>{school.properties.end && school.properties.end.toUpperCase()}</p>
            <p> Crianças no {this.props.groupName}: {school.mat}</p>
            <p>Distância: {convertKilometerToMeter(school.distance)} metros.</p>
          </div>
          <div className="col-xs-4">
            <h3>{school.wait}</h3>
            <p>{school.wait == 1 ? "criança na espera" : "crianças na espera"}</p>
          </div>
        </div>
      );
    }
    let paginate = this.props.schools.length > 10 ? true : false;
    // let paginateButton =
    return (
      <div className="school-list">
        {schoolList}
      </div>
    )
  }
}
