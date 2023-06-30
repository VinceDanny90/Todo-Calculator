const initialState = {
    todos: [],
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          todos: [
            ...state.todos,
            {
              text: action.payload.text,
              completed: false,
            },
          ],
        };
  
      case 'TOGGLE_TODO':
        return {
          todos: state.todos.map((todo, index) =>
            index === action.payload.index
              ? { ...todo, completed: !todo.completed }
              : todo
          ),
        };
  
      case 'DELETE_TODO':
        return {
          todos: state.todos.filter((_, index) => index !== action.payload.index),
        };
  
      default:
        return state;
    }
  };
  
  export default todoReducer;
  