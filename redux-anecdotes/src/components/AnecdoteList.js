import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { voteActionCreators } from "../reducers/anecdoteReducer";
import { initializeNotificationActionCreators } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const filtering = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const vote = async (id) => {
    const anecdoteLiked = anecdotes.find((a) => a.id === id);
    dispatch(voteActionCreators(anecdoteLiked));
    dispatch(
      initializeNotificationActionCreators(
        `${anecdoteLiked.content} voted`,
        5000
      )
    );
  };

  return (
    <div>
      {anecdotes
        .filter((a) => a.content.includes(filtering))
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AnecdoteList;
