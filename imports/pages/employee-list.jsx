import React from 'react';
import { Employees } from '../api/employee';
import { Tracker } from 'meteor/tracker';

export default class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }
  componentDidMount() {
    console.log('componentDidMount EmployeesList');
    this.employeesTracker = Tracker.autorun(() => {
      Meteor.subscribe('employees');
      const employees = Employees.find().fetch();
      this.setState({ employees });
    });
  }

  componentWillUnmount() {
    // event out of component
    console.log('componentWillUnmount EmployeesList');
    this.employeesTracker.stop();
  }

  renderEmployeesListItems() {
    return this.state.employees.map(employee => {
      return (
        <li key={employee._id}>
          {employee.name} -:Age {employee.age}
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <ul>{this.renderEmployeesListItems()}</ul>
      </div>
    );
  }
}
