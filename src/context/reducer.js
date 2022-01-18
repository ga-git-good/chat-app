import {
    SET_USERNAME,
    SET_USER_ID,
    SET_TOKEN,
    SET_SIGNEDIN,
    SAVE_STATE,
} from './action-types'

export default (state, action) => {
    switch (action.type) {
        case SET_USERNAME:
            return action.payload === null
                ? {...state, userName: null}
                : {...state, userName: action.payload}
        case SET_USER_ID:
            return action.payload === null
                ? {...state, userId: null}
                : {...state, userId: action.payload}
        case SET_USER_ID:
            return action.payload === null
                ? {...state, userId: null}
                : {...state, userId: action.payload}
        case SET_TOKEN:
            return action.payload === null
                ? {...state, token: null}
                : {...state, token: action.payload}
        case SET_SIGNEDIN:
            return action.payload === null
                ? {...state, loggedIn: false}
                : {...state, loggedIn: action.payload}
        case SET_ROOMS_ID:
            return action.payload === null
                ? {...state, loggedIn: false}
                : {...state, loggedIn: action.payload}
        case SAVE_STATE:
            return action.payload === null
                ? {...state, shouldSaveState: false}
                : {...state, shouldSaveState: action.payload}
        default:
            return state
    }
}