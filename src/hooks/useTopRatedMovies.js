import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../stores/slices/movieSlice";


let useTopRatedMovies = () => {

    let dispatch = useDispatch();

    let fetchTopRatedMovies = async () => {
        let result = await fetch('https://api.themoviedb.org/3/movie/top_rated', OPTIONS);
        let  topRatedMovies = await result.json()
        dispatch(addTopRatedMovies(topRatedMovies));
    }

    useEffect(() => {
        fetchTopRatedMovies();
    }, []
    );


}

export default useTopRatedMovies;