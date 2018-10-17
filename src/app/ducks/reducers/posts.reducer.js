import { RECEIVE_POSTS, FAILURE_POSTS, REQUEST_POSTS } from '../constants';

const initialState = {
    posts: [],
    loading: false,
    error: undefined
};

const postsReducer = (state = initialState, action = {}) => {
    let newState = {...state};

    switch (action.type) {
        case REQUEST_POSTS:
            newState = {
                ...newState,
                loading: true
            };
            return newState;
        case RECEIVE_POSTS:
            newState = {
                ...newState,
                posts: [
                    ...newState.posts,
                    ...action.payload
                ],
                loading: false
            };
            return newState;
        case FAILURE_POSTS:
            newState = {
                ...newState,
                posts: [],
                error: action.error,
                loading: false
            };
            return newState;
        default:
            return state;
    }
};

export default postsReducer;
