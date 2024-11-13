import React from "react";

function Header() {
  return (
    <div className=" w-screen grid grid-cols-7 relative z-10">
      <div className=" text-red-600 font-bold text-4xl w-screen px-12 py-4">
        {" "}
        NETFLEX
      </div>
      <button className=" col-start-6 lg:col-start-7 md:col-start-7 text-white mt-4 rounded-lg bg-red-600 h-9 w-20 hover:bg-red-700 ">
        Sign In
      </button>
    </div>
  );
}

export default Header;
