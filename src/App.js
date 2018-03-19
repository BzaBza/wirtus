import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Sign from "./containers/sign";

const customHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
        <Router history={customHistory}>
            <div className="d-flex">
                <Route exact path='/' render={(routeProps) => <Sign routeProps={routeProps}
                                                                    setUserData={this.setUserData}/>}/>
            </div>
        </Router>
    );
  }
}

export default App;
