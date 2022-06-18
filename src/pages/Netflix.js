import React from "react";
import Row from "../components/NetflixComp/Row";
import requests from "../api/apiRequests";
import '../style/app.css'
import Banner from "../components/NetflixComp/Banner";
import NavBar from "../components/NetflixComp/NavBar";

const Netflix = () => {
  return (
    <div className="MainNetflix">
      <NavBar/>      
      <Banner/>
      <Row
        title="Netflix Original"
        fetch={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Movies" fetch={requests.fetchTopRated} />
      <Row title="Trend Movies" fetch={requests.fetchTrending} />
      <Row title="Action Movies" fetch={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetch={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetch={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetch={requests.fetchDocumantaries} />
    </div>
  );
};

export default Netflix;
