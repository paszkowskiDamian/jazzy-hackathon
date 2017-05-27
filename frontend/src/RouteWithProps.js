import React from 'react';
import { Route } from 'react-router-dom';

export function RouteWithProps({ props, component:Component, ...rest}) {
  return <Route {...rest} render={(routeProps) => (
    <Component {...routeProps} {...props} />
  )} />
}
