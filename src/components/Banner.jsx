import React from "react";

function Banner() {
  return (
    <div
      className="md:h-[60vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/online-cinema-banner-with-open-clapper-board-film-strip_1419-2242.jpg?w=1060&t=st=1721639516~exp=1721640116~hmac=5e088864581245adb794c056d208b3e3d1bc1a26ce5780ea6ba85a8bb90f6e87)",
      }}
    >
      <div className="bg-gray-700/60 w-full h-[50px] text-white text-2xl text-center p-2.5">
        Watch Movies Now!!
      </div>
    </div>
  );
}

export default Banner;
