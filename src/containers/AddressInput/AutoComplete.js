import React, { Component } from "react";
import Autosuggest from "react-autosuggest";

export default class AutoComplete extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      addressObject: "",
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    console.log(this.state);
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = async ({ value }) => {
    if (value.length >= 4) {
      const API_URL = process.env.REACT_APP_MAPS_API_ENDPOINT;
      const response = await fetch(`${API_URL}/q/${value.trim()}.js`);
      const json = await response.json();
      this.setState({ suggestions: json.results });
    }
  };

  getSuggestionValue = suggestion => {
    this.setState({ addressObject: suggestion });
    this.props.onAddressSelected(suggestion);
    return suggestion.street;
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  renderSuggestion(suggestion) {
    return <span>{suggestion.display_name}</span>;
  }

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: "Ex: Rua Doutor Diogo de Faria",
      value,
      type: "search",
      onChange: this.onChange,
      autoFocus: true,
      className: "form-control col-12"
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}
