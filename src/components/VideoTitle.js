import playIcon from "./../assets/playIcon.svg";
import infoIcon from "./../assets/infoIcon.svg";


let VideoTitle = ({original_title, overview}) => {
    console.log('original_title: ', original_title);
    console.log('overview: ', overview);
    return (
        <div className="pt-[15%] px-24 absolute text-white w-screen h-screen z-10 bg-gradient-to-r from-black">
            <h1 className="font-bold text-7xl my-4 w-5/12">{original_title}</h1>
            <p className="font-[450] w-4/12 leading-snug text-[20px]">{overview}</p>
            <div className="mt-8 flex gap-4">
                <button className="bg-white text-black flex items-center p-2 w-40 px-6 rounded-md gap-2 cursor-pointer hover:bg-gray-400/50">
                    <img src = {playIcon} alt="My Happy SVG" className="w-10 custom-logo" />
                    <span className="text-2xl font-medium font-sans">Play</span>
                </button>
                <button className="bg-gray-500/50 text-white flex items-center p-2 w-fit px-6 rounded-md gap-2 cursor-pointer">
                    <img src={infoIcon} alt="My Happy SVG" className="w-10 custom-logo" />
                    <span className="text-2xl font-medium font-sans">More Info</span>
                </button>
            </div>
        </div>
    )
}

export default VideoTitle;