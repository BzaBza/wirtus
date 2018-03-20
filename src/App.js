import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Sign from "./containers/sign";
import Navigation from "./components/smart/navigation/index";
import MainHeader from "./components/smart/main-header/index";
import HomePage from "./containers/home-page/index";

const customHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
        <Router history={customHistory}>
            <div className="d-flex">
                <Route exact path='/' render={(routeProps) => <Sign routeProps={routeProps}
                                                                    setUserData={this.setUserData}/>}/>
                <Route strict path='/:page' render={(routeProps) => <Navigation routeProps={routeProps}/>}/>
                <Route strict path='/:page' render={(routeProps) => <MainHeader routeProps={routeProps}/>}/>

                <Switch>
                    <Route path='/home' render={(routeProps) => <HomePage routeProps={routeProps}/>}/>
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
