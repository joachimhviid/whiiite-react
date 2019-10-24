import React, { Component } from 'react'

export default class AboutMe extends Component {
    render() {
        return (
            <main className="container top-content">
                    <div className="row">
                    <h1 className="heading grid-lg-6 grid-xs-12 grid-sm-8 grid-md-6">About me</h1>
                    </div>
                    <div className="row">
                    <p className="lg-pg grid-lg-8 grid-xs-12 grid-sm-8 grid-md-8">Hello! <br /><br />I’m Joachim Hviid, a simple guy with
                        a passion for creative work. Throughout all my life I’ve had a fascination with creating things.
                        Whether it be baking elaborate cakes or drawing small artworks I’ve always been able to immerse
                        myself with producing all kinds of stuff.<br /><br />
                        Currently I am studying at UCL as a Multimediadesigner, where I’m learning about web design and
                        development as well as refining my skills in software such as Photoshop and Illustrator.</p>
                    </div>                
            </main>
        )
    }
}
