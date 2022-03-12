/* eslint-disable react/prop-types */

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const HeaderButton = ({ name, selected }) => {
  return (
    <>
      <div
        className={classNames(
          selected
            ? "bg-indigo-700 text-white"
            : "hover:bg-indigo-800 text-indigo-100 hover:text-white",
          "cursor-pointer px-3 py-2 rounded-md text-lg"
        )}
      >
        {name}
      </div>
    </>
  );
};

export default HeaderButton;
