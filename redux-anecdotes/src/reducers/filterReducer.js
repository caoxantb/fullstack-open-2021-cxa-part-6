const initialFilter = "";

const filterReducer = (state = initialFilter, action) => {
  if (action.type === "FILTER") return action.data;
  return state;
};

export const filterActionCreators = (filter) => {
  return {
    type: "FILTER",
    data: filter,
  };
};

export default filterReducer;
