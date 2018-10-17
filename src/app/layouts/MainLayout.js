import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import { connect } from 'react-redux';

import locale_en from 'react-intl/locale-data/en';
import locale_es from 'react-intl/locale-data/es';

import { Header } from '../components/generic';
import { Footer } from '../components/generic';

addLocaleData([...locale_en, ...locale_es]);
const language = navigator.language.split(/[-_]/)[0]; // language without region code

class MainLayout extends Component {
    constructor() {
        super();

        // initial language based on local user configuration
        this.state = {
            lang: language,
            translations: require(`../../translations/${language}.json`)
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.language && nextProps.language.lang) {
            return {
                lang: nextProps.language.lang,
                translations: require(`../../translations/${nextProps.language.lang}.json`)
            };
        }

        return null;
    }

    render = () => {
        const InternalComponent = this.props.component;
        const { lang, translations } = this.state;

        return (
            <IntlProvider locale={lang} messages={translations}>
                <Route {...this.props.computedMatch} render={matchProps => (
                    <div className="DefaultLayout">
                        <Header />
                        <InternalComponent {...matchProps} />
                        <Footer />
                    </div>
                )} />
            </IntlProvider>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.language
    };
}

export default connect(mapStateToProps)(MainLayout);
