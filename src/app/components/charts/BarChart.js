import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Bar } from '@nivo/bar';

class BarChart extends Component {
    static propTypes = {
        height: PropTypes.number,
        data: PropTypes.array,
    };

    static defaultProps = {
        height: 250,
        data: [],
        onSelect: () => {},
    };

    render() {
        return (
            <Bar
                width={400}
                height={this.props.height}
                indexBy={'id'}
                data={this.props.data}
                padding={0.2}
                labelSkipWidth={16}
                labelSkipHeight={16}
            />
        );
    }
}

export default BarChart;
