import React from 'react';
import PropTypes from 'prop-types';
import BarChart from './BarChart';

const GraphView = ({ data }) => <BarChart title="Graph data" data={data} />;

GraphView.propTypes = {
    data: PropTypes.array,
};

GraphView.defaultProps = {
    data: [],
};

export default GraphView;
