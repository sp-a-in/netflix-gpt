import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchBar from "./GptSearchBar";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import usePopularMovies from "../hooks/usePopularMovies";



const Browse = () => {

    useNowPlayingMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    usePopularMovies();


    return (
        <div className="w-screen">
            <Header />
             <GptSearchBar />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse;