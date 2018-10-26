import { all, takeLatest } from 'redux-saga/effects';

import { CREATE_ARTICLE_REQUEST, REQUEST_POSTS } from '../constants';
import { workerRegisterArticle } from './articles';
import { fetchPosts } from '../actions/posts.actions';

function* watchCreateArticleRequest() {
    yield takeLatest(CREATE_ARTICLE_REQUEST, workerRegisterArticle);
}

function* watchPosts() {
    yield takeLatest(REQUEST_POSTS, fetchPosts);
}

export default function* rootSaga() {
    yield all([watchCreateArticleRequest(), watchPosts()]);
}
