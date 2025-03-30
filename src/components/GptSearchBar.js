import { useSelector } from "react-redux";
import lang from "../utils/lang";
import searchIcon from "./../assets/searchIcon.svg";

let GptSearchBar = () => {

    let selectedLanguage = useSelector((state) => state.config.selectedLanguage)

    return (
        <div className="pt-[20%] flex justify-center">
            <form onSubmit={(e)=> {e.preventDefault();}} className="flex justify-center gap-4">
                <input className="p-4 w-xl opacity-80 rounded border border-gray-500/70 bg-black" placeholder={lang[selectedLanguage].gptSearchPlaceholder} />
                <button className=" p-4 cursor-pointer rounded-md bg-red-600 w-72 text-2xl font-medium flex gap-1 justify-center hover:bg-red-700">
                    <span>{lang[selectedLanguage].search}</span>
                    <img src={searchIcon} alt="My Happy SVG" className="w-8 custom-logo" />
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar;