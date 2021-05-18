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
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const results = this.state.results;
        console.log(results)

        const searchResults = results.filter((searchedName) => searchedName.name.first.includes(value))

        // Updating the input's state
        this.setState({
            search: value,
            // results: results
            results: searchResults
        })
      };

    render() {
        return (
            <div>
                <Header />
                <SearchBox 
                name = "search"
                value = {this.state.search}
                handleInputChange = {this.handleInputChange}/>
                <table class="table">
                    <DataTable />
                    <DataBody
                        results={this.state.results}
                    />
                </table>
            </div>
        );
    }
}


export default Main;