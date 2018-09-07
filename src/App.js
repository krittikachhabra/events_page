import React, { Component } from 'react';
import logo from './logo.svg';
import './buttons.css'

class App extends Component {
  render() {
      return (
          <div>
              <meta charSet="UTF-8" />
              {/*
Please note: this code is in no way ready to be used as is in production on your website. It will need to be adapted to be cross browser compliant & accessible. I just wanted to share how one might go about this effect with CSS & JS and no other dependencies
*/}
              <div className="container">
                  <div className="card-column column-0">
                      <div className="card card-color-0">
                          <div className="border" />
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-00.jpg" />
                          <h1>Computer Science Events</h1>
                      </div>
                      <div className="card card-color-2">
                          <div className="border" />
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-02.jpg" />
                          <h1>Electronics Events</h1>
                      </div>
                      <div className="card card-color-4">
                          <div className="border" />
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-02.jpg" />
                          <h1>Aerospace Events</h1>
                      </div>
                      <div className="card card-color-6">
                          <div className="border" />
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-02.jpg" />
                          <h1>Civil Events</h1>
                      </div>
                  </div>
                  <div className="card-column column-1">
                      <div className="card card-color-1">
                          <div className="border" />
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-01.jpg" />
                          <h1>Electrical Events</h1>
                      </div>
                      <div className="card card-color-3">
                          <div className="border" />
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-03.jpg" />
                          <h1>Mechanical Events</h1>
                      </div>
                      <div className="card card-color-5">
                          <div className="border" />
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-01.jpg" />
                          <h1>Production Events</h1>
                      </div>
                      <div className="card card-color-7">
                          <div className="border" />
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-03.jpg" />
                          <h1>Metallurgical Events</h1>
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

export default App;
