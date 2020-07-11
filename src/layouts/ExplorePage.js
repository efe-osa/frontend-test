import React from 'react';
import NavBar from '../components/common/NavBar';
import Items from '../components/Items'
import NewProviderForm from '../components/forms/NewProviderForm';
import ApiService from '../utils/apiService';
import LoadingScreen from '../components/common/LoadingScreen';

class ExplorePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      hasError: false
    };
  }

  async componentDidMount() {
    this.queryProviders()
  }

  setLoading = (isLoading) => {
    this.setState({
      isLoading
    });
  }

  filterProviders = (event) => {
    // TASK 2:
    // On input, filter Available Providers based on Name, Address and Type
    //
    // ============== CODE GOES BELOW THIS LINE :) ==============
    const { value } = event.target
    if (/\w+/.test(value)) {
      this.queryProviders(value)
    }
  }

  queryProviders = async (str) => {
    this.setLoading(true);
    const callApiService = str ? ApiService.get(ApiService.ENDPOINTS.providers, { contains: str })
      : ApiService.get(ApiService.ENDPOINTS.providers)

    try {
      const data = await callApiService
      this.setState({
        data
      })
    } catch (_) {
      this.setState({ hasError: true })
    } finally {
      this.setLoading(false)
    }
  }

  switchView = (e) => {
    // TASK 4:
    // onClick on a view preference, switch across the different view options (Gallery, List, Grid)
    // based on whatever the user selects.
    //
    // ============== CODE GOES BELOW THIS LINE :) ==============

    this.setState({ viewType: e.target.id })
  }

  render() {
    const { isLoading, data, viewType, hasError } = this.state;

    return (
      <div className="container">
        <NavBar />
        <div className="content__main">
          <section className="main__top-providers">
            <h2 className="text-header">Our Providers</h2>
            <div className="flex-row box-shadow" style={{ padding: "1rem" }}>
              <div>
                <input
                  type="text"
                  className="input__style_1 input__search"
                  placeholder="&#xf002; Search with Provider Name, Address, or Type"
                  onChange={this.filterProviders}
                  onInput={this.filterProviders}
                />
              </div>
              <div className="layout-switcher">
                <i className="fa fa-images active" onClick={this.switchView} id="images"></i>
                <i className="fa fa-th-large" onClick={this.switchView} id="large"></i>
                <i className="fa fa-th-list" onClick={this.switchView} id="list"></i>
              </div>
            </div>
            {(isLoading) ? (
              <LoadingScreen />
            ) ? hasError : <h1>No data found </h1> : (
                <React.Fragment>
                  <Items items={data} viewType={viewType} />
                </React.Fragment>
              )}
          </section>
          <section className="main__new-provider fixed">
            <div className="new-provider">
              <h2 className="text-header">Can't find a Provider?</h2>
              <p className="text-body">Feel free to recommend a new one.</p>
              <hr />
              <NewProviderForm />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ExplorePage;
