import React, { useState, useContext } from 'react';
import TodoContext from '../../stores/todo-context';
import RadioButtonUncheckedSharpIcon from '@mui/icons-material/RadioButtonUncheckedSharp';
import classes from './Input.module.css';

const Input = () => {
  const [enteredInput, setEnterInput] = useState('');

  const todoCtx = useContext(TodoContext);

  const handleChange = e => {
    setEnterInput(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    if (enteredInput.trim().length === 0) {
      return;
    }

    const task = {
      task: enteredInput,
      id: Math.random().toString(),
      complete: false
    };

    todoCtx.addTask(task);
    setEnterInput('');
  };

  return (
    <form className={classes.input} onSubmit={submitHandler}>
      <div>
        <button>
          <RadioButtonUncheckedSharpIcon />
        </button>
        <input
          type='text'
          placeholder='Enter task..'
          onChange={handleChange}
          value={enteredInput}
        />
      </div>
      <button type='submit'>+</button>
    </form>
  );
};

export default Input;
