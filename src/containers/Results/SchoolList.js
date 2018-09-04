import React from 'react'
import { DefaultButton } from "components/DefaultButton";
import { BrowserRouter as Link } from 'react-router-dom';
import convertKilometerToMeter from 'utils/convertKilometerToMeter';
import toTitleCase from 'utils/toTitleCase';
import { SchoolContact } from "components/SchoolContact";
import STRINGS from 'configs/Strings';

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
            <h4 style={{margin: 0}}>{school.nm_unidade_educacao}</h4>
            <p>{toTitleCase(school.endereco_completo)}</p>
            <p>Crianças atualmente matriculadas no {this.props.groupName}: {school['vagas_cd_serie_' + this.props.groupCode]}</p>
            <p>{convertKilometerToMeter(school.distance)} {STRINGS.messages.meters}</p>
          </div>
          <div className="col-xs-4">
            <SchoolContact school={school} />
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
