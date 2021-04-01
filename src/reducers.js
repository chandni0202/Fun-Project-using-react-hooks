import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILURE } from './Action'

const initialState = {
    searchField: '',
}

export const searchRobots = ( state = initialState , { type, payload } ) => {
    switch(type) {
        case CHANGE_SEARCH_FIELD:
            return { ...state, 
                searchField: payload 
            }
        default: 
            return state;
    }
}

const robotInitialState = {
    pending: false,
    users: [],
    error: null
}

export const getRobotsReducer = ( state = robotInitialState, action ) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case REQUEST_ROBOTS_SUCCESS:
            return {
                ...state,
                pending: false,
                users: action.payload
            }
        case REQUEST_ROBOTS_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}