import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../stores/slices/movieSlice";

let VideoBackground = ({recommendedMovieId}) => {

    let dispatch = useDispatch();
    let trailerVideo = useSelector((state)=> state.movies.trailerVideo)
    console.log('trailerVideo: ', trailerVideo);
    
    let fetchTrailerVideo = async () => {
        let result = await fetch(`https://api.themoviedb.org/3/movie/${recommendedMovieId}/videos?language=en-US`, OPTIONS);
        let allVideos = await result.json();
        console.log('allVideos: ', allVideos.results);
        let trailerVideos = allVideos.results.filter((videoObj)=> {
            return videoObj.type == 'Trailer';
        });

        dispatch(addTrailerVideo(trailerVideos[2]))
    }

    useEffect(()=> {
        fetchTrailerVideo();
    }, [])

    if(!trailerVideo) {
        return <div>Loading..............</div>
    }

    return (
        <div>
            <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/" + trailerVideo.key + '?autoplay=1&mute=1'}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    )
}

export default VideoBackground;