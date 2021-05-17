import React from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import DataTable from "./components/DataTable";
import DataBody from "./components/DataBody";

function App() {
  return (
    <div>
    <Header />
    <SearchBox />
    <DataTable />
    <DataBody />
    </div>
  );
}

export default App;
