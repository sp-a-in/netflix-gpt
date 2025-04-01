import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/lang";
import searchIcon from "./../assets/searchIcon.svg";
import { useRef } from "react";
// import openai from "../utils/openai";
import { OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../stores/slices/gptSlice";

let GptSearchBar = () => {
    
    let searchText = useRef("null")
    let dispatch = useDispatch();

    let searchMoviesInTMDB = async (movie)=> {
        let fetchMovie = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie, OPTIONS)
        let jsonData = await fetchMovie.json()
        console.log('jsonData: ', jsonData);
        return jsonData;
    }

    let handleGptSearch = async ()=> {
        console.log(searchText.current.value);
        let gptQuery = "Act as a movie recommendation system which takes keyword and suggest some movies for the query" + searchText.current.value + ". only give me names of 5 movies comma seprated "
        // console.log('gptQuery: ', gptQuery);
        // const completion = await openai.chat.completions.create({
        //     model: "bytedance-research/ui-tars-72b:free",
        //     messages: [
        //       {
        //         "role": "user",
        //         "content": [
        //           {
        //             "type": "text",
        //             "text": gptQuery
        //           },
        //         ]
        //       }
        //     ],
            
        //   });
        
        //   console.log(completion.choices[0].message.content);

        //   let movies = completion.choices[0].message.content.split(",");

        let movies = "3 Idiots, Tanu Weds Manu, Hera Pheri, Lagaan, Queen".split(",")
        console.log('movies: ', movies);

        let promiseArray = movies.map((movie)=> searchMoviesInTMDB(movie));

        let tmdbResults = await Promise.all(promiseArray);
        console.log('tmdbResults: ', tmdbResults); 

        dispatch(addGptMovieResults({movieNames: movies, movieResults: tmdbResults}));

        
    }

    let selectedLanguage = useSelector((state) => state.config.selectedLanguage)

    return (
        <div className="pt-[10%] flex justify-center">
            <form onSubmit={(e)=> {e.preventDefault();}} className="flex justify-center gap-4">
                <input className="p-4 w-xl opacity-80 rounded border border-gray-500/70 bg-black" placeholder={lang[selectedLanguage].gptSearchPlaceholder} ref={searchText} />
                <button className=" p-4 cursor-pointer rounded-md bg-red-600 w-72 text-2xl font-medium flex gap-1 justify-center hover:bg-red-700" onClick={handleGptSearch}>
                    <span>{lang[selectedLanguage].search}</span>
                    <img src={searchIcon} alt="My Happy SVG" className="w-8 custom-logo" />
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar;