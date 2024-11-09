import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async action to fetch the to-do list
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('https://670cb2ec7e5a228ec1d10fcb.mockapi.io/toDoList/toDoList');
  return await response.json();
});

// Async action to delete a to-do item
export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  const response = await fetch(`https://670cb2ec7e5a228ec1d10fcb.mockapi.io/toDoList/toDoList/${id}`, {
    method: 'DELETE',
  });
  if (response.ok) return id;
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    data: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.data = state.data.filter((todo) => todo.id !== action.payload);
      });
  },
});

export default todoSlice.reducer;
