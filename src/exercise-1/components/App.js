import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import '../styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './Home';
import MyProfile from './MyProfile';
import Products from './Products';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="app">
        <ul>
          <li>
            <Link to='/Home'>Home</Link>
            <Link to='/MyProfile'>My Profile</Link>
            <Link to='/AboutMe'>AboutMe</Link>
            <Link to='/Products'>Products</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/MyProfile' component={MyProfile}/>
          {/* <Route path='/AboutMe' component={AboutMe}/> */}
          <Route path='/Products' component={Products}/>

        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
