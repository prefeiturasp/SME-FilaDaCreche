import React from 'react';
import STRINGS from '../../configs/Strings';
import { BackButton } from '../../components/BackButton';
import { Banner } from '../../components/Banner';
import { SelectDate } from "./SelectDate";

export class DateOfBirthForm extends React.Component {
  render() {
    return (
      <div>
        <BackButton />
        <Banner
          title={STRINGS.date_of_birth.title}
          paragraphs={STRINGS.date_of_birth.paragraphs} />
        <SelectDate />
      </div>
    );
  }
}
