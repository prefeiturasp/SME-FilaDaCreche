import React from 'react';
import { Banner } from "./Banner";
import { ContinueButton } from './ContinueButton';
import STRINGS from '../configs/Strings';

export class NotFound extends React.Component {
  render() {
    return (
      <div>
        <Banner
          title={STRINGS.not_found.title}
          paragraphs={[STRINGS.not_found.subtitle]}
        />
        <ContinueButton title={STRINGS.actions.back_to_start} subtitle='' link='/' />
      </div>
    );
  }
}
