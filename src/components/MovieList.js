import MovieCard from "./MovieCard";

let MovieList = ({ listTitle, nowPlayingMovies }) => {

  if(!nowPlayingMovies) {
    return (
      <div>
        Loading.....
      </div>
    )
  }
  return (
    <div className="overflow-x-scroll w-auto p-6 no-scrollbar px-16">
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