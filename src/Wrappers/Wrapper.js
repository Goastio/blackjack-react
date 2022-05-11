import React from "react";

function Wrapper({ children }) {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-8 pt-[112px]">
      {children}
    </div>
  );
}

export default Wrapper;
