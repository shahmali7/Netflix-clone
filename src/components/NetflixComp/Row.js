import React, { useState, useEffect } from "react";
import "../NetflixStyle/Row.css";
import axios from "axios";
import Netflix_Api from "../../api/Api";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, isLargeRow, fetch }) => {
  const [movies, setMovie] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");

  useEffect(() => {
    const fetchURl = async () => {
      const response = await axios.get(`${Netflix_Api}${fetch}`);
      setMovie(response.data.results);
      return response;
    };
    fetchURl();
  }, [fetch]);


  const handleClick = (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  }
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoPlay: 1,
    },
  };

  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="RowImages">
        {movies.map((movie) => (
           <img
             key={movie.id}
             onClick={() => handleClick(movie)}
             alt=""
             className={`row-image ${isLargeRow && "row-large-image"}`}
             src={`${base_url}${
               isLargeRow ? movie.backdrop_path : movie.poster_path
             }`}
           />
        ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
};

export default Row;
