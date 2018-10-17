import {
    CREATE_ARTICLE_REQUEST,
    CREATE_ARTICLE_SUCCESS,
    CREATE_ARTICLE_FAILURE,
    REMOVE_ARTICLE
} from '../constants';

export const registerArticle = (article) => ({
    type: CREATE_ARTICLE_REQUEST,
    payload: article
});

export const removeArticle = (index) => ({
    type: REMOVE_ARTICLE,
    index
});

export const createArticleSuccess = () => ({
    type: CREATE_ARTICLE_SUCCESS,
});

export const createArticleFailure = (error) => ({
    type: CREATE_ARTICLE_FAILURE,
    payload: error
});
