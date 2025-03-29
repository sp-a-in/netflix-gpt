import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../stores/slices/movieSlice";
import { useEffect } from "react";
import {OPTIONS} from "./../utils/constants";

let useFetchTrailerVideo = (recommendedMovieId) => {
    let dispatch = useDispatch();

    
    let fetchTrailerVideo = async () => {
        let result = await fetch(`https://api.themoviedb.org/3/movie/${recommendedMovieId}/videos?language=en-US`, OPTIONS);
        let allVideos = await result.json();
        let trailerVideos = allVideos.results.filter((videoObj)=> {
            return videoObj.type == 'Trailer';
        });

        dispatch(addTrailerVideo(trailerVideos[0]))
    }

    useEffect(()=> {
        fetchTrailerVideo();
    }, [])
}

export default useFetchTrailerVideo;