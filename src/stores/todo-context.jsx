import React from 'react';

const TodoContext = React.createContext({
  todoList: [],
  button: '',
  addTask: todoTask => {},
  removeTask: id => {},
  completedTask: id => {},
  allTask: () => {},
  active: () => {},
  completed: () => {},
  clearCompleted: () => {},
  length: 0
});

export default TodoContext;
