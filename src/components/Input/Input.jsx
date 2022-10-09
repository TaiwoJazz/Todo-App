import React, { useState } from 'react';

import RadioButtonUncheckedSharpIcon from '@mui/icons-material/RadioButtonUncheckedSharp';
import classes from './Input.module.css';

const Input = props => {
  const [enteredInput, setEnterInput] = useState('');

  const handleChange = e => {
    setEnterInput(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    if (enteredInput.trim().length === 0) {
      return;
    }

    props.onDone({
      task: enteredInput,
      id: Math.random().toString(),
      complete: false
    });
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
