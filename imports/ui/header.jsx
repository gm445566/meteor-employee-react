import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <p>
          <Link to="/">Home</Link> {' | '}
          <Link to="/employee-add">New Employee</Link>
        </p>
      </div>
    );
  }
}
