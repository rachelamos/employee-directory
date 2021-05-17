import React, { Component } from "react";
import DataTable from "../DataTable";
import DataBody from "../DataBody";
import API from "../../utils/API";

class Main extends Component {
    state = {
        search: "",
        results: []
    };

    componentDidMount() {
        this.getEmployees();
    };

    getEmployees = () => {
        API.search()
        .then(res => this.setState({ results: res.data.data }))
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <DataTable />
                <DataBody>
                    
                </DataBody>
            </div>
        );
    }
}


export default Main;