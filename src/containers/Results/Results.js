import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import STRINGS from 'configs/Strings';
import GLOBALS from 'configs/MainConfigs';
import API from 'configs/Api';
import { BackButton } from "components/BackButton";
import { Banner } from "components/Banner";
import { Spacer } from "components/Spacer";
import { DefaultButton } from "components/DefaultButton";
import { ContinueButton } from "components/ContinueButton";
import { SchoolList } from "./SchoolList";

export class Results extends React.Component {
  constructor(props) {
    super(props);
    const groupName = GLOBALS.age_ranges.find(o => o.serie == this.props.match.params.groupCode).dc_serie_ensino;
    this.state = {
      groupCode: this.props.match.params.groupCode,
      groupName: groupName,
      geocodedAddressLng: this.props.match.params.geocodedAddressLng,
      geocodedAddressLat: this.props.match.params.geocodedAddressLat,
      geocodedAddress: this.props.match.params.geocodedAddress,
      schoolsError: null,
      schoolsLoaded: false,
      schoolsNearby: null,
      waitListLoaded: false,
      waitListUpdatedAt: null,
      waitListTotal: null
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    let reqUrl = `${API.schools_api_endpoint_wait}/${this.state.geocodedAddressLng}/${this.state.geocodedAddressLat}/${this.state.groupCode}`;
    fetch(reqUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            schoolsLoaded: true,
            waitListLoaded: true,
            waitListUpdatedAt: result.results.wait_updated_at,
            waitListTotal: result.results.wait,
            schoolsNearby: result.results.schools,
          });
        },
        (error) => {
          this.setState({
            schoolsLoaded: true,
            schoolsError: error
          });
        }
      )

  }

  render() {
    const schoolsNearby = this.state.schoolsNearby ? this.state.schoolsNearby : false;
    const numberOfSchools = this.state.schoolsNearby ? this.state.schoolsNearby.length : false;
    const waitListTotal = this.state.waitListTotal ? this.state.waitListTotal : 0;
    return (
      <div>
        <BackButton />
        {!this.state.waitListLoaded && <Banner
          title={STRINGS.actions.loading_results}
        />}
        {this.state.waitListLoaded && <Banner
          title={STRINGS.results.title_wait_message(waitListTotal, numberOfSchools)}
          paragraphs={[STRINGS.results.total_wait_message(waitListTotal, this.state.groupName, numberOfSchools, this.state.geocodedAddress), STRINGS.results.data_updated_at(this.state.waitListUpdatedAt), STRINGS.results.see_list_below]}
        />}
        {this.state.waitListLoaded && <SchoolList schools={schoolsNearby} groupName={this.state.groupName} groupCode={this.state.groupCode} />}
        {this.state.waitListLoaded && <Banner
          title={STRINGS.actions.can_do}
        />}
        {this.state.waitListLoaded && <Link
          to={{
          pathname: STRINGS.routes.register + "/" + this.state.groupCode,
          state: {
            schoolsNearby: schoolsNearby
          }
        }}>
          <DefaultButton title={STRINGS.actions.register} subtitle={STRINGS.actions.how_to_register} />
        </Link>}
        {this.state.waitListLoaded && <ContinueButton title={STRINGS.actions.compare_address} subtitle={STRINGS.actions.see_wait_near} link={STRINGS.routes.address + "/" + this.state.groupCode} />}
        {this.state.waitListLoaded && <ContinueButton title={STRINGS.actions.back_to_start} link="/" />}
      </div>
    );
  }
}
