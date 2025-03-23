import { useSelector } from "react-redux";
import useFetchTrailerVideo from "../hooks/useFetchTrailerVideo";

const VideoBackground = ({ recommendedMovieId }) => {
  useFetchTrailerVideo(recommendedMovieId);

  const trailerVideo = useSelector((state) => state.movies.trailerVideo);

  if (!trailerVideo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-screen overflow-hidden relative">
      {trailerVideo.key && (
        <>
          <iframe
            className="w-full h-screen object-cover scale-150 pointer-events-none"
            src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&loop=1&playlist=${trailerVideo.key}&vq=hd1080`}
            title="YouTube video player"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="absolute inset-0" />
        </>
      )}
    </div>
  );
};

export default VideoBackground;