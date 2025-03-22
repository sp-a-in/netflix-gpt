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

        dispatch(addTrailerVideo(trailerVideos[0]))
    }

    useEffect(()=> {
        fetchTrailerVideo();
    }, [])

    if(!trailerVideo) {
        return <div>Loading..............</div>
    }

    return (
        <div>
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + trailerVideo.key} title="KARZ | Rock Instrumental Theme | Ratnadeep" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}

export default VideoBackground;