import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';
import Sign from "./screens/sign";
import Navigation from "./components/containers/navigation";
import MainHeader from "./components/containers/main-header";
import HomePage from "./screens/home-page";
import Menus from "./screens/menu";
import Trending from "./screens/trending";
import UsersPage from "./screens/users";
import Message from "./screens/message";
import Settings from "./screens/settings";

const customHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
     <Router history={customHistory}>
       <div className="d-flex">
         <Route exact path='/' render={(routeProps) => <Sign routeProps={routeProps}/>}/>
         <Route strict path='/:page' render={(routeProps) => <Navigation routeProps={routeProps}/>}/>
         <Route strict path='/:page' render={(routeProps) => <MainHeader routeProps={routeProps}/>}/>

         <Switch>
           <Route path='/home' render={(routeProps) => <HomePage routeProps={routeProps}/>}/>
           <Route path='/menu' render={(routeProps) => <Menus routeProps={routeProps}/>}/>
           <Route path='/trending' render={(routeProps) => <Trending routeProps={routeProps}/>}/>
           <Route path='/users' render={(routeProps) => <UsersPage routeProps={routeProps}/>}/>
           <Route path='/message' render={(routeProps) => <Message routeProps={routeProps}/>}/>
           <Route path='/settings' render={(routeProps) => <Settings routeProps={routeProps}/>}/>

         </Switch>
       </div>
     </Router>
    );
  }
}
export default App;