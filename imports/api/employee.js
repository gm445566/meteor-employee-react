import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Employees = new Mongo.Collection('Employees');

Meteor.methods({
  'employee.insert'(name, email, age) {
    // insert
    Employees.insert({
      name,
      email,
      age
    });
  }
});
