import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BackButton } from "components/BackButton";
import { Banner } from "components/Banner";
import { DefaultButton } from "components/DefaultButton";
import STRINGS from "configs/Strings";
import calculatePreschoolGroup from "utils/calculatePreschoolGroup";
import composeDateOfBirthMsg from "utils/composeDateOfBirthMsg";

export function PreschoolGroup(props) {
  const monthOfBirth = parseInt(props.match.params.monthOfBirth, 10);
  const yearOfBirth = parseInt(props.match.params.yearOfBirth, 10);
  const preschoolGroup = calculatePreschoolGroup(monthOfBirth, yearOfBirth);

  const [preschoolGroupNameState] = useState(preschoolGroup.dc_serie_ensino);

  const [preschoolGroupCodeState] = useState(preschoolGroup.serie);

  const ageMsg = composeDateOfBirthMsg(
    props.match.params.monthOfBirth,
    props.match.params.yearOfBirth
  );

  const paragraphs = preschoolGroupNameState
    ? [STRINGS.is_in_group_message(preschoolGroupNameState)]
    : [];

  return (
    <div>
      <BackButton />
      <Banner title={ageMsg} paragraphs={paragraphs} />
      <Link
        to={{
          pathname: STRINGS.routes.address + "/" + preschoolGroupCodeState
        }}
      >
        <DefaultButton title={STRINGS.actions.continue} />
      </Link>
    </div>
  );
}
