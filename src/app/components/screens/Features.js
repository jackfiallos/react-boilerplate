import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

export default () => {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <h2><FormattedMessage id="features.title" /></h2>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <h3>Heading</h3>
                        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                        <p><Link to="/" className="btn btn-secondary" role="button">View details »</Link></p>
                    </div>
                    <div className="col-md-4">
                        <h3>Heading</h3>
                        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                        <p><Link to="/" className="btn btn-secondary" role="button">View details »</Link></p>
                    </div>
                    <div className="col-md-4">
                        <h3>Heading</h3>
                        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                        <p><Link to="/" className="btn btn-secondary" role="button">View details »</Link></p>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};
