import React from 'react';
import Header from '../ui/header';
import Footer from '../ui/footer';
import EmployeeList from './employee-list';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Home</h1>
        <EmployeeList />
        <Footer />
      </div>
    );
  }
}
