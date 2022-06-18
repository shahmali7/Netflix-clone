import React, { useState, useEffect } from "react";
import axios from "axios";
import "../NetflixStyle/Banner.css";
import requests from "../../api/apiRequests";
import Netflix_Api from "../../api/Api";


const base_url = "https://image.tmdb.org/t/p/original";
const Banner = () => {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    const bannerPhoto = async () => {
      const response = await axios.get(
        `${Netflix_Api}${requests.fetchNetflixOriginals})`
      );

      setPhoto(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      return response;
    };
    bannerPhoto();
    
  }, []);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <header
      className="Banner"
      
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5),black), url(${base_url}${photo?.backdrop_path})`,
      }}
    >
    
      <div className="banner-content">
        <h1 className="banner-title">{photo?.title || photo?.name || photo?.original_name}</h1>
        <div>
          <button className="banner-button">Play</button>
          <button className="banner-button">More</button>
        </div>
        <h2 className="banner-description">{truncate(photo?.overview, 140)}</h2>
      </div>
    </header>
  );
};

export default Banner;
