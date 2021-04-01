export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD'
export const REQUEST_ROBOTS_PENDING = 'REQUEST_ROBOTS_PENDING';
export const REQUEST_ROBOTS_SUCCESS = 'REQUEST_ROBOTS_SUCCESS';
export const REQUEST_ROBOTS_FAILURE = 'REQUEST_ROBOTS_FAILURE';

export const setSearchField = (text) => {
    return{
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}

export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILURE, payload: error }))
}