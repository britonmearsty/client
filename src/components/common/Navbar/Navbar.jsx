import React from "react";
import Top from "./Top";
import Middle from "./Middle";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 bg-white shadow-sm">
      <Top />
      <Middle />
    </div>
  );
};

export default Navbar;
