import React from "react";

import { connect } from "react-redux";
import { addAnecdoteActionCreators } from "../reducers/anecdoteReducer";
import { initializeNotificationActionCreators } from "../reducers/notificationReducer";

const AnecdoteForm = (props) => {
  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    props.addAnecdoteActionCreators(content);
    props.initializeNotificationActionCreators(`${content} created`, 5000);
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

const ConnectedAnecdoteForm = connect(null, {
  addAnecdoteActionCreators,
  initializeNotificationActionCreators,
})(AnecdoteForm);

export default ConnectedAnecdoteForm;
