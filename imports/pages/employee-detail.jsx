import React from 'react';
import { Employees } from '../api/employee';
import { Link } from 'react-router-dom';
import Header from '../ui/header';
import Footer from '../ui/footer';

export default class EmployeeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      employees: []
    };
  }
  componentDidMount() {
    Meteor.subscribe('employees');
    const employees = Employees.find({
      _id: this.props.match.params.id
    }).fetch();

    this.setState({ employees });
  }

  renderEmployeeDetail() {
    return this.state.employees.map(employee => {
      return (
        <div key={employee._id}>
          <b>Name = </b>
          {employee.name} <br />
          <b>Email = </b>
          {employee.email} <br />
          <b>Age = </b>
          {employee.age} <br />
        </div>
      );
    });
  }

  onSubmit(e) {
    const name = this.refs.name.value.trim();
    const email = this.refs.email.value.trim();
    const age = this.refs.age.value.trim();

    e.preventDefault();

    Meteor.call(
      'employee.update',
      this.props.match.params.id,
      name,
      email,
      age
    );
  }

  renderEmployeeEdit() {
    return this.state.employees.map(employee => {
      return (
        <div key={employee._id}>
          <form onSubmit={this.onSubmit.bind(this)}>
            <input
              type="name"
              ref="name"
              name="name"
              defaultValue={employee.name}
            />
            <br />
            <input
              type="email"
              ref="email"
              name="email"
              defaultValue={employee.email}
            />
            <br />
            <input
              type="age"
              ref="age"
              name="age"
              defaultValue={employee.age}
            />
            <br />
            <br />
            <button>Save</button> <Link to="/">Cancel</Link>
          </form>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <Header />
        <h1>Employee Detail</h1>
        {this.renderEmployeeEdit()}

        <Footer />
      </div>
    );
  }
}
