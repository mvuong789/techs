import React from 'react';
import AddTodo from './../todo/AddTodo';
import TodoList from './../todo/TodoList';
import VisibilityFilters from './../todo/VisibilityFilters';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}

export default App;
