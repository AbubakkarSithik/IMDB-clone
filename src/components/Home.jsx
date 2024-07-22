import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Home({ handleAddToWatchlist, handleRemoveToWatchlist, watchList }) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  function handlePre() {
    if (pageNo == 1) {
      setPageNo(pageNo);
    } else {
      setPageNo(pageNo - 1);
    }
  }

  function handleNext() {
    setPageNo(pageNo + 1);
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=9d801a18642e8b86a04ea495c29d6d7c&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-6 bg-yellow-200">
      <div className="text-center font-bold text-xl">Trending Movies</div>
      <div className="flex flex-row justify-evenly flex-wrap gap-6">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              handleAddToWatchlist={handleAddToWatchlist}
              movieObj={movieObj}
              key={movieObj.id}
              handleRemoveToWatchlist={handleRemoveToWatchlist}
              watchList={watchList}
            />
          );
        })}
      </div>

      <Pagination
        pageNo={pageNo}
        handleNext={handleNext}
        handlePre={handlePre}
      />
    </div>
  );
}

export default Home;
