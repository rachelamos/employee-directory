import React from "react";

function App() {
  constructor(props){
    super(props)
    this.state = {
      items: [],
      loading: false
    }
  }

  componentDidMount(){
    fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((response) => {
      this.setState({
        items:response.results,
        loading:true
      })
    }
  }

  return (
    <div>Hello world</div>
  );
}

export default App;
