import React from 'react';

class NewProviderForm extends React.Component {

  // TASK 5: Add New Provider
  // Add Functionality to the form below
  // On submission it should make a POST request to 
  // the server to create a new provider.
  // Refer to the API documentation for details.

  render() {
    return (
      <form className="form">
        <div className="form-group">
          <label htmlFor="name">Provider Name:</label>
          <input className="input__style_1" type="text" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Provider Address:</label>
          <input className="input__style_1" type="text" name="address" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Provider State:</label>
          <input className="input__style_1" type="text" name="state" />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Provider Rating:</label>
          <select className="select input__style_1" type="number" name="rating">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="type">Provider type:</label>
          <select className="select input__style_1" type="text" name="type">
            <option value="hospital">Hospital</option>
            <option value="pharmacy">Pharmacy</option>
            <option value="clinic">Clinic</option>
          </select>
        </div>        
        <div className="form-group">
          <label htmlFor="image">Provider Image</label>
          <img className="img-responsive" src="https://via.placeholder.com/1500x840" alt="new provider"/>
          <input type="file" name="file" />
        </div>
        <div className="form-group button-row">
          <button
            type="submit"
            className="btn btn-primary no-margin"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default NewProviderForm;
