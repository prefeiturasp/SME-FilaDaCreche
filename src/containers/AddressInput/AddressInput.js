import { BackButton } from "components/BackButton";
import { Banner } from "components/Banner";
import STRINGS from "configs/Strings";
import React from "react";
import { AddressForm } from "./AddressForm";

export class AddressInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupCode: this.props.match.params.groupCode
    };
    this.handleAddressChange = this.handleAddressChange.bind(this);
  }

  handleAddressChange(geocodedAddress, geocodedAddressLat, geocodedAddressLng) {
    this.setState({
      geocodedAddress: geocodedAddress,
      geocodedAddressLat: geocodedAddressLat,
      geocodedAddressLng: geocodedAddressLng
    });
    this.props.history.push({
      pathname:
        STRINGS.routes.results +
        "/" +
        this.state.groupCode +
        "/" +
        geocodedAddressLng +
        "/" +
        geocodedAddressLat +
        "/" +
        geocodedAddress
    });
  }

  render() {
    return (
      <div>
        <BackButton />
        <Banner title={STRINGS.address_input.title} paragraphs={STRINGS.address_input.paragraphs}/>
        <AddressForm onAddressChange={this.handleAddressChange} />
      </div>
    );
  }
}
