import { useEffect, useState } from "react";
import { getAllShows, searchShows } from "../services/MovieApi";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

const MovieListing = () => {
  const [movies, setMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    const allShows = async () => {
      try {
        setLoading(true);
        const data = await getAllShows();
        setMovie(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    allShows();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      try {
        setLoading(true);
        if (query.trim() == "") {
          const data = await getAllShows();
          setMovie(data);
        } else {
          const data = await searchShows(query);
          setMovie(data);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex justify-center py-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder=" 🔍 Search For a movie"
          className="w-full max-w-xl px-4 py-2 rounded-full bg-gray-700 text-gray-100 "
        />
      </div>

      {loading ? (
        <p className="text-center text-gray-400">loading......</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              seeDetails={setSelectedMovie}
            />
          ))}
        </div>
      )}

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default MovieListing;
