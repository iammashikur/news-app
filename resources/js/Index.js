import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Category from './pages/Category';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


   function Index() {
    return (


      <Router>
          <Navbar/>


          <div style={{minHeight: "100vh"}}>


          <Switch>

            <Route path="/" exact component={Home} />

            <Route exact path="/category/1" exact component={Category} />

          </Switch>



          </div>
          <Footer/>

      </Router>


    );
  }



if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
