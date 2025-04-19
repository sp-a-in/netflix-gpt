import { useSelector } from "react-redux";
import MovieList from "./MovieList";

let SecondaryContainer = () => {

    let nowPlayingMovies = useSelector((state)=> state.movies.nowPlayingMovies)

    let topRatedMovies = useSelector((state)=> state.movies.topRatedMovies)

    let upcomingMovies = useSelector((state)=> state.movies.upcomingMovies)


    let popularMovies = useSelector((state)=> state.movies.popularMovies)

    

    if(!nowPlayingMovies) {
        return <div>loading....</div>
    }
    return (
        <div className="bg-black px-2">
            <div className="-mt-80 relative z-20">
                <MovieList nowPlayingMovies={nowPlayingMovies} listTitle={"Now Playing"} />
                <MovieList nowPlayingMovies={topRatedMovies} listTitle={"Top Rated Movies"} />
                <MovieList nowPlayingMovies={upcomingMovies} listTitle={"Upcoming Movies"} />
                <MovieList nowPlayingMovies={popularMovies} listTitle={"Popular Movies"} />
            </div>
        </div>
    )
}

export default SecondaryContainer;