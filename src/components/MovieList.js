import MovieCard from "./movieCard";

let MovieList = ({ listTitle, nowPlayingMovies }) => {
  return (
    <div className="overflow-x-scroll w-screen p-6 no-scrollbar px-16">
      <h1 className="text-3xl py-6 text-white">{listTitle}</h1>
      <div className="flex w-max">
        {nowPlayingMovies.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;