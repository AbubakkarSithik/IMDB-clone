import React, { useEffect, useState } from "react";

import genre_ids from "../assets/genre";

function Watchlist({ watchList, setWatchList, handleRemoveToWatchlist }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currentGenre, setCurrentGenre] = useState("All Genres");

  let handleFilter = (genre) => {
    setCurrentGenre(genre);
  };

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncreasing = () => {
    let sortedIncreasing = watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });

    setWatchList([...sortedIncreasing]);
  };

  let sortDecreasing = () => {
    let sortedDecreasing = watchList.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });

    setWatchList([...sortedDecreasing]);
  };

  useEffect(() => {
    let temp = watchList.map((movieObj) => {
      return genre_ids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);

    setGenreList(["All Genres", ...temp]);
  }, [watchList]);

  return (
    <>
      <div className="flex justify-center items-center mt-5 flex-wrap gap-3">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currentGenre == genre
                  ? "bg-blue-400 hover: cursor-pointer font-bold text-white h-[3rem] w-[7rem] rounded-xl flex items-center justify-center p-2 mx-1"
                  : "bg-gray-400 hover: cursor-pointer font-bold text-white h-[3rem] w-[7rem] rounded-xl flex items-center justify-center p-2 mx-1"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-5">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search for Movies"
          className="bg-yellow-200 px-2 h-[3rem] w-[18rem] rounded-xl outline-none"
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-400 m-8">
        <table className="w-full text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex flex-row justify-center items-center gap-2">
                <div onClick={sortIncreasing}>
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <div>Rating</div>
                <div onClick={sortDecreasing}>
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchList
              .filter((movieObj) => {
                if (currentGenre == "All Genres") {
                  return true;
                } else {
                  return genre_ids[movieObj.genre_ids[0]] == currentGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr>
                    <td>
                      <div className="flex items-center px-4 py-2 gap-2">
                        <img
                          className="h-[17vh] w-[13vh] "
                          src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                        />
                        <div className="mx-8">{movieObj.title}</div>
                      </div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genre_ids[movieObj.genre_ids[0]]}</td>
                    <td
                      onClick={() => handleRemoveToWatchlist(movieObj)}
                      className="text-red-600 hover: cursor-pointer"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
