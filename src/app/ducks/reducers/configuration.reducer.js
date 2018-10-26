import { CHANGE_LANGUAGE, CHANGE_THEME } from '../constants';

const initialState = {
    theme: undefined,
    lang: undefined,
};

const configurationReducer = (state = initialState, action = {}) => {
    let newState = { ...state };

    switch (action.type) {
        case CHANGE_THEME:
            newState = {
                ...newState,
                theme: action.payload,
            };
            return newState;
        case CHANGE_LANGUAGE:
            newState = {
                ...newState,
                lang: action.payload,
            };
            return newState;
        default:
            return state;
    }
};

export default configurationReducer;
