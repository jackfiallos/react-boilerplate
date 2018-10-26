import { combineReducers } from 'redux';

// Reducers
import articles from './articles.reducer';
import posts from './posts.reducer';
import configuration from './configuration.reducer';

export default combineReducers({
    articles,
    posts,
    configuration,
});
