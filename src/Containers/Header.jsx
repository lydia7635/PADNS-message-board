/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import HeaderButton from "../Components/HeaderButton";

const Header = ({ page, visitors }) => {
  return (
    <>
      <nav className="bg-gray-800 mx-auto px-4 relative flex items-center justify-between h-16">
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="space-x-4 text-gray-300 py-2">網路攻防實習</div>
          <div className="ml-6 flex space-x-4">
            <Link to="/">
              <HeaderButton name="About" selected={page === "About"} />
            </Link>
            <Link to="/chat">
              <HeaderButton name="Chat" selected={page === "Chat"} />
            </Link>
            <a className="text-gray-300 px-3 py-2">Visitors: {visitors}</a>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div className="flex space-x-4">
            <HeaderButton name="Login" selected={false} />
            <HeaderButton name="Sign Up" selected={false} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;