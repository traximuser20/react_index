import { Component } from "react";
import PropTypes from "prop-types";

class SearchBox extends Component {
  static propTypes = {
    onSearchChange: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
  }

  render() {
    const { onSearchChange } = this.props;
    return (
      <div>
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
    );
  }
}

export default SearchBox;
