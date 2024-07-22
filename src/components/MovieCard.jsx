import React from "react";

function MovieCard({
  poster_path,
  name,
  handleAddToWatchlist,
  movieObj,
  handleRemoveToWatchlist,
  watchList,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="md:h-[50vh] w-[170px] bg-cover bg-center flex flex-col items-end justify-between rounded-xl hover:scale-110 hover:cursor-pointer duration:300 mt-5"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveToWatchlist(movieObj)}
          className="m-4 flex justify-center items-center bg-gray-900/60 h-8 w-8 rounded-lg p-4"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddToWatchlist(movieObj)}
          className="m-4 flex justify-center items-center bg-gray-900/60 h-8 w-8 rounded-lg p-4"
        >
          &#128571;
        </div>
      )}

      <div className="bg-gray-700/60 w-full text-white text-xl text-center p-2">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;

//https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&api_key=9d801a18642e8b86a04ea495c29d6d7c&language=en-US&page=1&sort_by=popularity.desc
