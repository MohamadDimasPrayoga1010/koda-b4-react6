import React, { useState } from "react";
import { Search, SquarePen, User, Menu, X } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

/**
 * @typedef {Object} NavbarState
 * @property {boolean} open - Status toggle menu mobile (true jika terbuka).
 * @property {string} query - Input pencarian yang diketik user.
 */

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query });
    } else {
      setSearchParams({});
    }
  };

  return (
    <header className="sticky top-0 bg-white px-6 py-3 shadow z-50">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-2xl font-medium">
            Medium
          </Link>
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center gap-2 bg-gray-100 rounded-md px-3 py-1 w-[300px]"
          >
            <Search className="text-gray-500" size={18} />
            <input
              type="search"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
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
          <form
            onSubmit={handleSearch}
            className="flex items-center gap-2 bg-gray-100 rounded-md px-3 py-1 w-full"
          >
            <Search className="text-gray-500" size={18} />
            <input
              type="search"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 outline-none bg-transparent text-sm"
            />
          </form>
        </div>
      )}
    </header>
  );
};

export default Navbar;
