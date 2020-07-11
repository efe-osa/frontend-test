import React, { createRef } from 'react';
import ApiService from '../../utils/apiService';

class NewProviderForm extends React.Component {
  constructor() {
    super()
    this.addressRef = createRef(null)
    this.descriptionRef = createRef(null)
    this.imageRef = createRef(null)
    this.nameRef = createRef(null)
    this.stateRef = createRef(null)
    this.ratingRef = createRef(null)
    this.typeRef = createRef(null)
  }

  resetRef = () => {
    this.addressRef.current.value(null)
    this.imageRef.current.value(null)
    this.nameRef.current.value(null)
    this.stateRef.current.value(null)
    this.ratingRef.current.value(null)
    this.typeRef.current.value(null)
  }

  // TASK 5: Add New Provider
  // Add Functionality to the form below
  // On submission it should make a POST request to 
  // the server to create a new provider.
  // Refer to the API documentation for details.
  createProvider = async (e) => {
    e.preventDefault()
    if (this.ratingRef !== null && this.typeRef !== null) {
      // FIXME: refactor validate require fields
      if (this.ratingRef.current.value !== undefined && this.typeRef.current.value !== undefined) {
        try {
          const data = {
            "name": this.nameRef.current.value,
            "description": this.descriptionRef.current.value,
            "rating": this.ratingRef.current.value,
            "active_status": "Pending",
            "address": this.addressRef.current.value,
            "provider_type": this.typeRef.current.value,
            "state": this.stateRef.current.value
          }
          const newProvider = await ApiService.post(ApiService.ENDPOINTS.providers, data);
          await this.uploadImage(newProvider.id).then(_ => this.resetRef())
        } catch (error) {
          alert('Unable to create provider');
        }
      }
      else {
        alert('Please fill in all fields')
      }
    }

  }

  uploadImage = async (providerId) => {
    const uploadData = new FormData()
    uploadData.append('ref', 'provider')
    uploadData.append(' refId', providerId)
    uploadData.append('field', 'images')
    uploadData.append('files', this.imageRef.current.value)
    await ApiService.upload(ApiService.ENDPOINTS.providers, uploadData);
  }

  render() {
    return (
      <form className="form" onSubmit={this.createProvider} method="post">
        <div className="form-group">
          <label htmlFor="name">Provider Name:</label>
          <input ref={this.nameRef} className="input__style_1" type="text" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="name">Provider Description:</label>
          <input ref={this.descriptionRef} className="input__style_1" type="text" name="description" required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Provider Address:</label>
          <input ref={this.addressRef} className="input__style_1" type="text" name="address" required />
        </div>
        <div className="form-group">
          <label htmlFor="state">Provider State:</label>
          <input ref={this.stateRef} className="input__style_1" type="text" name="state" required />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Provider Rating:</label>
          <select ref={this.ratingRef} className="select input__style_1" type="number" name="rating" required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="type">Provider type:</label>
          <select ref={this.typeRef} className="select input__style_1" type="text" name="type">
            <option value="hospital">Hospital</option>
            <option value="pharmacy">Pharmacy</option>
            <option value="clinic">Clinic</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="image">Provider Image</label>
          <img className="img-responsive" src="https://via.placeholder.com/1500x840" alt="new provider" />
          <input ref={this.imageRef} type="file" accept="image/*" name="file" required />
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
