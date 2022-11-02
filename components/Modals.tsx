import { XMarkIcon } from "@heroicons/react/24/outline";
import { HandThumbUpIcon, PlusIcon } from "@heroicons/react/24/solid";
import Modal from "@mui/material/Modal";
import { DocumentData } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import {
  FaPlay,
  FaRegThumbsUp,
  FaThumbsUp,
  FaVolumeOff,
  FaVolumeUp,
} from "react-icons/fa";
import ReactPlayer from "react-player/lazy";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atom/modalAtom";
import { Movie, Element, Genre } from "../typing";

function Modals() {
  const [movie, setMovie] = useRecoilState<Movie | DocumentData | null>(
    movieState
  );
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [triller, setTriller] = useState<string>("");
  const [genres, setGenres] = useState<Genre[]>([]);
  const [muted, setMuted] = useState<boolean>(false);
  const handleClose = () => {
    setShowModal(false);
  };

  const fetchMovie = useCallback(async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/${
        movie?.media_type === "tv" ? "tv" : "movie"
      }/${movie?.id}?api_key=${
        process.env.NEXT_PUBLIC_API_KEY
      }&language=en-US&append_to_response=videos`
    ).then((response) => response.json());

    if (data?.videos) {
      const index = data?.videos?.results?.findIndex(
        (element: Element) => element?.type === "Trailer"
      );
      setTriller(data?.videos?.results[index]?.key);
    }

    if (data?.genres) {
      setGenres(data?.genres);
    }
  }, [movie]);

  useEffect(() => {
    fetchMovie();
  }, [movie]);

  return (
    <Modal
      open={showModal}
      onClose={handleClose}
      className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <>
        <button
          onClick={handleClose}
          className="absolute modalBtn right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${triller}`}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: "0", left: "0" }}
            playing
            muted={muted}
          />
          <div className="absolute flex items-center justify-between w-full px-10 bottom-10">
            <div className="flex space-x-2">
              <button className="flex items-center bg-white rounded gap-x-2 px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">
                <FaPlay className="text-black h-7 w-7" />
                Play
              </button>

              <button className="modalBtn">
                <PlusIcon />
              </button>

              <button className="modalBtn">
                <FaRegThumbsUp className="w-7 h-7" />
              </button>
            </div>
            <button className="modalBtn" onClick={() => setMuted(!muted)}>
              {muted ? (
                <FaVolumeOff className="w-6 h-6" />
              ) : (
                <FaVolumeUp className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
          <div className="space-y-6 text-lg">
            <div className="flex items-center space-x-2 text-sm">
              <p className="font-semibold text-green-400">
                {movie!.vote_average * 10}% Match
              </p>
              <p className="font-light">
                {movie?.release_date || movie?.first_air_date}
              </p>
              <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                HD
              </div>
            </div>
            <div className="flex flex-col font-light gap-x-10 gap-y-4 md:flex-row">
              <p className="w-5/6">{movie?.overview}</p>
              <div className="flex flex-col space-y-3 text-sm">
                <div>
                  <span className="text-[gray]">Genres: </span>
                  {genres.map((genre) => genre.name).join(", ")}
                </div>
                <div>
                  <span className="text-[gray]">Original language: </span>
                  {movie?.original_language}
                </div>
                <div>
                  <span className="text-[gray]">Total votes: </span>
                  {movie?.vote_count}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Modal>
  );
}

export default Modals;
