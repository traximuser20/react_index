import { Component } from "react";
import axios from "axios";

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
                  <input
                    onChange={onSearchChange}
                    type="search"
                    placeholder="Search..."
                    className="search-box w-full p-3 pl-10 pr-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                  <div className="bg-gray-400 h-full w-0.5 absolute top-0 left-9"></div>
                  <button
                    type="submit"
                    className="hover:shadow-2xl transition-transform hover:scale-110 duration-300 absolute left-3 top-3 text-gray-500 hover:text-gray-800 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 absolute top-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-teal-600 px-6 py-4 rounded-lg hover:shadow-2xl transition-transform duration-300 hover:scale-110">
            <div className="text-center text-3xl font-bold text-white">
              Monsters Rolodex
            </div>
            {filteredMonsters.length === 0 ? (
              <p className="text-2xl animate-pulse text-yellow-600 font-bold px-2 py-4">
                Loading...
              </p> // Renders when the array is empty
            ) : (
              filteredMonsters.map((val) => {
                return (
                  <div key={val.id} className="flex items-center gap-3 my-4">
                    <div className="bg-yellow-600 w-3 h-3 rounded-full"></div>
                    <div className="text-yellow-600 text-lg">{val.name}</div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </>
    );
  }
}

export default App;
