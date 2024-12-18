import { Component } from "react";
import axios from "axios";
import './App.css'
import SearchBox from "./components/searchBox";
import CardList from "./components/cardList";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        this.setState(() => {
          return {
            monsters: res.data,
          };
        });
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return {
        searchField,
      };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    return (
      <>
        <div className="mx-auto my-8">
          <div className="p-3 w-full">
              <h1 className="text-3xl font-bold text-white text-center">
                Search a monster
              </h1>
              <div className="justify-evenly w-full pt-4 px-4 flex">
                <div className="relative">
                  <SearchBox onSearchChange={onSearchChange} className={"monster-search-box"} placeholder={"Search..."}/>
                </div>
              </div>
          </div>
          <div className="px-6 py-4 rounded-lg mt-8">
            <div className="text-center text-3xl font-bold text-white">
              Monsters Rolodex
            </div>
            <CardList filteredMonsters={filteredMonsters} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
