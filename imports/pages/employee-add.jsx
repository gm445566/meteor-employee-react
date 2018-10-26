import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';

import Header from '../ui/header';
import Footer from '../ui/footer';

export default class EmployeeAdd extends React.Component {
  onSubmit(e) {
    const name = this.refs.name.value.trim();
    const email = this.refs.email.value.trim();
    const age = this.refs.age.value.trim();

    e.preventDefault();

    Meteor.call('employee.insert', name, email, age);
    this.refs.name.value = '';
    this.refs.email.value = '';
    this.refs.age.value = '';
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Add employee</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="name" ref="name" name="name" placeholder="Name" />
          <br />
          <input type="email" ref="email" name="email" placeholder="Email" />
          <br />
          <input type="age" ref="age" name="age" placeholder="Age" />
          <br />
          <br />
          <button>Create Employee</button> <Link to="/">Cancel</Link>
        </form>
        <Footer />
      </div>
    );
  }
}
