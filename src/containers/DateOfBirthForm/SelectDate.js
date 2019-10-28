import React from 'react'
import { Link } from 'react-router-dom';
import { DefaultButton } from '../../components/DefaultButton';
import { SubBanner } from '../../components/SubBanner';
import STRINGS from '../../configs/Strings';
import calculatePreschoolGroup from '../../utils/calculatePreschoolGroup';
import generateMonthsOptions from '../../utils/generateMonthsOptions';
import generateYearsOptions from '../../utils/generateYearsOptions';
import composeDateOfBirthMsg from '../../utils/composeDateOfBirthMsg';

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
    this.setDateAttribute = this.setDateAttribute.bind(this);
  }

  setDateAttribute = (attribute, value) => {
    this.setState({
      [attribute]: value
    }, () => {
      if (this.state.yearOfBirth !== undefined && this.state.monthOfBirth !== undefined) {
        this.setAge();
      }
    });
  }

  setAge() {
    const monthOfBirth = parseInt(this.state.monthOfBirth, 10);
    const yearOfBirth = parseInt(this.state.yearOfBirth, 10);
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
    const preeschoolCalcError = this.state.preeschoolCalcError;
    return (
      <div>
        <select
          className="default-select"
          id="month-of-birth"
          value={this.state.monthOfBirth}
          onChange={(event) => this.setDateAttribute('monthOfBirth', event.target.value)}
        >
          <option value="">{STRINGS.messages.month_of_birth}</option>
          {generateMonthsOptions()}
        </select>
        <select
          className="default-select"
          id="year-of-birth"
          onChange={(event) => this.setDateAttribute('yearOfBirth', event.target.value)}
        >
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
