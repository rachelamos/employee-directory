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
            .then(res => this.setState({ results: res.data.results }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        let value = event.target.value;
        const results = this.state.results;

        const searchResults = results.filter((searchedName) => searchedName.name.first.includes(value))

        this.setState({
            search: value,
            results: searchResults
        })
    };

    handleSort = event => {
        event.preventDefault();
        const results = this.state.results;

        const sortedResults = results.sort((a, b) =>
            a.name.first.localeCompare(b.name.first));

        this.setState({
            results: sortedResults
        })
    };

    render() {
        return (
            <div>
                <Header />
                <SearchBox
                    name="search"
                    value={this.state.search}
                    handleInputChange={this.handleInputChange} />
                <table className="table table-striped">
                    <DataTable handleSort={this.handleSort} />
                    <DataBody
                        results={this.state.results}
                    />
                </table>
            </div>
        );
    }
}


export default Main;