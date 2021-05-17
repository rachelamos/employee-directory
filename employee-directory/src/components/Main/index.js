import React, { Component } from "react";
import Header from "../Header";
import SearchBox from "../SearchBox";
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
                <Header />
                <SearchBox />
                <table class="table">
                    <DataTable />
                    <DataBody />
                </table>
            </div>
        );
    }
}


export default Main;