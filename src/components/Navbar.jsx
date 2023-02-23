import React from "react";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  // const { user, logout } = useContext(AuthContext);

  // const handleLogout = () => {
  //   logout();
  // };

  return (
    <nav className="bg-blue-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
