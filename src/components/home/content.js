import React, { Component } from 'react';
import Footer from './footer';
import Main from './main';


export default class Content extends Component {
  render() {
    return (
      <div className="bg-secondary-layer-color position--relative">
         <div className="gutter">
           <Main/>
           <Footer/>
         </div>

      </div>
    );
  }
}
