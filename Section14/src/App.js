import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [moviesFromHTTP, setMoviesFromHttp] = useState([]);
  const [islodingShow, setLodingShow] = useState(false);
  const [error, setError] = useState(null);

  const fetchingDataFromHandler = useCallback(async () => {
    setLodingShow(true);

    try {
      const responseData = await fetch("https://swapi.dev/api/films");
      if (!responseData.ok) {
        throw new Error("Something Went Wrong!");
      }

      const responseJson = await responseData.json();
      const newResponseData = await responseJson.results.map((itemvalue) => {
        return {
          id: itemvalue.episode_id,
          title: itemvalue.title,
          releaseDate: itemvalue.release_date,
          openingText: itemvalue.opening_crawl,
        };
      });
      setMoviesFromHttp(newResponseData);
    } catch (error) {
      setError(error.message);
    }
    setLodingShow(false);
  }, []);

  useEffect(() => {
    fetchingDataFromHandler();
  }, [fetchingDataFromHandler]);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchingDataFromHandler}>Fetch Movies</button>
      </section>
      <section>
        {!islodingShow && moviesFromHTTP.length > 0 && (
          <MoviesList movies={moviesFromHTTP} />
        )}
        {!islodingShow && moviesFromHTTP.length === 0 && !error && (
          <p>Please Fetch the Movies...</p>
        )}
        {!islodingShow && error && <p>{error}</p>}
        {islodingShow && <p>Loading...!</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
