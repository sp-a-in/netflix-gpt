import { CDN_URL_MOVIE_IMAGE } from "../utils/constants";

let MovieCard = ({movie}) => {
    return (
        <div className="w-72 h-80 pr-4">
            <img src={CDN_URL_MOVIE_IMAGE+movie.backdrop_path} className="h-full"/>
        </div>
    )
}

export default MovieCard;