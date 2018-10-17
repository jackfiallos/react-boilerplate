import { combineReducers } from 'redux';

// Reducers
import articles from './articles.reducer';
import posts from './posts.reducer';
import language from './language.reducer';

export default combineReducers({
    articles,
    posts,
    language
});
