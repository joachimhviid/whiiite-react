import React from 'react';
import './Drawer.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

//Pages
import MainPage from "../../pages/index";
import MyWorkPage from "../../pages/mywork";
import AboutPage from "../../pages/about";
import ContactPage from "../../pages/contact";

const Drawer = props => (
    <Router>
        <div className="drawer">
            <ul>
                <li><Link to="../mywork">My work</Link></li>
                <li><Link to="../about">About me</Link></li>
                <li><Link to="../contact">Contact me</Link></li>
            </ul>
        </div>
            <Switch>
                <Route path="/about">
                    <AboutPage />
                </Route>
                <Route path="/mywork">
                    <MyWorkPage />
                 </Route>
                <Route path="/contact">
                    <ContactPage />
                </Route>
                <Route path="/">
                    <MainPage />
                </Route>
            </Switch>
    </Router>
);

export default Drawer;