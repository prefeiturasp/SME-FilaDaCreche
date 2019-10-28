import React from 'react';
import STRINGS from '../../configs/Strings';
import { BackButton } from '../../components/BackButton';
import { ContinueButton } from '../../components/ContinueButton';
import { Banner } from '../../components/Banner';

export class CheckIfRegistered extends React.Component {
  render() {
    return (
      <div>
        <BackButton />
        <Banner
          title={STRINGS.check_if_registered.title} />
        <ContinueButton title={STRINGS.actions.no} link={STRINGS.routes.date_of_birth} />
        <ContinueButton title={STRINGS.actions.yes} link={STRINGS.routes.is_registered} />
      </div>
    );
  }
}
