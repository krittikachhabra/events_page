import React, { Component } from 'react';
import './App.css';
import './buttons.css';

class New extends Component {
    render() {
        return (
            <div>
                <meta charSet="UTF-8" />
                <title>Expanding card page transition effect</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
                <link rel="stylesheet" href="index.css" />
                {/*
Please note: this code is in no way ready to be used as is in production on your website. It will need to be adapted to be cross browser compliant & accessible. I just wanted to share how one might go about this effect with CSS & JS and no other dependencies
*/}
                <div className="container">
                    <div className="card-column column-0">
                        <div className="card card-color-0">
                            <div className="border" />
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-00.jpg" />
                            <h1>jogo</h1>
                        </div>
                        <div className="card card-color-2">
                            <div className="border" />
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-02.jpg" />
                            <h1>Ejr</h1>
                        </div>
                        <div className="card card-color-4">
                            <div className="border" />
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-02.jpg" />
                            <h1>nkgfngdf</h1>
                        </div>
                        <div className="card card-color-6">
                            <div className="border" />
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-02.jpg" />
                            <h1>ndn Events</h1>
                        </div>
                    </div>
                    <div className="card-column column-1">
                        <div className="card card-color-1">
                            <div className="border" />
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-01.jpg" />
                            <h1>fgfgf Events</h1>
                        </div>
                        <div className="card card-color-3">
                            <div className="border" />
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-03.jpg" />
                            <h1>rdgty Events</h1>
                        </div>
                        <div className="card card-color-5">
                            <div className="border" />
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-01.jpg" />
                            <h1>rdtdr Events</h1>
                        </div>
                        <div className="card card-color-7">
                            <div className="border" />
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-03.jpg" />
                            <h1>mjmj Events</h1>
                        </div>
                    </div>
                </div>
                <div id="cover" className="cover" />
                <div id="open-content" className="open-content">
                    <a href="#" id="close-content" className="close-content"><span className="x-1" /><span className="x-2" /></a>
                    <img id="open-content-image" src />
                    <div className="text" id="open-content-text">
                    </div>
                </div>
            </div>
        );
    }
}

export default New;
