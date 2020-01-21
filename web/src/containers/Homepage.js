import React from 'react';
import './Homepage.css';
import Header from '../components/page/Header';

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <body>
        <Header />
      </body>
    )
  }
}