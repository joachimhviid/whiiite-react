import React, { Component } from 'react'

//Images
import DownArrow from '../media/arrow.svg'

export default class Header extends Component {
    render() {
        return (            
            <div className="container">
                <div className="row">
                    <h1 className="heading grid-lg-6 grid-xs-12 grid-sm-8 grid-md-6">Welcome to my portfolio!</h1>
                </div>
                <div className="row">
                    <p className="lg-pg grid-lg-6 grid-xs-12 grid-sm-8 grid-md-6">I'm Joachim.<br />This is my page featuring most of the stuff I enjoy spending time on.<br />Grab a coffee and take a look.</p>
                </div>
                <a href="#MyWork">
                    <img src={DownArrow} alt="Down pointing arrow" className="down" />
                </a>
                <div style={{height: '200px'}}></div>
            </div>
        )
    }
    
}