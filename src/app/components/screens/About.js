import React from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const SubView = ({ match }) => (
    <div>
        <h4>Section: {match.params.sectionName}</h4>
    </div>
);

export default ({match}) => {
    let matchUri = { ...match };

    if (!matchUri.url) {
        matchUri = {
            ...matchUri,
            url: '/'
        };
    }

    return (
        <BrowserRouter>
            <div className="container-fluid">
                <h2><FormattedMessage id="about.title" /></h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu risus, tempus ut magna nec, ornare pretium dolor. Suspendisse ut ligula a nisl fermentum viverra vel ut nibh. Aliquam tincidunt, metus sed faucibus euismod, quam orci aliquet eros, quis ultricies urna nunc quis lorem. In euismod nisi vitae dignissim finibus.
                <hr />
                <div>
                    <Route exact path={matchUri.url} render={() => <h4>Nested routes example, please select a section:</h4>} />
                    <Link to={`${matchUri.url}/history`}>History - </Link>
                    <Link to={`${matchUri.url}/partners`}>Partners - </Link>
                    <Link to={`${matchUri.url}/clients`}>Clients</Link>
                    <Route path={`${matchUri.url}/:sectionName`} component={SubView} />
                </div>
            </div>
        </BrowserRouter>
    );
};
