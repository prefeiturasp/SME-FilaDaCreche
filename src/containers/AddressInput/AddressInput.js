import React, { Component } from 'react';
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
    const inputAddress = this.state.inputAddress;
    const geocodedAddress = this.state.geocodedAddress;
    const geocodedAddressLat = this.state.geocodedAddressLat;
    const geocodedAddressLng = this.state.geocodedAddressLng;
    return (
      <div>
        <BackButton />
        <Banner
          title={STRINGS.address_input.title}
          paragraphs={STRINGS.address_input.paragraphs} />
        <AddressForm onAddressChange={this.handleAddressChange} />
      </div>
    );
  }
}
