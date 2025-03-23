import { useSelector } from "react-redux";
import MovieList from "./movieList";

let SecondaryContainer = () => {

    let nowPlayingMovies = useSelector((state)=> state.movies.nowPlayingMovies)
    console.log('nowPlayingMovies: ', nowPlayingMovies);

    if(!nowPlayingMovies) {
        return <div>loading....</div>
    }
    return (
        <div className="bg-black px-2">
            <div className="-mt-80 relative z-20">
                <MovieList nowPlayingMovies={nowPlayingMovies} listTitle={"Now Playing"} />
                <MovieList nowPlayingMovies={nowPlayingMovies} listTitle={"Trending"} />
                <MovieList nowPlayingMovies={nowPlayingMovies} listTitle={"Popular"} />
                <MovieList nowPlayingMovies={nowPlayingMovies} listTitle={"Upcoming Movies"} />
                <MovieList nowPlayingMovies={nowPlayingMovies} listTitle={"Horror"} />
            </div>
        </div>
    )
}

export default SecondaryContainer;