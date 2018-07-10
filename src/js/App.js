import React, { Component } from 'react';
import '../css/App.css';
import Header from './header.js';
import Info from './info.js';
import Skills from './skills.js';
import Education from './education.js';
import Repos from './repos.js';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Info/>
        <Skills/>
        <Education/>
        <Repos/>
      </div>
    );
  }
}

export default App;
