import React, { useContext } from 'react';
import TodoContext from '../../stores/todo-context';
import classes from './TodoMenu.module.css';

const TodoMenu = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <div className={classes.menu}>
      <span>{todoCtx.length} items left</span>
      <div>
        <span onClick={todoCtx.allTask}>All</span>
        <span onClick={todoCtx.active}>Active</span>
        <span onClick={todoCtx.completed}>Complected</span>
      </div>
      <span className={classes.clear} onClick={todoCtx.clearCompleted}>
        Clear Complected
      </span>
    </div>
  );
};

export default TodoMenu;
