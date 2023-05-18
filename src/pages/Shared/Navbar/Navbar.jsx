import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/sword.png'
import { AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";
// import { FaUser } from "react-icons/fa"
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = (
        <>
        <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-toys"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              All Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-toys"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              My Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Add A Toy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
          </li>
          
        </>
    )
          
    return (
        <div className="my-container relative mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl flex items-center justify-between">
      {/* Logo Section */}
      <Link to="/" className="inline-flex items-center">
        <img src={logo} alt="" className="lg:w-20 md:w-16 w-12" />
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-rose-400">Figurio</h2>
      </Link>

      {/* Nav Items Section */}
      <ul className="items-center mx-auto text-lg font-bold hidden space-x-8 lg:flex">
        {navItems}
      </ul>
      <ul className="lg:flex items-center gap-6  hidden ">
        <li className="ml-auto text-2xl">
          <Link to="/orderReviews">
            <AiOutlineShopping className="w-7 h-7 duration-300 hover:text-[#FF3811]" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <AiOutlineSearch className="w-7 h-7 duration-300 hover:text-[#FF3811]" />
          </Link>
        </li>
        <li className="">
          <Link to="/" className="inline-flex items-center">
            <button className=" btn-sec">Appointment</button>
          </Link>
        </li>
      </ul>

      {/* Mobile Navbar Section */}
      <div className="lg:hidden">
        {/* Dropdown Open Button */}
        <button
          aria-label="Open Menu"
          title="Open Menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <Bars3BottomRightIcon className="w-7 text-[#FF3811]" />
        </button>
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full z-10">
            <div className="p-5 bg-white border rounded shadow-sm">
              {/* Logo & Button section */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Link to="/" className="inline-flex items-center">
                    <img src={logo} alt="" className="md:w-20 w-16" />
                  </Link>
                </div>
                {/* Dropdown menu close button */}
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <XMarkIcon className="w-7 hover:bg-orange-100 hover:rounded-xl text-[#FF3811]" />
                  </button>
                </div>
              </div>
              {/* Mobile Nav Items Section */}
              <nav>
                <ul className="space-y-4">
                  {navItems}
                  <ul className="flex justify-end items-center gap-7">
                    <li className="ml-auto text-2xl">
                      <Link to="/orderReviews">
                        <AiOutlineShopping className="w-5 h-5 md:w-6 md:h-6 duration-300 hover:text-[#FF3811]" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <AiOutlineSearch className="w-5 h-5 md:w-6 md:h-6  duration-300 hover:text-[#FF3811]" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="inline-flex items-center">
                        <button className=" text-xs md:text-lg font-normal tracking-wide px-4 py-3 rounded drop-shadow-2xl border border-[#FF3811] text-[#FF3811] hover:text-white hover:bg-[#FF3811] duration-500 ">
                          Appointment
                        </button>
                      </Link>
                    </li>
                  </ul>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
    );
};

export default Navbar;