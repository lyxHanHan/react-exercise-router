import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import '../styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './Home';
import MyProfile from './MyProfile';
import '../styles/App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="app">
        <ul>
          <li>
            <Link to='/MyProfile'>My Profile</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/MyProfile' component={MyProfile}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
