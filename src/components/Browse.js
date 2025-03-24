import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchBar from "./GptSearchBar";

const Browse = () => {

    useNowPlayingMovies();

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