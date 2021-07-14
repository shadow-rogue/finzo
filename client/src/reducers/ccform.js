import { SAVED_INFO,
INFO_SAVE_FAIL } from "../actions/types";

const initialState = {
    basicinfo :{},
    loading: true,
    error: {}
}

export default function(state = initialState, action)
{
    const {type, payload} = action;

    switch(type) {
        case SAVED_INFO:
            return {
                ...state,
                basicinfo: payload,
                loading: false,
            };
        case INFO_SAVE_FAIL:
            return {
                ...state,
                basicinfo: null,
                loading: false
            };
        default:
            return state;
    }
}