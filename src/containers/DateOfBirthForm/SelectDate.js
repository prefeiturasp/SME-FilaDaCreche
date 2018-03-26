import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { DefaultButton } from "components/DefaultButton";
import { SubBanner } from "components/SubBanner";
import STRINGS from 'configs/Strings';
import GLOBALS from 'configs/MainConfigs';
import calculatePreschoolGroup from 'utils/calculatePreschoolGroup';
import monthDiff from 'utils/monthDiff';
import composeAgeMsg from 'utils/composeAgeMsg';

export class SelectDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monthOfBirth: undefined,
      yearOfBirth: undefined,
      preschoolGroup: null,
      preschoolGroupName: null,
      preschoolGroupCode: null,
      ageMsg: null,
      preeschoolCalcError: null
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
    const ageMonths = monthDiff(new Date(this.state.yearOfBirth, this.state.monthOfBirth, 1), new Date()) // consider day one
    const preschoolGroup = calculatePreschoolGroup(ageMonths);
    const ageMsg = composeAgeMsg(ageMonths);
    const state = {
      ageMonths: ageMonths,
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
    const preschoolGroupName = this.state.preschoolGroupName;
    let monthsList = GLOBALS.months_list;
    let monthsOptions = monthsList.map((month, i) =>
      <option key={'mo_' + i} value={i}>{month}</option>
    );
    let currentYear = (new Date()).getFullYear();
    let maxPreschoolAge = 4;
    let startYear = currentYear - maxPreschoolAge;
    var yearsList = [];
    var yearsOptions = [];
    for (var i = startYear; i <= currentYear; i++) {
      yearsList.push(i);
      let yearOption = <option key={'yo_' + i} value={i}>{i}</option>
      yearsOptions.push(yearOption);
    }
    return (
      <div>
        <select className="default-select" id="month-of-birth" value={this.state.monthOfBirth} onChange={this.setMonth}>
          <option value="">Mês de nascimento</option>
          {monthsOptions}
        </select>
        <select className="default-select" id="year-of-birth" onChange={this.setYear}>
          <option value="">Ano de nascimento</option>
          {yearsOptions}
        </select>
        {preeschoolCalcError === false && <Link
            to={{
              pathname: STRINGS.routes.preschool_group + "/" + this.state.ageMonths
            }}
          >
          <DefaultButton title={STRINGS.actions.continue} onClick={this.handleClick} />
        </Link>}
        {preeschoolCalcError === true && this.state.ageMsg &&
          <SubBanner
            title={this.state.ageMsg}
            paragraphs={["A criança não está em idade de creche. Tente para outra idade."]} />
        }
        {preeschoolCalcError === true && !this.state.ageMsg &&
          <SubBanner
            paragraphs={["Houve um erro ao calcular a idade da criança. Por favor tente de novo."]} />
        }
      </div>
    );
  }
}
