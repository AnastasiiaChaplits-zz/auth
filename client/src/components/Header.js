import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Redux Auth</Link>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/signin'>Sign In</Link>
        <Link to='/signout'>Sign Out</Link>
        <Link to='feature'>Feature</Link>
      </div>
    )
  }
}