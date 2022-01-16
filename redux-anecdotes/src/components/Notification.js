import React from "react";
import { connect } from "react-redux";

const Notification = (props) => {
  const { notification } = props;
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return notification === "" ? (
    <div></div>
  ) : (
    <div style={style}>{notification}</div>
  );
};

const mapStateToProps = (state) => {
  return {
    notification: state.notifications,
  };
};

const ConnectedNotification = connect(mapStateToProps)(Notification);

export default ConnectedNotification;
