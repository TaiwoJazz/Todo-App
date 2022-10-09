import React from 'react';
import classes from './TodoMenu.module.css';

const TodoMenu = props => {
  return (
    <div className={classes.menu}>
      <span>{props.todoLength} items left</span>
      <div>
        <span onClick={props.allTask}>All</span>
        <span onClick={props.filteredActive}>Active</span>
        <span onClick={props.filteredComplected}>Complected</span>
      </div>
      <span className={classes.clear} onClick={props.onClear}>
        Clear Complected
      </span>
    </div>
  );
};

export default TodoMenu;
