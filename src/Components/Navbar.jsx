import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import ResponsibleBar from "./ResponsibleBar";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuBar, setMenuBar] = useState(false);

  return (
    <>
      <div className="z-50 fixed top-0 left-0 w-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md">
        <div className="container mx-auto flex items-center justify-between py-7">
          <div>
            <Link
              to="/"
              className="font-bold text-xl md:text-2xl text-white hover:text-gray-100 transition-colors duration-300"
            >
              Medicare System
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <ul className="flex items-center gap-8">
              {[
                { name: "Home", link: "/" },
                { name: "Medicine Reminder", link: "/MedicineReminder" },
                { name: "Yoga Place", link: "/YogaAsan" },
                { name: "My Profile", link: "/myProfile" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="font-semibold text-white hover:text-gray-200 transition-colors duration-300"
                >
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div
            onClick={() => setMenuBar(!menuBar)}
            className="md:hidden p-2 rounded-md bg-white/20 hover:bg-white/30 cursor-pointer transition-all duration-300"
          >
            <FiMenu size={25} className="text-white" />
          </div>
        </div>
      </div>

      {/* Mobile Responsive Menu */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: menuBar ? 0 : "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 md:hidden"
      >
        <ResponsibleBar setMenuBar={setMenuBar} menuBar={menuBar} />
      </motion.div>
    </>
  );
};

export default NavBar;
