import React from "react";

function Pagination({handlePre,handleNext,pageNo}) {
  return (
    
      <div className="bg-blue-400 flex flex-row px-5 items-center gap-6 w-full h-[6vh] mt-6 justify-center text-gray-600">
        <div onClick={handlePre} className="hover:cursor-pointer"><i class="fa-solid fa-arrow-left"></i></div>
      <div className="font-bold">{pageNo}</div>
        <div onClick={handleNext} className="hover:cursor-pointer"><i class="fa-solid fa-arrow-right"></i></div>
      </div>
  );
}

export default Pagination;
