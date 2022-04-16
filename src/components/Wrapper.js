import React from "react";

function Wrapper({ children }) {
  return <div className="px-8 h-screen max-w-screen-xl mx-auto pt-[112px]">{children}</div>;
}

export default Wrapper;
