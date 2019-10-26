import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

//Icons
import HomeIcon from '../../media/home-icon-v3.svg';
import WorkIcon from '../../media/search-icon.svg';
import AboutIcon from '../../media/info-icon.svg';
import ContactIcon from '../../media/contact-icon.svg';

//Pages
import MainPage from "../../pages/index";
import MyWorkPage from "../../pages/mywork";
import AboutPage from "../../pages/about";
import ContactPage from "../../pages/contact";

import './Toolbar.css';
// import DrawerToggle from '../Drawer/DrawerToggle';

const toolbar = props => (
    <Router>
        <header>
            <div className="dots"></div>
            <div className="toolbar">
                <nav className="toolbar_nav">
                    <div className="toolbar_logo"><Link to="../">WHIIITE</Link></div>
                    <div className="tabBar" id="home"><Link to="../"><img src={HomeIcon} className="tabBar_icon" alt="" />Home</Link></div>
                    <div className="tabBar" id="work"><Link to="../mywork"><img src={WorkIcon} className="tabBar_icon" alt="" />My work</Link></div>
                    <div className="tabBar" id="about"><Link to="../about"><img src={AboutIcon} className="tabBar_icon" alt="" />About me</Link></div>
                    <div className="tabBar" id="contact"><Link to="../contact"><img src={ContactIcon} className="tabBar_icon" alt="" />Contact</Link></div>
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