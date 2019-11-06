import React from 'react';
import STRINGS from 'configs/Strings';
import { ContinueButton } from "components/ContinueButton";
import { HomeBanner } from "components/HomeBanner";
import { Footer } from "components/Footer";

export class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeBanner paragraphs={STRINGS.greeting.paragraphs} />
        <div className="embed-responsive embed-responsive-16by9">
            <iframe src="https://www.youtube.com/embed/iGzgeH-H-Zo" frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
          </div>
            <ContinueButton title={STRINGS.actions.start_now} subtitle={STRINGS.actions.click_continue} link={STRINGS.routes.check_if_registered} />



        <Footer />
      </div>
    );
  }
}
