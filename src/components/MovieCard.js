import { CDN_URL_MOVIE_IMAGE } from "../utils/constants";

let MovieCard = ({movie}) => {
    if(!movie.backdrop_path) return null;
    return (
        <div className="w-96 h-80 pr-4 cursor-pointer">
            <img src={CDN_URL_MOVIE_IMAGE+movie.backdrop_path} className="h-full"/>
        </div>
    )
}

export default MovieCard;