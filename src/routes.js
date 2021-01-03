import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import User from './pages/user';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/users" component={User} />
      </Switch>
    </BrowserRouter>
  );
}
