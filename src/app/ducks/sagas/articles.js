import { put } from 'redux-saga/effects';

import { createArticleSuccess } from '../actions';
import { createArticleFailure } from '../actions';

export function* workerRegisterArticle(action) {
    try {
        yield put(createArticleSuccess());
    } catch (err) {
        yield put(createArticleFailure(err));
    }
}
