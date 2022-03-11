/* eslint-disable react/prop-types */
const HeaderButton = ({ name, selected }) => {
  return (
    <>
      {selected ? (
        <div className="bg-indigo-700 text-white px-3 py-2 rounded-md text-lg">
          {name}
        </div>
      ) : (
        <div className="text-indigo-100 hover:bg-indigo-800 hover:text-white px-3 py-2 rounded-md text-lg">
          {name}
        </div>
      )}
    </>
  );
};

export default HeaderButton;
