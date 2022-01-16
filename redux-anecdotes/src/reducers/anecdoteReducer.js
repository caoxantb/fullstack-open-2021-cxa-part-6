import anecdoteService from "../services/anecdotes";

const initialState = [];

const anecdoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VOTE":
      const id = action.data.id;
      const anecdoteVoted = state.find((a) => a.id === id);
      const anecdoteChanged = {
        ...anecdoteVoted,
        votes: anecdoteVoted.votes + 1,
      };
      return state.map((a) => (a.id !== id ? a : anecdoteChanged));
    case "ADD_ANECDOTE":
      return [...state, action.data];
    case "INIT_ANECDOTES":
      return action.data;
    default:
      return state;
  }
};

export const voteActionCreators = (data) => {
  return async (dispatch) => {
    const updatedData = { ...data, votes: data.votes + 1 };
    await anecdoteService.update(updatedData);
    dispatch({
      type: "VOTE",
      data: updatedData,
    });
  };
};

export const addAnecdoteActionCreators = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.create(content);
    dispatch({
      type: "ADD_ANECDOTE",
      data: newAnecdote,
    });
  };
};

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: "INIT_ANECDOTES",
      data: anecdotes,
    });
  };
};

export default anecdoteReducer;
