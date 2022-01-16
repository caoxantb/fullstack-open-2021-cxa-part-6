const initialState = "";
let timeOut;

const notificationReducer = (state = initialState, action) => {
  if (action.type === "INIT_NOTIFICATION") return action.data;
  return state;
};

export const initializeNotificationActionCreators = (noti, ms = 0) => {
  return async (dispatch) => {
    clearTimeout(timeOut);
    dispatch({
      type: "INIT_NOTIFICATION",
      data: noti,
    });
    timeOut = setTimeout(
      () =>
        dispatch({
          type: "INIT_NOTIFICATION",
          data: "",
        }),
      ms
    );
  };
};

export default notificationReducer;
