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
      schoolsItems: null,
      schoolsNearby: null,
      schoolsFiltered: null,
      waitListLoaded: false,
      waitListError: null,
      waitListItems: null,
      waitListUpdatedAt: null
    };
  }

  joinSchoolsToWaitList(schools, waitList, groupCode) {
    schools.forEach(function(school) {
      // var result = waitList.filter(function(wait) {
          // return wait.cod == school.properties.cod;
      // });

      // school.wait = {};
      // school.wait["1"] = (result[0] !== undefined) ? result[0]["1"] : null;
      // school.wait["4"] = (result[0] !== undefined) ? result[0]["4"] : null;
      // school.wait["27"] = (result[0] !== undefined) ? result[0]["27"] : null;
      // school.wait["28"] = (result[0] !== undefined) ? result[0]["28"] : null;

      // school.wait = (result[0] !== undefined) ? result[0][groupCode] : null;
      let wait = waitList[school.properties.cod];
      if (wait) {
        school.wait = wait["dem_" + groupCode];
      }
      let mat = waitList[school.properties.cod];
      if (mat) {
        school.mat = wait["mat_" + groupCode];
      }
      let vag = waitList[school.properties.cod];
      if (vag) {
        school.vag = wait["vag_" + groupCode];
      }
    });

    schools = schools.filter(function(school) {
      return school.vag !== null && school.vag !== undefined;
    })
    return schools;
  }

  orderSchoolsByDistance(schools) {
    function compare(a, b) {
      const distanceA = a.distance;
      const distanceB = b.distance;

      let comparison = 0;
      if (distanceA > distanceB) {
        comparison = 1;
      } else if (distanceA < distanceB) {
        comparison = -1;
      }
      return comparison;
    }

    schools.sort(compare);
  }

  findSchoolsInRadius(userAddressLng, userAddressLat, schools) {
    const point = window.turf.point([userAddressLng, userAddressLat]);
    const buffered = window.turf.buffer(point, GLOBALS.buffer_distance, {units: GLOBALS.distance_units});
    const schoolsWithin = window.turf.pointsWithinPolygon(schools, buffered);

    schoolsWithin.features.forEach(function(school) {
      let from = point;
      let to = window.turf.point([school.geometry.coordinates[0], school.geometry.coordinates[1]]);
      let distance = window.turf.distance(from, to, {units: GLOBALS.distance_units});
      school.distance = distance;
    });
    return schoolsWithin;
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    fetch(API.schools_all_endpoint)
      .then(res => res.json())
      .then(
        (result) => {
          var schoolsFiltered = result.features.filter(function(school) {
              return school.properties.tipo_cd == "2" || school.properties.tipo_cd == "10" || school.properties.tipo_cd == "11" || school.properties.tipo_cd == "12" || school.properties.tipo_cd == "17" || school.properties.tipo_cd == "18" || school.properties.tipo_cd == "28"
          });
          result.features = schoolsFiltered;

          this.setState({
            schoolsLoaded: true,
            schoolsItems: result,
            schoolsFiltered: result
          });

          const schoolsWithin = this.findSchoolsInRadius(this.state.geocodedAddressLng, this.state.geocodedAddressLat, this.state.schoolsFiltered);

          this.orderSchoolsByDistance(schoolsWithin.features);

          this.setState({ schoolsNearby: schoolsWithin })

          fetch(API.schools_wait_all_endpoint)
            .then(res => res.json())
            .then(
              (result) => {
                let updatedAt = result.updated_at;
                let schools = this.joinSchoolsToWaitList(schoolsWithin.features, result, this.props.match.params.groupCode);
                this.setState({
                  waitListLoaded: true,
                  waitListItems: schools,
                  waitListUpdatedAt: updatedAt
                });
              },
              (error) => {
                this.setState({
                  waitListLoaded: true,
                  waitListError: error
                });
              }
            )
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
    const schoolsNearby = this.state.waitListItems ? this.state.waitListItems : false;
    const numberOfSchools = this.state.waitListItems ? this.state.waitListItems.length : false;
    const updatedAtMsg = this.state.waitListUpdatedAt ? "* Dados atualizados em " + new Date(this.state.waitListUpdatedAt).toLocaleDateString('pt-BR', {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute:'2-digit'}) : false;
    return (
      <div>
        <BackButton />
        {!this.state.waitListLoaded && <Banner
          title={STRINGS.actions.loading_results}
        />}
        {this.state.waitListLoaded && <Banner
          title={"Encontrei " + numberOfSchools + " creches perto de " + this.state.geocodedAddress + "."}
          paragraphs={["Veja abaixo a lista das creches num raio de 2 quilômetros, com o número de crianças atualmente* na lista de espera para o " + this.state.groupName + "."]}
        />}
        {this.state.waitListLoaded && <SchoolList schools={schoolsNearby} groupName={this.state.groupName} updatedAtMsg={updatedAtMsg} />}
        <Spacer classSize="spacer-sm" />
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
