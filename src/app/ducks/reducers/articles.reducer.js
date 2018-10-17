import { CREATE_ARTICLE_REQUEST, CREATE_ARTICLE_SUCCESS, CREATE_ARTICLE_FAILURE, REMOVE_ARTICLE } from '../constants';

const initialState = {
    list: [],
    loading: false,
    error: undefined
};

const articleReducer = (state = initialState, action = {}) => {
    let newState = {...state};

    switch (action.type) {
        case CREATE_ARTICLE_REQUEST:
            newState = {
                ...newState,
                list: [
                    ...newState.list,
                    action.payload
                ],
                loading: true
            };
            return newState;
        case CREATE_ARTICLE_SUCCESS:
            newState = {
                ...newState,
                loading: false
            };
            return newState;
        case CREATE_ARTICLE_FAILURE:
            newState = {
                ...newState,
                loading: false,
                list: [],
                error: action.payload
            };
            return newState;
        case REMOVE_ARTICLE:
            const newList = newState.list.filter((item, index) => index !== action.index);
            newState = {
                ...newState,
                list: [
                    ...newList
                ]
            };
            return newState;
        default:
            return state;
    }
};

export default articleReducer;
