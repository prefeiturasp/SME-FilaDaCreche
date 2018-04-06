import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, HashRouter } from 'react-router-dom';
// import { connect } from 'react-redux'
import 'App.css';

import { Alert } from 'components/Alert';
import GoogleAnalytics from 'components/GoogleAnalytics';

import { Home } from 'containers/Home/Home';
import { CheckIfRegistered } from 'containers/CheckIfRegistered/CheckIfRegistered';
import { IsRegistered } from 'containers/IsRegistered/IsRegistered';
import { DateOfBirthForm } from 'containers/DateOfBirthForm/DateOfBirthForm';
import { PreschoolGroup } from 'containers/PreschoolGroup/PreschoolGroup';
import { AddressInput } from 'containers/AddressInput/AddressInput';
import { Results } from 'containers/Results/Results';
import { Register } from 'containers/Register/Register';

import GLOBALS from 'configs/MainConfigs';
import API from 'configs/Api';
import STRINGS from 'configs/Strings';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Alert />
          <Route exact path="/" component={Home} />
          <Route path={STRINGS.routes.check_if_registered} component={CheckIfRegistered} />
          <Route path={STRINGS.routes.is_registered} component={IsRegistered} />
          <Route path={STRINGS.routes.date_of_birth} component={DateOfBirthForm} />
          <Route path={STRINGS.routes.preschool_group + "/:monthOfBirth/:yearOfBirth"} component={PreschoolGroup} />
          <Route path={STRINGS.routes.address + "/:groupCode"} component={AddressInput} />
          <Route path={STRINGS.routes.results + "/:groupCode/:geocodedAddressLng/:geocodedAddressLat/:geocodedAddress"} component={Results} />
          <Route path={STRINGS.routes.register + "/:groupCode"} component={Register} />
          <GoogleAnalytics />
        </div>
      </HashRouter>
    );
  }
}

export default App;
