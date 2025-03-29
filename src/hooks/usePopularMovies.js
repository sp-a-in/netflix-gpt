import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../stores/slices/movieSlice";


let usePopularMovies = () => {

    let dispatch = useDispatch();

    let fetchPopularMovies = async () => {
        let result = await fetch('https://api.themoviedb.org/3/movie/popular', OPTIONS);
        let  popularMovies = await result.json()
        dispatch(addPopularMovies(popularMovies));
    }

    useEffect(() => {
        fetchPopularMovies();
    }, []
    );


}

export default usePopularMovies;