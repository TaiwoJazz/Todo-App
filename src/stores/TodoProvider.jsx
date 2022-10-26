import React, { useReducer } from 'react';
import TodoContext from './todo-context';

const defaultTodoState = {
  tasks: localStorage.getItem('todoLists')
    ? JSON.parse(localStorage.getItem('todoLists'))
    : [],
  button: ''
};

const todoReducer = (state, action) => {
  if (action.type === 'ADD') {
    let tasks = state.tasks.concat(action.task);

    localStorage.setItem('todoLists', JSON.stringify(tasks));

    return {
      tasks: tasks
    };
  }

  if (action.type === 'REMOVE') {
    const tasks = state.tasks.filter(task => task.id !== action.id);

    localStorage.setItem('todoLists', JSON.stringify(tasks));

    return {
      tasks: tasks
    };
  }

  if (action.type === 'COMPLETE') {
    const tasks = state.tasks.map(task => {
      return task.id === action.id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });

    localStorage.setItem('todoLists', JSON.stringify(tasks));

    return {
      tasks: tasks
    };
  }

  if (action.type === 'ALL') {
    return {
      tasks: JSON.parse(localStorage.getItem('todoLists'))
    };
  }

  if (action.type === 'ACTIVE') {
    const tasks = JSON.parse(localStorage.getItem('todoLists')).filter(
      task => task.complete === false
    );

    return {
      tasks: tasks,
      button: 'Active'
    };
  }

  if (action.type === 'COMPLETED') {
    let tasks = JSON.parse(localStorage.getItem('todoLists')).filter(
      task => task.complete === true
    );

    return {
      tasks: tasks,
      button: 'Completed'
    };
  }

  if (action.type === 'CLEAR') {
    const tasks = JSON.parse(localStorage.getItem('todoLists')).filter(task => {
      return task.complete === false;
    });

    localStorage.setItem('todoLists', JSON.stringify(tasks));

    return {
      tasks: tasks
    };
  }
};

const TodoProvider = props => {
  const [todoList, dispatchTodoList] = useReducer(
    todoReducer,
    defaultTodoState
  );

  const addTaskHandler = todoTask => {
    dispatchTodoList({ type: 'ADD', task: todoTask });
  };

  const removeTaskHandler = id => {
    dispatchTodoList({ type: 'REMOVE', id: id });
  };

  const completedTaskHandler = id => {
    dispatchTodoList({ type: 'COMPLETE', id: id });
  };

  const allTaskHandler = () => {
    dispatchTodoList({ type: 'ALL' });
  };

  const activeHandler = () => {
    dispatchTodoList({ type: 'ACTIVE' });
  };

  const completedHandler = () => {
    dispatchTodoList({ type: 'COMPLETED' });
  };

  const clearCompletedHandler = () => {
    dispatchTodoList({ type: 'CLEAR' });
  };

  const localStorageItems = localStorage.getItem('todoLists');
  let length;

  if (localStorageItems) {
    length = JSON.parse(localStorage.getItem('todoLists')).filter(
      task => task.complete === false
    ).length;
  }

  const todoContext = {
    todoList: todoList.tasks,
    button: todoList.button,
    addTask: addTaskHandler,
    removeTask: removeTaskHandler,
    completedTask: completedTaskHandler,
    allTask: allTaskHandler,
    active: activeHandler,
    completed: completedHandler,
    clearCompleted: clearCompletedHandler,
    length
  };

  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
