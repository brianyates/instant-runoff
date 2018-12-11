import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './Landing';
import PollNew from './PollNew';
import PollSelection from './PollSelection';
import PollResults from './PollResults';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/new-poll' component={PollNew} />
          <Route exact path='/poll/:pollID/voter/:voterID' component={PollSelection} />
          <Route exact path='/poll/:pollID/results' component={PollResults} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
