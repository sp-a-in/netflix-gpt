let VideoTitle = ({original_title, overview}) => {
    console.log('original_title: ', original_title);
    console.log('overview: ', overview);
    return (
        <div className="pt-80 px-14 absolute text-white w-screen aspect-video">
            <h1 className="font-bold text-7xl my-4 w-5/12">{original_title}</h1>
            <p className="font-medium w-4/12 leading-snug text-[20px]">{overview}</p>
            <button> Play</button>
            <button>More Info</button>
        </div>
    )
}

export default VideoTitle;