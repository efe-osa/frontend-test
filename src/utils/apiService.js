import queryString from 'querystring';

const BASE_URL = "https://pro-zone.herokuapp.com";

/**
 * @class ApiService
 * @description Contains methods for making asynchronous Http requests
 * @exports ApiService
 */
class ApiService {
  static ENDPOINTS = {
    providers: `${BASE_URL}/providers`,
    imageUpload: `${BASE_URL}/upload`

  }

  static HEADERS = {
    'authorization': `Bearer ${process.env.REACT_APP_AUTH_KEY} `,
    "content-type": 'application/json',
  }

  /**
   * @method get
   * @description makes a GET request
   * @param {string} url The request url
   * @param {object} data The request params
   * @returns {object} request reponse in JSON format
   */

  static async get(url, data) {
    const response = await fetch(
      `${url}${data ? `?${queryString.stringify(data)}` : ''}`, {
      headers: this.HEADERS
    }
    );
    return response.json();
  }


  /**
   * @method post
   * @description makes a POST request
   * @param {string} url The request url
   * @param {object} data The request params
   * @returns {object} request reponse in JSON format
   */

  static async post(url, data) {
    const response = await fetch(
      url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: this.HEADERS
    }
    );
    return response.json();
  }
  /**
   * @method post
   * @description makes a POST request
   * @param {string} url The request url
   * @param {object} data The request params
   * @returns {object} request reponse in JSON format
   */

  static async upload(url, data) {
    const response = await fetch(
      url, {
      method: 'POST',
      body: data,
      headers: {
        ...this.HEADERS,
        "Content-Type": "multipart/form-data"
      }
    }
    );
    return response.json();
  }
}

export default ApiService;
