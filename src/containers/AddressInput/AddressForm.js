/*global google*/

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { DefaultButton } from 'components/DefaultButton';
import GLOBALS from 'configs/MainConfigs';
import STRINGS from 'configs/Strings';

export class AddressForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { inputAddress: '', geocodedAddress: '', geocodedAddressLat: '', geocodedAddressLng: '' }
    this.onChange = (inputAddress) => this.setState({ inputAddress })
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    geocodeByAddress(this.state.inputAddress)
      .then(results => {
        // console.log('results', results)
        this.setState({ geocodedAddress: results[0].formatted_address })
        getLatLng(results[0])
          .then(({ lat, lng }) => {
            this.setState({ geocodedAddressLat: lat, geocodedAddressLng: lng })
            this.props.onAddressChange(this.state.inputAddress, this.state.geocodedAddress, this.state.geocodedAddressLat, this.state.geocodedAddressLng)
            // console.log('geocodedAddressLatLng', this.state.geocodedAddressLat, this.state.geocodedAddressLng)
          })
          .catch(error => console.error('Error', error))
        // console.log('geocodedAddress', this.state.geocodedAddress)
        // console.log('inputAddress', this.state.inputAddress)
      })
      // .then(results => getLatLng(results[0]))
      // .then(latLng => {
      //   this.setState({ geocodedAddressLatLng: latLng })
      //   console.log('geocodedAddressLatLng', this.state.geocodedAddressLatLng)
      // })
      .catch(error => console.error('Error', error))
  }

  render() {
    const placesAutocompleteOptions = {
      location: new google.maps.LatLng(GLOBALS.city_center.lat, GLOBALS.city_center.lon),
      radius: 20000,
      types: ['address'],
      componentRestrictions: {country: "br"},
      // FIXME: bounds and strictBounds still not working
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(GLOBALS.city_bbox_s, GLOBALS.city_bbox_w),
        new google.maps.LatLng(GLOBALS.city_bbox_n, GLOBALS.city_bbox_e)
      ),
      strictBounds: true
    };
    const cssClasses = {
      input: 'autocomplete-input'
    }
    const inputProps = {
      value: this.state.inputAddress,
      onChange: this.onChange,
      type: 'search',
      placeholder: STRINGS.actions.input_address,
      autoFocus: true,
    }

    return (
      <div>
        <PlacesAutocomplete
          inputProps={inputProps}
          options={placesAutocompleteOptions}
          classNames={cssClasses}
          autoFocus={false}
        />
        <Link to="#" >
          <DefaultButton title={STRINGS.actions.search} onClick={this.handleFormSubmit} />
        </Link>
      </div>
    )
  }
}
