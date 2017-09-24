import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Jumbo from "./components/Jumbo";
import Field from "./components/Field";

const App = () =>
  <Router>
    <div>
      <Route exact path="/" component={Jumbo} />
      <Route exact path="/win" component={Field} />
    </div>
  </Router>


export default App;
