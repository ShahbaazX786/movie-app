import { useEffect, useState } from "react";
import Search from "./components/Search";
import { API_OPTIONS, getUrl } from "./utils/helper";
import MovieCard from "./components/MovieCard";
import type { MovieProps } from "./utils/types";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    setErrorMsg("");
    try {
      const url = getUrl();
      const response = await fetch(url, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      if (data.Response === "false") {
        setErrorMsg(data.Error || "Failed to fetch movies");
        setMovieList([]);
        return;
      }
      setMovieList(data.results || []);
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMsg("Error fetching movies, Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll enjoy
            without the hassle
          </h1>
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </header>

        <section className="all-movies">
          <h2 className="mt-[40px]">All movies</h2>
          {isLoading ? (
            <LoadingSpinner />
          ) : errorMsg ? (
            <p className="text-red-500">{errorMsg}</p>
          ) : (
            <ul>
              {movieList.map((movie: MovieProps) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}

          {errorMsg && (
            <p className="text-red-500 font-semibold text-lg">{errorMsg}</p>
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
