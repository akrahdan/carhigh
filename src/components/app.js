import React, { Component } from 'react';
import Header from './home/header';
import Content from './home/content';

export default class App extends Component {
  render() {
    return (
     <div className="sub-wrapper">
       <div className="wrapper bg-primary-layer-color" style={appStyle}>
          <Header/>
          <Content/>
       </div>
     </div>
    );
  }
}

const appStyle = {
   paddingTop:'60px'
};
