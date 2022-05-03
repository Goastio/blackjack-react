import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/blackjack_white.png";

function Nav() {
  const navLinks = [
    {
      linkText: "Home",
      url: "/",
    },
    {
      linkText: "How to Play",
      url: "/howtoplay",
    },
  ];

  return (
    <>
      <div className="flex w-full bg-[#121212] absolute">
        <div className="flex items-center self-center justify-between w-full h-full max-w-screen-xl px-8 py-6 mx-auto">
          <div className="h-auto">
              <img src={logo} alt="logo" />
          </div>
          <div className="flex gap-8 text-lg font-semibold text-white">
            {navLinks.map((navLink) => {
              return (
                <Link
                  key={navLink.url}
                  to={navLink.url}
                  className="hover:text-blue-600 transition"
                >
                  {navLink.linkText}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;