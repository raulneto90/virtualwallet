import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Reports from '../pages/Reports';
import Transaction from '../pages/Transaction';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/transactions" component={Transaction} />
    <Route path="/reports" component={Reports} />
  </Switch>
);

export default Routes;
