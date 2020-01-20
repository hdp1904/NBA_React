
import React from 'react';
import logo from '../assets/images/nba-logoman-word-white.svg';

export class TopNavBar extends React.Component {
 render() {
   return (
     <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
       <a href="https://github.com/hdp1904/NBA-react" id="header-word">GitHub</a>
       <a href="https://www.linkedin.com/in/markycchen/" id="header-word">LinkedIn</a>
     </header>
   );
 }
}
