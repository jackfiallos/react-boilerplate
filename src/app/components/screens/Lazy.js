import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import NullView from '../charts/NullView';

class Lazy extends Component {
    static propTypes = {
        data: PropTypes.array,
    };

    static defaultProps = {
        data: [
            {
                id: 'javascript',
                label: 'javascript',
                value: 584,
            },
            {
                id: 'stylus',
                label: 'stylus',
                value: 54,
            },
            {
                id: 'haskell',
                label: 'haskell',
                value: 480,
            },
            {
                id: 'css',
                label: 'css',
                value: 559,
            },
            {
                id: 'erlang',
                label: 'erlang',
                value: 289,
            },
            {
                id: 'go',
                label: 'go',
                value: 222,
            },
            {
                id: 'sass',
                label: 'sass',
                value: 544,
            },
            {
                id: 'rust',
                label: 'rust',
                value: 291,
            },
            {
                id: 'ruby',
                label: 'ruby',
                value: 12,
            },
        ],
    };

    constructor(props) {
        super(props);

        this.state = {
            loadedComponents: [],
            components: [],
        };
    }

    addView = async viewName => {
        // Don't load more than once.
        if (this.state.loadedComponents.includes(viewName)) return;

        import(`../charts/${viewName}.js`)
            .then(ElementComponent => {
                this.setState({
                    loadedComponents: this.state.loadedComponents.concat(viewName),
                    components: this.state.components.concat(
                        <ElementComponent.default key={uuidv4()} data={this.props.data} />,
                    ),
                });
            })
            .catch(error => {
                this.setState({
                    loadedComponents: this.state.loadedComponents.concat(viewName),
                    components: this.state.components.concat(<NullView key={uuidv4()} />),
                });
            });
    };

    handleShowTableChange = async event => {
        await this.addView('TableView');
    };

    handleShowGraphChange = async event => {
        await this.addView('GraphView');
    };

    handleNullGraphChange = async event => {
        await this.addView('NullView');
    };

    render() {
        const { components } = this.state;

        return (
            <div className="container-fluid">
                <p className="lead text-muted">
                    This example loads dinamycally Table and Chart components by demand.
                </p>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={this.handleShowTableChange}
                    >
                        Load Table
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={this.handleShowGraphChange}
                    >
                        Load Chart
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={this.handleNullGraphChange}
                    >
                        Empty
                    </button>
                </div>
                <div className="views">
                    {components.length === 0 ? <div>Nothing to display...</div> : components}
                </div>
            </div>
        );
    }
}

export default Lazy;
