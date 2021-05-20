import React from "react";
import "./style.css";

function SearchBox(props) {
    return (
        <form className="search">
            <div className="form-group">
                <input
                    key={props.id}
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