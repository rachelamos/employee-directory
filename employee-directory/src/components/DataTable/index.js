import React from "react";

function DataTable(props) {
    return (
        <thead>
            <tr>
                <th scope="col">Image</th>
                <th scope="col" onClick={props.handleSort}>Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
            </tr>
        </thead>
    );
}

export default DataTable;