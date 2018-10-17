import { call, put } from 'redux-saga/effects';

import API from '../../config/api';
import { RECEIVE_POSTS, FAILURE_POSTS } from '../constants';

function* fetchPosts(args) {
    try {
        const payload = {
            ...args.payload
        };
        const response = yield call((params) => API.get('posts', {params}), payload);

        yield put({
            type: RECEIVE_POSTS,
            payload: response.data
        });
    } catch (e) {
        yield put({
            type: FAILURE_POSTS,
            error: e
        });
    }
}

export { fetchPosts };
