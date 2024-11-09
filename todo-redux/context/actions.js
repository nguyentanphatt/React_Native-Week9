export const FETCH_TODOS = 'FETCH_TODOS';
export const DELETE_TODO = 'DELETE_TODO';

export const fetchTodos = () => async dispatch => {
    const response = await fetch('https://670cb2ec7e5a228ec1d10fcb.mockapi.io/toDoList/toDoList');
    const data = await response.json();
    dispatch({ type: FETCH_TODOS, payload: data });
};

export const deleteTodo = (id) => async dispatch => {
    await fetch(`https://670cb2ec7e5a228ec1d10fcb.mockapi.io/toDoList/toDoList/${id}`, {
        method: 'DELETE'
    });
    dispatch({ type: DELETE_TODO, payload: id });
};