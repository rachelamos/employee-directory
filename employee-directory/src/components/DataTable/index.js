import React from "react";
import DataBody from "../DataBody";

function DataTable(props) {
    return (
        <div>
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col" onClick={props.handleSort}>Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
        </div>
    );
}

export default DataTable;