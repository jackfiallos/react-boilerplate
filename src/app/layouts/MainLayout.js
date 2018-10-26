import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import { connect } from 'react-redux';

import localeEn from 'react-intl/locale-data/en';
import localeEs from 'react-intl/locale-data/es';

import { Header } from '../components/generic';
import { Footer } from '../components/generic';

import { ThemeProvider } from 'styled-components';
import { baseTheme, highContrast } from '../../theme/globalStyle';

addLocaleData([...localeEn, ...localeEs]);

class MainLayout extends Component {
    static propTypes = {
        selectedTheme: PropTypes.string,
        language: PropTypes.string,
    };

    static defaultProps = {
        selectedTheme: 'baseTheme',
        language: 'en',
    };

    constructor() {
        super();
        const language = navigator.language.split(/[-_]/)[0] || this.props.language; // language without region code or en by default

        // initial language based on local user configuration
        this.state = {
            lang: language,
            translations: require(`../../translations/${language}.json`),
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.language && nextProps.language !== prevState.lang) {
            return {
                lang: nextProps.language,
                translations: require(`../../translations/${nextProps.language}.json`),
            };
        }

        return null;
    }

    componentDidCatch(error, info) {
        console.warn(error, info);
    }

    render = () => {
        const InternalComponent = this.props.component;
        const { lang, translations } = this.state;
        let theme = baseTheme;

        switch (this.props.selectedTheme) {
            case 'highContrast':
                theme = highContrast;
                break;
            default:
                theme = baseTheme;
                break;
        }

        return (
            <ThemeProvider theme={theme}>
                <IntlProvider locale={lang} messages={translations}>
                    <Route
                        {...this.props.computedMatch}
                        render={matchProps => (
                            <div className="DefaultLayout">
                                <Header />
                                <InternalComponent {...matchProps} />
                                <Footer />
                            </div>
                        )}
                    />
                </IntlProvider>
            </ThemeProvider>
        );
    };
}

const mapStateToProps = state => {
    return {
        selectedTheme: state.configuration.theme,
        language: state.configuration.lang,
    };
};

export default connect(mapStateToProps)(MainLayout);
