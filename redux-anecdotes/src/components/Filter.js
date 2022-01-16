import React from "react";
import { connect } from "react-redux";
import { filterActionCreators } from "../reducers/filterReducer";

const Filter = (props) => {
  const handleChange = (event) => {
    event.preventDefault();
    const filter = event.target.value;
    props.filterActionCreators(filter);
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

const ConnectedFilter = connect(null, { filterActionCreators })(Filter);

export default ConnectedFilter;
