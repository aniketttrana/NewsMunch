
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {

  // c="aniket";
  render() {
    return (
      <div>
<Navbar/>
<News pageSize={5} country="us" category="politics"/>
        {/* {this.c} */}
      </div>
    )
  }
}
