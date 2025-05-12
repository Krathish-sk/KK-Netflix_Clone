import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./TitleCards.css";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTRkZmNjNWJiMDFlZGRiZjEwNGYzNmVhNjdhZGQwYyIsIm5iZiI6MTY4MTg3OTU5NC4zMDgsInN1YiI6IjY0M2Y3MjJhOTU2NjU4MDRiNDAxYjhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JB6troFzGtMI-3EC6StGq9m5_QMguB_8sC2nzT7XJsQ",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    // cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  const renderCardList = apiData.map((card, index) => {
    return (
      <Link
        to={`player/${card.id}`}
        className="card"
        key={index}
        ref={cardsRef}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
          alt={card.name}
        />
        <p>{card.original_title}</p>
      </Link>
    );
  });

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list">{renderCardList}</div>
    </div>
  );
};

export default TitleCards;
