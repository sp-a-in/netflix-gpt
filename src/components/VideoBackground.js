import { useSelector } from "react-redux";
import useFetchTrailerVideo from "../hooks/useFetchTrailerVideo";

let VideoBackground = ({recommendedMovieId}) => {

    useFetchTrailerVideo(recommendedMovieId);

    let trailerVideo = useSelector((state)=> state.movies.trailerVideo)

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