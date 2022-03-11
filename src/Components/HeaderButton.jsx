/* eslint-disable react/prop-types */
const HeaderButton = ({ name, selected }) => {
  return (
    <>
      {selected ? (
        <div className="bg-gray-900 text-white px-3 py-2 rounded-md">
          {name}
        </div>
      ) : (
        <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">
          {name}
        </div>
      )}
    </>
  );
};

export default HeaderButton;
