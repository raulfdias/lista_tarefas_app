import axios from 'axios';

const URL = 'http://localhost:3003/api/todos'

// STATE
const INITIAL_STATE = {
    description: '',
    list: []
};


// ==================================================================================================================


// REDUCER
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload.description }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload.data }
        case 'TODO_CLEAR':
            return { ...state, description: '' }
        default:
            return state
    }
}


// ==================================================================================================================


// ACTION CREATORS
export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: {
        description: event.target.value
    }
});

export const search = (description = '') => {
    const search = description ? `&description__regex=/${description}/` : '';
    let request = axios.get(`${URL}?sort=-createAt${search}`);
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}

// export const search = () => {
//     return (dispatch, getState) => {
//         const description = getState().todo.description
//         const search = description ? `&description__regex=/${description}/` : ''
//         const request = axios.get(`${URL}?sort=-createdAt${search}`)
//             .then(resp => dispatch({ type: 'TODO_SEARCHED', payload: resp.data }))
//     }
// }

export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch({ type: 'TODO_CLEAR', payload: resp.data }))
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: 'TODO_CLEAR' }]
}


