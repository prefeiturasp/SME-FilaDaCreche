import "App.css";
import { Alert } from "components/Alert";
import GoogleAnalytics from "components/GoogleAnalytics";
import { NotFound } from "components/NotFound";
import STRINGS from "configs/Strings";
import { AddressInput } from "containers/AddressInput/AddressInput";
import { CheckIfRegistered } from "containers/CheckIfRegistered/CheckIfRegistered";
import { DateOfBirthForm } from "containers/DateOfBirthForm/DateOfBirthForm";
import { Home } from "containers/Home/Home";
import { IsRegistered } from "containers/IsRegistered/IsRegistered";
import { PreschoolGroup } from "containers/PreschoolGroup/PreschoolGroup";
import { Register } from "containers/Register/Register";
import { Results } from "containers/Results/Results";
import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";




class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Alert />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path={STRINGS.routes.check_if_registered}
              component={CheckIfRegistered}
            />
            <Route
              path={STRINGS.routes.is_registered}
              component={IsRegistered}
            />
            <Route
              path={STRINGS.routes.date_of_birth}
              component={DateOfBirthForm}
            />
            <Route
              path={
                STRINGS.routes.preschool_group + "/:monthOfBirth/:yearOfBirth"
              }
              component={PreschoolGroup}
            />
            <Route
              path={STRINGS.routes.address + "/:groupCode"}
              component={AddressInput}
            />
            <Route
              path={
                STRINGS.routes.results +
                "/:groupCode/:geocodedAddressLng/:geocodedAddressLat/:geocodedAddress"
              }
              component={Results}
            />
            <Route
              path={STRINGS.routes.register + "/:groupCode?"}
              component={Register}
            />
            <Route path="*" component={NotFound} />
          </Switch>

          <GoogleAnalytics />
        </div>
      </HashRouter>
    );
  }
}

export default App;
