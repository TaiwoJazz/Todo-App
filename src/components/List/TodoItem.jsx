import React from 'react';
import classes from './TodoItem.module.css';
import TodoMenu from './TodoMenu';
import RadioButtonUncheckedSharpIcon from '@mui/icons-material/RadioButtonUncheckedSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
// import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import TodoContext from '../../stores/todo-context';
import { useContext } from 'react';

const TodoItem = () => {
  const todoCtx = useContext(TodoContext);

  const handleRemove = id => {
    todoCtx.removeTask(id);
  };

  const handleCompleteTask = id => {
    todoCtx.completedTask(id);
  };

  return (
    <div className={classes.item}>
      <ul>
        {todoCtx.length === 0 ? (
          <p>No {todoCtx.button} Task(s)</p>
        ) : (
          todoCtx.todoList.map(task => (
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
      {<TodoMenu />}
    </div>
  );
};

export default TodoItem;
