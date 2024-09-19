import { Component } from "react";
import axios from "axios";

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
        <div className="max-w-[30%] mx-auto my-8">
          <div className="bg-purple-800 rounded-lg p-3 w-full">
            <div className="bg-white/20 backdrop-blur-2xl shadow-2xl border border-white/10 p-8">
              <h1 className="text-3xl font-bold text-white text-center">
                Search a monster
              </h1>
              <div className="justify-evenly w-full pt-4 px-4 flex">
                <div className="relative">
                  <SearchBox onSearchChange={onSearchChange} />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-teal-600 px-6 py-4 rounded-lg hover:shadow-2xl transition-transform duration-300 hover:scale-110">
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
