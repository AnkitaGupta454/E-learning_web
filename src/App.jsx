import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import Home from './Home';
 import Notes from "./Notes";
import Navbar from './Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
const App=()=>{
  return (
   <>
   <Navbar/>
    <Switch>
      <Route exact path="/Home" component={Home}/>
      <Route exact path="/Contact" component={Contact}/>
      <Route exact path="/About" component={About}/>
      <Route exact path="/Services" component={Services}/>
      <Route exact path="/Notes" component={Notes}/>
       <Redirect to="/Home" />
    </Switch>
   </>
  );
}
export default App;