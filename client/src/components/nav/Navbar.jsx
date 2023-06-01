import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#121212] w-full p-3 flex justify-between">
      <p>Logo</p>
      <nav className="mr-4">
        <ul className="flex justify-between space-x-3 ">
          <li className="text-slate-50 text-xl font-serif font-medium">Home</li>
          <li className="text-slate-50 text-xl font-serif font-medium">
            Register
          </li>
          <li className="text-slate-50 text-xl font-serif font-medium">
            Login
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
