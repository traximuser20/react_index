import { Component } from "react";
import PropTypes from "prop-types";

class CardList extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    filteredMonsters: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    const { filteredMonsters } = this.props;
    return (
      <div className="w-[85vw] mx-auto grid grid-cols-4 gap-5 my-6">
        {filteredMonsters.length === 0 ? (
          <div className="col-span-4">
            <p className="text-5xl animate-pulse text-yellow-600 font-bold px-2 py-4 mx-auto my-8">
              Loading...
            </p>
          </div>
        ) : (
          filteredMonsters.map((val) => {
            return (
              <div
                key={val.id}
                className="flex flex-col items-center backdrop-blur-sm hover:backdrop-blur-xl  hover:shadow-2xl border-gray/10 bg-gray/10 hover:bg-black/20 border border-gray-500 hover:border-gray-300 rounded-md p-6 cursor-pointer transition-transform duration-300 ease-out hover:scale-105"
              >
                <img
                  alt={`val ${val.name}`}
                  src={`https://robohash.org/${val.id}?set=set3`}
                  className="object-scale-down rounded-full border-solid border-2 my-4 border-yellow-600 h-40 w-40"
                />
                <div className="text-yellow-500 text-2xl font-bold">
                  {val.name}
                </div>
                <div className="text-yellow-500 text-lg">{val.email}</div>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default CardList;
