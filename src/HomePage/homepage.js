import React, { Component } from 'react'
import Header from './Header';
//import Footer from './footer'
import ComponentName from './component1'
class Homepage extends Component {
  render() {
    return (
      <div>
         <Header/>
          <ComponentName/>
      </div>
    )
  }
}

export default Homepage;
