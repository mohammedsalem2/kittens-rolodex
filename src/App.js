import React, { Component } from "react";
import "./App.css";
//call the comp inside {} when it comes from export only
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";

class App extends Component {
  state = {
    kittens: [],
    searchField: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ kittens: users }));
  }

  handleChange=(e)=> {
    //setState is async
    this.setState({ searchField: e.target.value }, () =>
      console.log(this.state)
    );
  }

  render() {
    const { kittens, searchField } = this.state;
    const filteredCats = kittens.filter((kitten) =>
      kitten.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      //What is inside the CardList is our Children
      <div className="App">
        <h1>Kittens rolodex</h1>
        <SearchBox
          placeholder="searching for a cat?"
          handleChange={this.handleChange}
        />
        <CardList kittens={filteredCats} />
      </div>
    );
  }
}
export default App;
