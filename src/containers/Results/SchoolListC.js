import React from 'react'
import { CollapseButton } from "components/CollapseButton";
import { BrowserRouter as Link } from 'react-router-dom';
import STRINGS from 'configs/Strings';
import convertKilometerToMeter from 'utils/convertKilometerToMeter';

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
        <div className={"row school-list-item"} key={'school_' + i}>
          <div className="col-xs-8">
            <h4 style={{margin: 0}}>{school.properties.nome}</h4>
            <p>{convertKilometerToMeter(school.distance)} metros</p>
          </div>
          <div className="col-xs-4 text-center">
            <h3 style={{margin: 0}}>{school.wait}</h3>
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
            <div className="col-xs-4 text-center">
              <h5>Crianças na fila</h5>
            </div>
          </div>
          {this.generateSchoolList(this.state.schoolListPaginated)}
          <div className="row margin-bottom-sm">
            {paginate && <Link to="#" >
              <CollapseButton title={STRINGS.actions.see_more} onClick={this.handleSeeMore} />
            </Link>}
          </div>
        </div>
      </div>
    )
  }
}
