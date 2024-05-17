import React from "react";

const ActionButton = ({ children  }) => {
  return (
    <button  className="bg-black py-2 max-xxs:px-3 max-xxs:text-xs easeinOut shadow-lg btn z-1 hover:border-2 hover:border-white px-5 flex w-fit text-white items-center max-md:text-sm justify-center border-none capitalize">
      {children}
    </button>
  );
};

export default ActionButton;
