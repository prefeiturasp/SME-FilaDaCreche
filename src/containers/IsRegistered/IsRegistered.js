import React, { Component } from 'react';
import STRINGS from 'configs/Strings';
import { BackButton } from "components/BackButton";
import { Banner } from "components/Banner";
import { DefaultButton } from "components/DefaultButton";
import { ContinueButton } from "components/ContinueButton";

export class IsRegistered extends React.Component {
  render() {
    return (
      <div>
        <BackButton />
        <Banner
          title={STRINGS.is_registered.title}
        />
        <a href={STRINGS.routes.check_registration_status} >
          <DefaultButton title={STRINGS.actions.check_registration_status} subtitle={STRINGS.actions.current_position_explanation} />
        </a>
        <ContinueButton title={STRINGS.actions.check_wait_today} subtitle={STRINGS.actions.you_can_check_other_address} link={STRINGS.routes.date_of_birth} />
      </div>
    );
  }
}
