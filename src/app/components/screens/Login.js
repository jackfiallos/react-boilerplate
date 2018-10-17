import React from 'react';
import { FormattedMessage } from 'react-intl';

export default ({ match }) => {
    return (
        <div className="text-center">
            <form className="form-signin">
                <h1 className="h3 mb-3 font-weight-normal">
                    <FormattedMessage id="login.title" />
                </h1>
                <label htmlFor="inputEmail" className="sr-only">
                    Email address
                </label>
                <input type="email" className="form-control" placeholder="Email address"/>
                <label htmlFor="inputPassword" className="sr-only">
                    Password
                </label>
                <input type="password" className="form-control" placeholder="Password" />
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">
                    Sign in
                </button>
            </form>
        </div>
    );
};
