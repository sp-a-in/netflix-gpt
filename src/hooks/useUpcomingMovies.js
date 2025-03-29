import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../stores/slices/movieSlice";


let useUpcomingMovies = () => {

    let dispatch = useDispatch();

    let fetchUpcomingMovies = async () => {
        let result = await fetch('https://api.themoviedb.org/3/movie/upcoming', OPTIONS);
        let  upcomingMovies = await result.json()
        dispatch(addUpcomingMovies(upcomingMovies));
    }

    useEffect(() => {
        fetchUpcomingMovies();
    }, []
    );


}

export default useUpcomingMovies;