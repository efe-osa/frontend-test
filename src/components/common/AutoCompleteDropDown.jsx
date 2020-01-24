/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import LOADER from '../../assets/loader.svg';
//import ProviderList from '../ProviderList';

class AutoCompleteDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      showResults: false,
      results: []
    };
  }

  toggleResultsDropdown = (showResults) => {
    this.setState({
      showResults
    });
  }

  getResults = (event) => {
    // TASK 3: AUTOCOMPLETE DROPDOWN    
    // On input, Make a GET request to the server, passing
    // the value(s) entered as a query param. i.e
    // GET <BASE_URL>/api/providers?q={input}
    // Use the response to populate the dropdown.
    // The dropdown should only show while the user is typing,
    // and should also cater for situations where no result is available.
    // NOTE: This component should be as reusable as possible.
  }

  onResultSelected = (selectedResult) => {
    const { onResultSelected } = this.props;
    if (onResultSelected) {
      onResultSelected(selectedResult.id);
    }
  }

  render() {
    const { isLoading } = this.state;
    const { placeholder } = this.props;
    return (
      <div className="dropdown active autocomplete-dropdown">
        <input
          type="text"
          className="input__style_1 input__search"
          placeholder={placeholder || "Find a Provider"}
        />
        {isLoading && <img src={LOADER} className="loader" alt="loading" />}

        {/* <ProviderList providers={results} onResultSelected={this.onResultSelected} /> */}
      </div>
    );
  }
}

AutoCompleteDropDown.propTypes = {
  placeholder: PropTypes.string,
  onResultSelected: PropTypes.instanceOf(Function).isRequired,
  customListComponent: PropTypes.instanceOf(Object),
};

export default AutoCompleteDropDown;
