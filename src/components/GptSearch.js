import NETFLIX_BG from "../utils/constants"
import GptSearchBar from "./GptSearchBar"
import GptSuggestion from "./GptSuggestion"

const GptSearch = () => {
  return (
    <div className="text-white">
        <div className="fixed -z-10">
            <img className="w-screen" src={NETFLIX_BG} />
        </div>
        <GptSearchBar />
        <GptSuggestion />
    </div>
  )
}

export default GptSearch