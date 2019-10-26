import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <main className="container">
                    <div className="row">
                    <h1 className="heading grid-lg-6 grid-xs-12 grid-sm-8 grid-md-6">Contact info</h1>
                    </div>
                    <div className="row">
                        <p className="lg-pg grid-lg-6 grid-xs-12 grid-sm-8 grid-md-6">Should anything have caught your interest feel free to contact me using the following below:<br /><br />
                        Email: <a className="intext" href="mailto:joac1099@gmail.com">joac1099@gmail.com</a><br/><br/>
                        <a className="intext" href="https://www.linkedin.com/in/joachim-hviid/">LinkedIn</a></p>
                    </div>
            </main>
        )
    }
}
