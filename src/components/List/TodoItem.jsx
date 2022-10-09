import React from 'react';
import classes from './TodoItem.module.css';
import TodoMenu from './TodoMenu';
import RadioButtonUncheckedSharpIcon from '@mui/icons-material/RadioButtonUncheckedSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
// import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const TodoItem = props => {
  const handleRemove = id => {
    props.onDelete(id);
  };

  const handleCompleteTask = id => {
    props.onComplete(id);
  };

  return (
    <div className={classes.item}>
      <ul>
        {props.toDoList.tasks.length === 0 ? (
          <p>No {props.toDoList.button} Task(s)</p>
        ) : (
          props.toDoList.tasks.map(task => (
            <li
              key={task.id}
              id={task.id}
              className={task.complete ? classes.completedTodo : ''}
            >
              <button
                className={classes.complete}
                onClick={handleCompleteTask.bind(null, task.id)}
              >
                {/* <CheckCircleOutlineOutlinedIcon /> */}
                <RadioButtonUncheckedSharpIcon />
              </button>
              {task.task}
              <button
                className={classes.close}
                onClick={handleRemove.bind(null, task.id)}
              >
                <CloseSharpIcon />
              </button>
            </li>
          ))
        )}
      </ul>
      {
        <TodoMenu
          todoLength={props.length}
          allTask={props.allTask}
          filteredActive={props.filteredActive}
          filteredComplected={props.filteredComplected}
          onClear={props.onClear}
        />
      }
    </div>
  );
};

export default TodoItem;
