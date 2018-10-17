import React from 'react';

export default () => {
    return (
        <div className="container-fluid">
            <div className="py-5 text-center">
                <h2>Form example</h2>
                <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu risus, tempus ut magna nec, ornare pretium dolor. Suspendisse ut ligula a nisl fermentum viverra vel ut nibh. Aliquam tincidunt, metus sed faucibus euismod, quam orci aliquet eros, quis ultricies urna nunc quis lorem. In euismod nisi vitae dignissim finibus.
                </p>
            </div>
            <div className="row">
                <div className="col-md-12 order-md-1">
                    <h4 className="mb-3">User Details</h4>
                    <form className="needs-validation" noValidate="">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName">First name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName">Last name</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username">Username</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">@</span>
                                </div>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">
                                Email{' '}
                                <span className="text-muted">(Optional)</span>
                            </label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                        </div>
                        <hr className="mb-4" />
                        <button className="btn btn-primary btn-lg btn-block" type="submit">
                            Continue
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
