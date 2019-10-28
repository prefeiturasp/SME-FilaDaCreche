import React from 'react';
import STRINGS from '../../configs/Strings';
import { ContinueButton } from '../../components/ContinueButton';
import { HomeBanner } from '../../components/HomeBanner';
import { Footer } from '../../components/Footer';

export class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeBanner paragraphs={STRINGS.greeting.paragraphs} />
        <ContinueButton title={STRINGS.actions.start_now} subtitle={STRINGS.actions.click_continue} link={STRINGS.routes.check_if_registered} />
        <Footer />
      </div>
    );
  }
}
