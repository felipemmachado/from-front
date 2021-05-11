import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Questions from '../pages/questions';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Questions} />
  </Switch>
)


export default Routes;
