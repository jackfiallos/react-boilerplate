import { connect } from 'react-redux';
import { Main as MainComponent } from '../../components/screens';
import { registerArticle, removeArticle } from '../../ducks/actions';
import { CHANGE_LANGUAGE, CHANGE_THEME } from '../../ducks/constants';

// expose props
const mapStateToProps = state => {
    return {
        articles: state.articles.list,
        loading: state.articles.loading,
    };
};

// expose methods
const mapDispatchToProps = dispatch => {
    return {
        registerArticle: article => dispatch(registerArticle(article)),
        removeItem: index => dispatch(removeArticle(index)),
        changeLanguage: lang =>
            dispatch({
                type: CHANGE_LANGUAGE,
                payload: lang,
            }),
        changeTheme: theme =>
            dispatch({
                type: CHANGE_THEME,
                payload: theme,
            }),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainComponent);
