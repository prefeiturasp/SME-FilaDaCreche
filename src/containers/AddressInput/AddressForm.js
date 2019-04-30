import React from "react";
import AutoComplete from "./AutoComplete";

export class AddressForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit = event => {
    event.preventDefault();
  };

  onAddressSelected(addressData) {
    const { lat, lon, street } = addressData;
    this.props.onAddressChange(street, lat, lon);
  }
  render() {
    return (
      <div>
        <AutoComplete
          onAddressSelected={addressData => this.onAddressSelected(addressData)}
        />
      </div>
    );
  }
}
