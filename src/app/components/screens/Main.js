import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

class Main extends Component {
    static propTypes = {
        articles: PropTypes.array,
        loading: PropTypes.bool,
        registerArticle: PropTypes.func,
        removeItem: PropTypes.func,
        changeLanguage: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.registerArticle(this.state.value);
        this.setState({value: ''});
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleRemoveItem = (event, index) => {
        event.preventDefault();
        this.props.removeItem(index);
    }

    renderlist = (items) => {
        if (items && items.length > 0) {
            return (
                <ul className="list-group list-group-flush">
                    {items.map((item, i) => <li key={i} className="list-group-item">
                        {item}
                        <button type="button" className="close" aria-label="Close" onClick={(e) => this.handleRemoveItem(e, i)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </li>)}
                </ul>
            );
        }

        return (
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <FormattedMessage id="task.emptyList" />
                </li>
            </ul>
        );
    }

    changeLanguage = (e, lang) => {
        e.preventDefault();
        this.props.changeLanguage(lang);
    }

    render = () => {
        return (
            <main role="main" className="container-fluid">
                <div className="jumbotron">
                    <h1>
                        <FormattedMessage id="app.title"
                            defaultMessage="Welcome to {what}"
                            description="Welcome header on app main page"
                            values={{ what: 'React Boilerplate' }}/>
                    </h1>
                    <p className="lead">
                        <FormattedHTMLMessage id="app.intro"/>
                    </p>
                    <div className="btn-group" role="group">
                        <button type="button" className="btn" onClick={e => this.changeLanguage(e, 'en')}>
                            <FormattedMessage id="buttons.english" defaultMessage="English" />
                        </button>
                        <button type="button" className="btn" onClick={e => this.changeLanguage(e, 'es')}>
                            <FormattedMessage id="buttons.spanish" defaultMessage="Spanish" />
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={(e) => this.handleSubmit(e)} >
                            <div className="form-group">
                                <label><FormattedMessage id="task.taskTitle" /></label>
                                <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} />
                            </div>
                            <button type="submit" className="btn btn-success" disabled={this.props.loading}>
                                <FormattedMessage id="task.addTask" />
                            </button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <strong><FormattedMessage id="task.taskList" /></strong>
                        {this.renderlist(this.props.articles)}
                    </div>
                </div>
            </main>
        );
    }
}

export default Main;
