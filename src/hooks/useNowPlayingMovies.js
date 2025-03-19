import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../stores/slices/movieSlice";
import { useEffect } from "react";

let useNowPlayingMovies = () => {
    let dispatch = useDispatch();

    let nowPlayingMovies = async ()=> {
        let data = await fetch('https://api.themoviedb.org/3/movie/now_playing', OPTIONS);
        let jsonData = await data.json();
        dispatch(addNowPlayingMovies(jsonData))
    }

    useEffect(()=> {
        nowPlayingMovies();        
    }, [])
}

export default useNowPlayingMovies;