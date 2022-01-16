import React from "react";
import { useDispatch } from "react-redux";
import { addAnecdoteActionCreators } from "../reducers/anecdoteReducer";
import {
  addNotificationActionCreators,
  removeNotificationActionCreators,
} from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch(addAnecdoteActionCreators(content));
    dispatch(addNotificationActionCreators(`${content} created`));
    setTimeout(() => dispatch(removeNotificationActionCreators()), 5000);
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
