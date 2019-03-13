import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Navbar";
import ProdList from "./components/ProductList";
import Detail from "./components/Details";
import Card from "./components/Card";
import Default from "./components/Default";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Switch>
          <Route exact path="/" component={ProdList} />
          <Route path="/details" component={Detail} />
          <Route path="/card" component={Card} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
