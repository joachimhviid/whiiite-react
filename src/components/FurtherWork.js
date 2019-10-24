import React, { Component } from 'react'

//Images
import PixelArtFemale from '../media/armored-female.png'
import PixelArtMale from '../media/armored-male.png'
import WebdesignSplash from '../media/webdesign-splash.png'
import CoffeeTime from '../media/coffee-time-bg.png'
import CoffeeMug from '../media/Coffee-mug-on-table.jpg'
import WhiiiteV1 from '../media/whiiite-v1-crop.png'

export default class FurtherWork extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <h2>Some other stuff that I have made in no particular order</h2>
                    <div className="row space">
                    <div className="textcontainer grid-lg-6 grid-md-6 grid-sm-8 grid-xs-12">
                        <h3 className="sub-heading">Pixel art</h3>
                        <p className="lg-pg">I enjoy spending time working on designs for all sorts of things. Here I made a male and female knight to be used for learning how to do animations in video games.
                        These were made with Photoshop. </p>
                    </div>
                        <img src={PixelArtFemale} alt="Pixel art of a female knight" className="grid-lg-3 grid-md-3 grid-sm-2 grid-xs-6" />
                        <img src={PixelArtMale} alt="Pixel art of a male knight" className="grid-lg-3 grid-md-3 grid-sm-2 grid-xs-6" />
                    </div>
                    <div className="row space">
                    <div className="textcontainer grid-lg-6 grid-md-6 grid-sm-8 grid-xs-12">
                        <h3 className="sub-heading">Splash art for website</h3>
                        <p className="lg-pg">Made some splash art based on my pixel characters. I played around with different layouts for web usage and ended up with the following. Haven't found a purpose for the design yet, but could happen in the future.
                        <br />Image was made with a combination of Photoshop, Illustrator and XD.</p>
                    </div>
                        <img src={WebdesignSplash} alt="Splash art on a blank website" className="grid-lg-6 grid-md-6 grid-sm-4 grid-xs-12" />
                    </div>
                    <div className="row space">
                    <div className="textcontainer grid-lg-6 grid-md-6 grid-sm-8 grid-xs-12">
                        <h3 className="sub-heading">Coffee vector images</h3>
                        <p className="lg-pg">Not much to say about these ones. The above coffee was the first proper image I made in Illustrator. Going back and looking at it still makes me happy.
                        <br /><br />Below I made a happy coffee mug.<br />
                        I really liked the end product and I had a lot of fun making it. </p>
                    </div>
                        <img src={CoffeeTime} alt="Coffee cup illustration" className="grid-lg-6 grid-md-6 grid-sm-4 grid-xs-12 space" />
                        <img src={CoffeeMug} alt="Happy coffee mug illustration" className="grid-lg-4 grid-md-4 grid-sm-2 grid-xs-12" style={{float: 'right'}} />
                    </div>
                    <div className="row space">
                    <div className="textcontainer grid-lg-6 grid-md-6 grid-sm-8 grid-xs-12">
                        <h3 className="sub-heading">First iteration of this site</h3>
                        <p className="lg-pg">As with all websites, there is usually quite a catalogue of different designs behind them. This is the first of many that would later turn into what you are looking at right now.</p>
                    </div>
                        <img src={WhiiiteV1} alt="The first iteration of whiiite.dk" className="grid-lg-6 grid-md-6 grid-sm-4 grid-xs-12 border" />
                    </div>
                </div>
            </section>

        )
    }
}
