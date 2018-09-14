import React from 'react';
import STRINGS from 'configs/Strings';
import { BackButton } from "components/BackButton";
import { Banner } from "components/Banner";
import { AddressForm } from './AddressForm';

export class AddressInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupCode: this.props.match.params.groupCode
    };
    this.handleAddressChange = this.handleAddressChange.bind(this);
  }

  handleAddressChange(inputAddress, geocodedAddress, geocodedAddressLat, geocodedAddressLng) {
    this.setState({
      inputAddress: inputAddress,
      geocodedAddress: geocodedAddress,
      geocodedAddressLat: geocodedAddressLat,
      geocodedAddressLng: geocodedAddressLng
    })
    this.props.history.push({
      pathname: STRINGS.routes.results + '/' + this.state.groupCode + "/" + this.state.geocodedAddressLng + "/" + this.state.geocodedAddressLat + "/" + this.state.geocodedAddress
    })
  }

  render() {
    return (
      <div>
        <BackButton />
        <Banner
          title={STRINGS.address_input.title}
        />
        <AddressForm onAddressChange={this.handleAddressChange} />
      </div>
    );
  }
}
