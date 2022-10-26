import React, { useReducer } from 'react';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import TodoItem from './components/List/TodoItem';
// import Footer from './components/UI/Footer';

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

  if (action.type === 'CLEAR') {
    // const tasks = state.tasks.filter(task => {
    //   return !task.complete;
    // });

    const tasks = JSON.parse(localStorage.getItem('todoLists')).filter(task => {
      return task.complete === false;
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
};

function App() {
  const [todoList, dispatchTodoList] = useReducer(
    todoReducer,
    defaultTodoState
  );

  const addTask = todoTask => {
    dispatchTodoList({ type: 'ADD', task: todoTask });
  };

  const removeTask = id => {
    dispatchTodoList({ type: 'REMOVE', id: id });
  };

  const completedTask = id => {
    dispatchTodoList({ type: 'COMPLETE', id: id });
  };

  const clearComplected = () => {
    dispatchTodoList({ type: 'CLEAR' });
  };

  const allTask = () => {
    dispatchTodoList({ type: 'ALL' });
  };

  const active = () => {
    dispatchTodoList({ type: 'ACTIVE' });
  };

  const complected = () => {
    dispatchTodoList({ type: 'COMPLETED' });
  };

  const localStorageItems = localStorage.getItem('todoLists');
  let length;

  if (localStorageItems) {
    length = JSON.parse(localStorage.getItem('todoLists')).filter(
      task => task.complete === false
    ).length;
  }

  return (
    <div>
      <Header />
      <Input onDone={addTask} />
      <TodoItem
        toDoList={todoList}
        onDelete={removeTask}
        onComplete={completedTask}
        onClear={clearComplected}
        allTask={allTask}
        filteredActive={active}
        filteredComplected={complected}
        length={length}
      />
      {/* {<Footer />} */}
    </div>
  );
}

export default App;
