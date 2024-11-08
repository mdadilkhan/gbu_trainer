import React from "react";

const Dialogbox = ({ isOpen, onClose, title, children }) => {

  console.log(children);


  if (!isOpen) return null;
  // <div className="bg-white rounded-3xl shadow-lg w-fit h-fit p-6 sm:max-w-[90%] sm:h-auto sm:mx-auto overflow-scroll"></div>
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-3xl shadow-lg border border-red-600 w-[90%] h-[90%] sm:w-[70%] sm:h-[70%] overflow-scroll p-10">
        <div className="flex justify-start items-center">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 font-bold text-2xl"

          >
            &#10005;
          </button>
        </div>
        <div className="flex justify-center items-center w-full mb-5 sm:mb-10  ">
            <h3 className="font-semibold text-price text-center text-[12px] sm:text-xl">{title}</h3>
        </div>
        <div className="mb-4 flex sm:justify-evenly justify-center items-center flex-wrap sm:gap-4 gap-10">{children}</div>
       
      </div>
    </div>
  );
};

export default Dialogbox;
