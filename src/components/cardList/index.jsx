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
      <div>
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
    );
  }
}

export default CardList;
