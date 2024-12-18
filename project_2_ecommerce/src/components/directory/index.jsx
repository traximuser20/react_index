import CategoryItems from "../categoryItems";
import PropTypes from "prop-types";


const Directory = ({renderCategories}) => {
  return (
    <div className="w-full flex flex-wrap justify-between">
      {renderCategories.map((category) => (
        <CategoryItems key={category.id} category={category} />
      ))}
    </div>
  )
}

Directory.propTypes = {
  renderCategories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    // Add other properties as needed
  })).isRequired,
};

export default Directory