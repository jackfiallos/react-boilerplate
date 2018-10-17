import { CHANGE_LANGUAGE } from '../constants';

const initialState = {
    lang: undefined
};

const languageReducer = (state = initialState, action = {}) => {
    let newState = {...state};

    switch (action.type) {
        case CHANGE_LANGUAGE:
            newState = {
                ...newState,
                lang: action.payload
            };
            return newState;
        default:
            return state;
    }
};

export default languageReducer;
