import { useSelector } from "react-redux";
import MovieList from "./movieList";

let GptSuggestion = () => {

    let {movieNames, movieResults} = useSelector((state)=> state.gpt);
    
    if(!movieNames) {
        return (
            <div>Loading....</div>
        )
    }
    
    return (
        <div className="m-4 p-4 bg-black text-white opacity-90">
            <div>
                {
                    movieNames.map((movieName, index)=> (
                        <MovieList listTitle={movieName}  nowPlayingMovies={movieResults[index]}  />
                    ))
                }
            </div>
        </div>
    )
}

export default GptSuggestion;   