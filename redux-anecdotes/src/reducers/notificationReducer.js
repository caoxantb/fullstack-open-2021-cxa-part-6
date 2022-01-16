const initialState = "";

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return action.data;
    case "REMOVE_NOTIFICATION":
      return initialState;
    default:
      return state;
  }
};

export const addNotificationActionCreators = (noti) => {
  return {
    type: "ADD_NOTIFICATION",
    data: noti,
  };
};

export const removeNotificationActionCreators = () => {
  return {
    type: "REMOVE_NOTIFICATION",
  };
};

export default notificationReducer;
