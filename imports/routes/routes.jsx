import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Home from '../pages/home';
import EmployeeAdd from '../pages/employee-add';
import EmployeeDeail from '../pages/employee-detail';
import NotFound from '../pages/not-found';

const history = createHistory();
/* const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    history.replace('/links');
  }
};
const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    history.replace('/');
  }
};
 */
export const routes = (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/employee-add" component={EmployeeAdd} />
      <Route path="/employee-detail" component={EmployeeDeail} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);
