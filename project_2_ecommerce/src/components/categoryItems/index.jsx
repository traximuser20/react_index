import PropTypes from "prop-types";

const CategoryItems = ({ category }) => {
    const { title, imageUrl } = category;
    return (
    <div className="shadow-2xl flex items-center justify-center min-w-[30%] h-[240px] flex-[1_1_auto] border border-black mx-[7.5px] mb-[15px] overflow-hidden hover:cursor-pointer hover:bg-image-hover hover:body-container-hover transition-all duration-[6s] ease-[cubic-bezier(0.25, 0.45, 0.45, 0.95)]">
      <div
        className="w-full h-full bg-cover bg-center transform transition-transform duration-[2000ms] hover:scale-110"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        />
      <div className="h-[90px] px-[25px] flex flex-col items-center justify-center border border-black bg-white opacity-[0.7] absolute hover:opacity-[0.9]">
        <h2 className="font-bold my-0 mx-[6px] text-[22px] text-[#4a4a4a]">
          {title}
        </h2>
        <p className="font-light text-[16px]">Shop Now</p>
      </div>
    </div>
  );
};

CategoryItems.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryItems;
