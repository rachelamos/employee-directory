import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchBox(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          value={props.value}
          onChange={props.handleInputChange}
          name="search"
          list="breeds"
          type="text"
          placeholder="Search by name"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchBox;