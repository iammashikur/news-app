import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import RedirectTo from './components/RedirectTo';
import Footer from './components/Footer';
import Home from './pages/Home';
import Page from './pages/Page';
import Category from './pages/Category';
import Single from './pages/Single';
import Search from './pages/Search';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


   class Index extends Component{

    render(){

        return (


            <Router>
                <Navbar/>


                <div style={{minHeight: "100vh"}}>


                <Switch>

                  <Route path="/" exact component={Home} />

                  <Route exact path="/category/:slug" exact component={Category} />
                  <Route path="/news/:slug" exact component={Single} />
                  <Route path="/page/:slug" exact component={Page} />
                  <Route path="/search" exact component={Search} />
                  <Route path="/redirect/:location/:slug" exact component={RedirectTo} />

                </Switch>



                </div>
                <Footer/>

            </Router>


          );

    }

  }



if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
