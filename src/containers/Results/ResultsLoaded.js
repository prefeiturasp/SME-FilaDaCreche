import React from 'react';
import PropTypes from 'prop-types';
import STRINGS from '../../configs/Strings';
import { Banner } from '../../components/Banner';
import findGroupName from '../../utils/findGroupName';
import { SchoolList } from '../../components/SchoolList';
import { Link } from 'react-router-dom';
import { DefaultButton } from '../../components/DefaultButton';
import { ContinueButton } from '../../components/ContinueButton';
import { Spacer } from '../../components/Spacer';

export const ResultsLoaded = (props) => {
  const schools = props.schoolsNearby.map(school => {
      return {
        nm_unidade_educacao: school.nm_unidade_educacao,
        endereco_completo: school.endereco_completo,
        distance: school.distance,
        signed_up: school[`vagas_cd_serie_${props.groupCode}`],
      };
  });
  return (
    <React.Fragment>
      <Banner
        title={STRINGS.results.title_wait_message(
          props.waitListSize,
          props.schoolsNearby.length,
        )}
        paragraphs={[
          STRINGS.results.total_wait_message(
            props.waitListSize,
            findGroupName(props.groupCode),
            props.schoolsNearby.length,
            props.address,
          ),
          STRINGS.results.data_updated_at(props.updatedAt),
          props.schoolsNearby.length ? STRINGS.results.see_list_below : null,
        ]}
      />
      {props.schoolsNearby.length ? <SchoolList
        groupCode={props.groupCode}
        schools={schools}
        shortenList={true}
      /> : <Spacer
        classSize="spacer-sm"
      /> }
      <Banner title={STRINGS.actions.can_do} />
      <Link to={{
        pathname: STRINGS.routes.register + "/" + props.groupCode,
        state: {schoolsNearby: props.schoolsNearby},
      }}>
        <DefaultButton
          title={STRINGS.actions.register}
          subtitle={STRINGS.actions.how_to_register}
        />
      </Link>
      <ContinueButton
        title={STRINGS.actions.compare_address}
        subtitle={STRINGS.actions.see_wait_near}
        link={STRINGS.routes.address + "/" + props.groupCode}
      />
      <ContinueButton title={STRINGS.actions.back_to_start} link="/" />
    </React.Fragment>
  );
}

ResultsLoaded.propTypes = {
  address: PropTypes.string,
  groupCode: PropTypes.string,
  schoolsNearby: PropTypes.arrayOf(PropTypes.object),
  updatedAt: PropTypes.string,
  waitListSize: PropTypes.number,
};
