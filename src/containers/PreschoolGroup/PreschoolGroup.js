import React from 'react'
import { Link } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { Banner } from '../../components/Banner';
import { DefaultButton } from '../../components/DefaultButton';
import STRINGS from '../../configs/Strings';
import calculatePreschoolGroup from '../../utils/calculatePreschoolGroup';
import composeDateOfBirthMsg from '../../utils/composeDateOfBirthMsg';

export class PreschoolGroup extends React.Component {
  constructor(props) {
    super(props);
    const monthOfBirth = parseInt(this.props.match.params.monthOfBirth, 10);
    const yearOfBirth = parseInt(this.props.match.params.yearOfBirth, 10);
    const preschoolGroup = calculatePreschoolGroup(monthOfBirth, yearOfBirth);
    this.state = {
      preschoolGroup: preschoolGroup,
      preschoolGroupName: preschoolGroup.dc_serie_ensino,
      preschoolGroupCode: preschoolGroup.serie
    };
  }

  render() {
    const ageMsg = composeDateOfBirthMsg(this.props.match.params.monthOfBirth, this.props.match.params.yearOfBirth);
    const preschoolGroupName = this.state.preschoolGroupName;
    const paragraphs = preschoolGroupName ? [STRINGS.is_in_group_message(preschoolGroupName)] : []
    return (
      <div>
        <BackButton />
        <Banner
          title={ageMsg}
          paragraphs={paragraphs} />
          <Link
            to={{
            pathname: STRINGS.routes.address + '/' + this.state.preschoolGroupCode,
          }}>
            <DefaultButton title={STRINGS.actions.continue} />
          </Link>
      </div>
    );
  }
}
