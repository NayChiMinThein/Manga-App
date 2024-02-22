import "./Navbar.css"
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { GiDeshretRedCrown } from "react-icons/gi";
import { GoHome } from "react-icons/go";
import { BsPerson } from "react-icons/bs";
import { MdBookmarkBorder } from "react-icons/md";
import { IoMdBook } from "react-icons/io";

function Navbar() {
  return (
    <div className="relative">
      <nav className="bg-slate-800 text-white flex items-center justify-between py-5 ps-3 pe-2 w-full md:py-5 md:px-8 md:backdrop-blur-md md:bg-black/70 md:fixed md:top-0 md:z-10 md:border md:border-transparent md:border-b-gray-600 xl:px-20">
        {/* Logo */}
        <div className="flex items-center">
          <GiDeshretRedCrown className="text-2xl md:text-3xl xl:text-4xl me-1"/>
          <h4 className="logo-font text-xl md:text-2xl xl:text-3xl">IVIS</h4>
        </div>

        {/* Search Bar */}
        <div className="w-48 xl:w-64 flex items-center border border-gray-300 rounded-lg md:rounded-full focus-within:ring-1 focus-within:ring-red-500 focus-within:border-red-500">
          <input type="text" className="w-full bg-transparent border-0 focus:ring-0 text-sm xl:text-base" placeholder="Search..."/>
          <IoSearch className="text-gray-500 text-xl md:text-2xl me-2"/>
        </div>

        {/* Nav Links */}
        <div className="hidden md:block md:text-sm xl:text-lg">
          <NavLink to="/" className="hover:text-red-500">Home</NavLink>
          <NavLink to="" className="md:mx-6 hover:text-red-500">Comics</NavLink>
          <NavLink to="" className="md:me-6 hover:text-red-500">Bookmarks</NavLink>
          <NavLink to="" className="hover:text-red-500">Profile</NavLink>
        </div>
      </nav>

      {/* Small Devices */}
      <nav className="fixed bottom-0 z-10 border border-transparent border-t-gray-400 w-full p-3 text-white bg-slate-800 md:hidden">
        <div className="flex items-center justify-around text-sm">
          <NavLink to="/">
            <GoHome className="text-3xl text-gray-400 mx-auto"/>
            Home
          </NavLink>
          <NavLink to="">
            <IoMdBook className="text-3xl text-gray-400 mx-auto"/>
            Comics
          </NavLink>
          <NavLink to="">
            <MdBookmarkBorder className="text-3xl text-gray-400 mx-auto"/>
            Bookmarks
          </NavLink>
          <NavLink to="">
            <BsPerson className="text-3xl text-gray-400 mx-auto"/>
            Profile
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar