import React from 'react';
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

import './Toolbar.css';
import DrawerToggle from '../Drawer/DrawerToggle';

const toolbar = props => (
    <Router>
        <header>
            <div className="dots"></div>
            <div className="toolbar">
                <nav className="toolbar_nav">
                    <div className="toolbar_logo"><Link to="../">WHIIITE</Link></div>
                    <div>
                        <DrawerToggle click={props.drawerClickHandler} />
                    </div>
                    <div className="toolbar_nav-items">
                        <ul>
                            <li><Link to="../mywork">My work</Link></li>
                            <li><Link to="../about">About me</Link></li>
                            <li><Link to="../contact">Contact me</Link></li>
                        </ul>
                    </div>
                </nav>
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
            </div>
        </header>
    </Router>
);

export default toolbar;