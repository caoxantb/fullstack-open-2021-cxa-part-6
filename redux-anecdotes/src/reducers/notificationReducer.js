const initialState = "";

const notificationReducer = (state = initialState, action) => {
  if (action.type === "INIT_NOTIFICATION") return action.data;
  return state;
};

export const initializeNotificationActionCreators = (noti, timeOut) => {
  return async (dispatch) => {
    dispatch({
      type: "INIT_NOTIFICATION",
      data: noti,
    });
    setTimeout(
      () =>
        dispatch({
          type: "INIT_NOTIFICATION",
          data: "",
        }),
      timeOut
    );
  };
};

export default notificationReducer;
