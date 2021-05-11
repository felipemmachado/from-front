import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Forms from '../pages/forms';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Forms} />
  </Switch>
)


export default Routes;
