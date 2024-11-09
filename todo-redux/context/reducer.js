import { FETCH_TODOS, DELETE_TODO } from './actions';

const initialState = {
    data: []
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS:
            return { ...state, data: action.payload };
        case DELETE_TODO:
            return { ...state, data: state.data.filter(todo => todo.id !== action.payload) };
        default:
            return state;
    }
};

export default todoReducer;