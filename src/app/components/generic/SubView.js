import React from 'react';
import PropTypes from 'prop-types';

const SubView = ({ match }) => (
    <div>
        <h4>Section: {match.params.sectionName}</h4>
    </div>
);

SubView.propTypes = {
    match: PropTypes.object,
};

SubView.defaultProps = {
    match: null,
};

export default SubView;
