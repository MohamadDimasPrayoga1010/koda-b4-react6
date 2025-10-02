import React, { useState } from "react";
import { Search, SquarePen, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="px-6 py-3 shadow">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-2xl font-medium">Medium</Link>
          {/* <h1 className="text-2xl font-medium">Medium</h1> */}
          <form className="hidden md:flex items-center gap-2 bg-white rounded-md px-3 py-1 w-[300px]">
            <Search className="text-gray-500" size={18} />
            <input
              type="search"
              placeholder="Search..."
              className="flex-1 outline-none bg-transparent text-sm"
            />
          </form>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
            <SquarePen size={18} />
            <span className="text-sm">Write</span>
          </div>

          <Link
            to="/signup"
            className="px-4 py-1 rounded-full bg-black text-white text-sm hover:bg-gray-800"
          >
            Sign up
          </Link>

          <Link
            to="/signin"
            className="px-4 py-1 rounded-full border border-black text-sm hover:bg-gray-100"
          >
            Sign in
          </Link>

          <User className="cursor-pointer hover:text-gray-700" size={20} />
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden mt-2 flex flex-col gap-2">
          <form className="flex items-center gap-2 bg-white rounded-md px-3 py-1 w-full">
            <Search className="text-gray-500" size={18} />
            <input
              type="search"
              placeholder="Search..."
              className="flex-1 outline-none bg-transparent text-sm"
            />
          </form>

          <div className="flex flex-col gap-2 mt-2">
            <div className="flex items-center gap-1 justify-center cursor-pointer hover:text-gray-700">
              <SquarePen size={18} />
              <span className="text-sm ">Write</span>
            </div>

            <Link
              to="/signup"
              className="px-4 py-1 rounded-full bg-black text-white text-sm hover:bg-gray-800 text-center"
            >
              Sign up
            </Link>

            <Link
              to="/signin"
              className="px-4 py-1 rounded-full border border-black text-sm hover:bg-gray-100 text-center"
            >
              Sign in
            </Link>

            <User
              className="cursor-pointer hidden hover:text-gray-700"
              size={20}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
