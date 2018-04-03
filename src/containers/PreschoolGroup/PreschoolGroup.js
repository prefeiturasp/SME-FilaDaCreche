import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { BackButton } from 'components/BackButton';
import { Banner } from 'components/Banner';
import { DefaultButton } from 'components/DefaultButton';
import STRINGS from 'configs/Strings';
import calculatePreschoolGroup from 'utils/calculatePreschoolGroup';
import composeAgeMsg from 'utils/composeAgeMsg';

export class PreschoolGroup extends React.Component {
  constructor(props) {
    super(props);
    const ageMonths = parseInt(this.props.match.params.ageMonths);
    const preschoolGroup = calculatePreschoolGroup(ageMonths);
    this.state = {
      ageMonths: ageMonths,
      preschoolGroup: preschoolGroup,
      preschoolGroupName: preschoolGroup.dc_serie_ensino,
      preschoolGroupCode: preschoolGroup.serie
    };
  }

  render() {
    const ageMsg = composeAgeMsg(this.state.ageMonths);
    const preschoolGroupName = this.state.preschoolGroupName;
    const paragraphs = preschoolGroupName ? ["Isso quer dizer que ela deve estar no grupo " + preschoolGroupName + " da creche."] : []
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
