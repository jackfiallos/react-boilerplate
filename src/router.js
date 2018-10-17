import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

// Layouts
import { MainLayout, EmptyLayout } from './app/layouts';

// Views
import MainContainer from './app/views/main/MainContainer';
import LoginContainer from './app/views/login/LoginContainer';
import FeaturesContainer from './app/views/features/FeaturesContainer';
import AboutContainer from './app/views/about/AboutContainer';
import SignupContainer from './app/views/signup/SignupContainer';
import ReduxContainer from './app/views/redux/ReduxContainer';

import { NotFound } from './app/components/generic';

// store config
import store from './app/ducks/store/index';

const DefaultLayout = () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <MainLayout path="/" exact component={MainContainer} />
                <MainLayout path="/login" component={LoginContainer} />
                <MainLayout path="/features" component={FeaturesContainer} />
                <MainLayout path="/about" component={AboutContainer} />
                <MainLayout path="/signup" component={SignupContainer} />
                <MainLayout path="/redux" component={ReduxContainer} />
                <EmptyLayout component={NotFound} />
            </Switch>
        </Router>
    </Provider>
);

export default DefaultLayout;
