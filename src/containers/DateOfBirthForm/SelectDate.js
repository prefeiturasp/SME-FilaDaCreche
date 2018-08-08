import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { DefaultButton } from "components/DefaultButton";
import { SubBanner } from "components/SubBanner";
import STRINGS from 'configs/Strings';
import GLOBALS from 'configs/MainConfigs';
import calculatePreschoolGroup from 'utils/calculatePreschoolGroup';
import generateMonthsOptions from 'utils/generateMonthsOptions';
import generateYearsOptions from 'utils/generateYearsOptions';
import composeDateOfBirthMsg from 'utils/composeDateOfBirthMsg';

export class SelectDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monthOfBirth: undefined,
      yearOfBirth: undefined,
      preschoolGroup: null,
      preschoolGroupName: null,
      preschoolGroupCode: null,
      preeschoolCalcError: null,
      ageMsg: null
    };
    this.setMonth = this.setMonth.bind(this)
    this.setYear = this.setYear.bind(this)
  }

  setMonth = (e) => {
    this.setState({
      monthOfBirth: e.target.value
    }, () => {
      if (this.state.yearOfBirth !== undefined) {
        this.setAge();
      }
    });
  }

  setYear = (e) => {
    this.setState({
      yearOfBirth: e.target.value
    }, () => {
      if (this.state.monthOfBirth !== undefined) {
        this.setAge();
      }
    });
  }

  setAge() {
    const monthOfBirth = parseInt(this.state.monthOfBirth);
    const yearOfBirth = parseInt(this.state.yearOfBirth);
    const preschoolGroup = calculatePreschoolGroup(monthOfBirth, yearOfBirth);
    const ageMsg = composeDateOfBirthMsg(monthOfBirth, yearOfBirth);
    const state = {
      preschoolGroup: preschoolGroup,
      preschoolGroupName: preschoolGroup.dc_serie_ensino,
      preschoolGroupCode: preschoolGroup.serie,
      ageMsg: ageMsg,
    };
    if (preschoolGroup.error) {
      state.preeschoolCalcError = true;
    } else {
      state.preeschoolCalcError = false;
    }
    this.setState(state);
  }

  render() {
    const dateSelected = (this.state.monthOfBirth && this.state.yearOfBirth) ? true : false;
    const preeschoolCalcError = this.state.preeschoolCalcError;
    return (
      <div>
        <select className="default-select" id="month-of-birth" value={this.state.monthOfBirth} onChange={this.setMonth}>
          <option value="">{STRINGS.messages.month_of_birth}</option>
          {generateMonthsOptions()}
        </select>
        <select className="default-select" id="year-of-birth" onChange={this.setYear}>
          <option value="">{STRINGS.messages.year_of_birth}</option>
          {generateYearsOptions()}
        </select>
        {preeschoolCalcError === false && <Link
            to={{
              pathname: STRINGS.routes.preschool_group + "/" + this.state.monthOfBirth + "/" + this.state.yearOfBirth
            }}
          >
          <DefaultButton title={STRINGS.actions.continue} onClick={this.handleClick} />
        </Link>}
        {preeschoolCalcError === true && this.state.ageMsg &&
          <SubBanner
            title={this.state.ageMsg}
            paragraphs={[STRINGS.date_of_birth.not_in_preschool_age]} />
        }
        {preeschoolCalcError === true && !this.state.ageMsg &&
          <SubBanner
            paragraphs={[STRINGS.date_of_birth.error_calculating_age]} />
        }
      </div>
    );
  }
}
