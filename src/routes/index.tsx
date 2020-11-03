import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Certificate from 'pages/CertificatePage';
import Dashboard from 'pages/Dashboard';
import DefaultLayout from 'pages/_layouts/default';
import Shield from 'pages/Shield';

export default function Routes() {
  return (
    <Switch>
      <DefaultLayout>
        <Route path="/" exact component={Dashboard} />
        <Route path="/security" component={Shield} />
        <Route path="/ssl" component={Certificate} />
      </DefaultLayout>
    </Switch>
  );
}
