import React, { Component } from 'react'

//Images
import ZooMockup from '../media/odense-zoo-mockup.png'
import TailorLogin from "../media/tailor-login-page.png"
import Lunde404 from "../media/404-page-lunde.png"

export default class MyWork extends Component {
    render() {
        return (
            <section id="MyWork">
                <div className="container top-content">
                    <h1 className="heading">My work</h1>
                    <div className="row space">
                    <div className="textcontainer grid-lg-6 grid-md-6 grid-sm-8 grid-xs-12">
                        <h3 className="sub-heading">Odense Zoo Website</h3>
                        <p className="lg-pg">My attempt at recreating Odense Zoo's website as part of a project about making digital content.</p>
                    </div>
                    <img className="grid-lg-6 grid-md-6 grid-sm-4 grid-xs-12 border" src={ZooMockup} alt="Mockup showcasing zoo website on multiple platforms" />
                    </div>
                    <div className="row space">
                    <div className="textcontainer grid-lg-6 grid-md-6 grid-sm-8 grid-xs-12">
                        <h3 className="sub-heading">Sharpen design challenge</h3>
                        <p className="lg-pg">Result of a <a className="intext" href="https://sharpen.design/">sharpen.design</a> challenge<br /> and a few hours of work designing a login page for a tailor in Rio de Janeiro.</p>
                    </div>
                    <img src={TailorLogin} alt="A login page made for a Brazillian tailor as part of a design challenge" className="grid-lg-6 grid-md-6 grid-sm-4 grid-xs-12 border" />
                    </div>
                    <div className="row space">
                    <div className="textcontainer grid-lg-6 grid-md-6 grid-sm-8 grid-xs-12">
                        <h3 className="sub-heading">404 page for a small town</h3>
                        <p className="lg-pg">Part of a larger project for a small town in Jutland. </p>
                    </div>
                    <img src={Lunde404} alt="A 404 page made for a small town as part of a larger project" className="grid-lg-6 grid-md-6 grid-sm-4 grid-xs-12 border" />
                    </div>
                </div>
            </section>

        )
    }
}
