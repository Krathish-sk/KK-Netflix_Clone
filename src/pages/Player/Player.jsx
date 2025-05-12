import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTRkZmNjNWJiMDFlZGRiZjEwNGYzNmVhNjdhZGQwYyIsIm5iZiI6MTY4MTg3OTU5NC4zMDgsInN1YiI6IjY0M2Y3MjJhOTU2NjU4MDRiNDAxYjhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JB6troFzGtMI-3EC6StGq9m5_QMguB_8sC2nzT7XJsQ",
    },
  };

  useEffect(() => {
    const fetchMovieData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        options
      );
      const result = await response.json();
      setApiData(result.results[0]);
    };

    fetchMovieData();
  }, []);

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt="BackArrow Icon"
        onClick={() => {
          navigate("/");
        }}
      />
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        width={"90%"}
        height="90%"
        frameBorder={"0"}
        title="trailer"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
