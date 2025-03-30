import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import { useSelector } from "react-redux";



const Browse = () => {

    let gptSearchToggle = useSelector((state)=> state.gpt.gptSearchToggle )

    useNowPlayingMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    usePopularMovies();


    return (
        <div className="w-screen">
            <Header />
            {
                gptSearchToggle ? <GptSearch /> : 
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            }
        </div>
    )
}

export default Browse;