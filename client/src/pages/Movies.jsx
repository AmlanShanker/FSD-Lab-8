import { useEffect, useState } from "react";
import api from "../api";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get("/movies");

        setMovies(response.data);
      } catch (error) {
        setError("Unable to load movies");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="min-h-screen bg-[#080808] px-6 pb-20 pt-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-4 text-xs font-bold tracking-[5px] text-[#d4a84f]">
            NOW SHOWING
          </p>

          <h1 className="font-display text-6xl sm:text-7xl">
            Choose your <span className="text-[#d4a84f]">movie.</span>
          </h1>
        </div>

        {error && <p className="mb-6 text-red-400">{error}</p>}

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Movies;
