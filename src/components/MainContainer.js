import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

let MainContainer = () => {

    let nowPlayingMovies = useSelector((state)=> state.movies.nowPlayingMovies)
    console.log('nowPlayingMovies: ', nowPlayingMovies);

    if(!nowPlayingMovies) return;
 
    let firstRecommendedMovie = nowPlayingMovies.results[0];
    console.log('firstRecommendedMovie: ', firstRecommendedMovie);



    return (
        <div>
            <VideoTitle original_title={firstRecommendedMovie.original_title} overview={firstRecommendedMovie.overview} />
            <VideoBackground recommendedMovieId={firstRecommendedMovie.id} />
        </div>
    )
}

export default MainContainer;