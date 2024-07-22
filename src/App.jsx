import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Watchlist from "./components/Watchlist";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  const [watchList, setWatchList] = useState([]);

  let handleAddToWatchlist = (movieObj) => {
    let watchlist = [...watchList, movieObj];
    localStorage.setItem("movieApp", JSON.stringify(watchlist));
    setWatchList(watchlist);
    console.log(watchlist);
  };

  let handleRemoveToWatchlist = (movieObj) => {
    let filteredwatchlist = watchList.filter((movie) => {
      return movie.id != movieObj.id;
    });

    setWatchList(filteredwatchlist);
    localStorage.setItem("movieApp", JSON.stringify(filteredwatchlist));
    console.log(filteredwatchlist);
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("movieApp");
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Home
                  handleAddToWatchlist={handleAddToWatchlist}
                  handleRemoveToWatchlist={handleRemoveToWatchlist}
                  watchList={watchList}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <Watchlist
                watchList={watchList}
                setWatchList={setWatchList}
                handleRemoveToWatchlist={handleRemoveToWatchlist}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
