import {connect} from 'react-redux';
import { Main as MainComponent } from '../../components/screens';
import { registerArticle, removeArticle } from '../../ducks/actions';
import { CHANGE_LANGUAGE } from '../../ducks/constants';

// expose props
const mapStateToProps = (state) => {
    return {
        articles: state.articles.list,
        loading: state.articles.loading
    };
};

// expose methods
const mapDispatchToProps = (dispatch) => {
    return {
        registerArticle: (article) => dispatch(registerArticle(article)),
        removeItem: (index) => dispatch(removeArticle(index)),
        changeLanguage: (lang) => dispatch({
            type: CHANGE_LANGUAGE,
            payload: lang
        })
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainComponent);
