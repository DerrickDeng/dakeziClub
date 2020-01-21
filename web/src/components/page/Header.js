import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <header id='top'>
        <div className='wrapper'>
          <h1 className='logo'><a href='#'>Cardly<span>.</span></a></h1>
          <nav>
            <ul id='navigation'>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>About</a></li>
              <li><a href='#'>Pricing</a></li>
              <li><a href='#'>Portfolio</a></li>
              <li><a href='#'>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}