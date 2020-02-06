import React from 'react';
import './App.scss';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import ExplorePage from './layouts/ExplorePage';
import PageNotFound from './layouts/PageNotFound';

function App() {
  return (
    <BrowserRouter history="">
      <Switch>
        <Route path="/" exact component={ExplorePage}/>
        {/* TODO (6a): Add New Route for Viewing a single Provider */}
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
