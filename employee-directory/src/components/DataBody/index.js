import React from "react";

function DataBody(props) {
    return (
        <div>
            <tbody>
                {props.results && props.results.map(result => (
                    <tr>
                        <td><img alt="thumbnail" src={result.picture.thumbnail}></img></td>
                        <td>{result.name.first} {result.name.last}</td>
                        <td>{result.phone}</td>
                        <td>{result.email}</td>
                        <td>{result.dob}</td>
                    </tr>
                ))}
            </tbody>
        </div>
    );
}

export default DataBody;