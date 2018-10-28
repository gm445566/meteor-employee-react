import React from 'react';
import { Employees } from '../api/employee';
import { Tracker } from 'meteor/tracker';
import { Link } from 'react-router-dom';

export default class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }
  componentDidMount() {
    this.employeesTracker = Tracker.autorun(() => {
      Meteor.subscribe('employees');
      const employees = Employees.find().fetch();
      this.setState({ employees });
    });
  }

  componentWillUnmount() {
    this.employeesTracker.stop();
  }

  renderEmployeesListItems() {
    return this.state.employees.map(employee => {
      return (
        <li key={employee._id}>
          <Link to={`/employee-detail/${employee._id}`}>{employee.name}</Link>{' '}
          :Age {employee.age}
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
