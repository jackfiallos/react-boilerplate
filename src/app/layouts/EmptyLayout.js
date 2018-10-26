import React from 'react';
import { Route } from 'react-router-dom';

const EmptyLayout = ({ component: Component, ...rest }) => {
    return <Route {...rest.computedMatch} render={matchProps => <Component {...matchProps} />} />;
};

export default EmptyLayout;
