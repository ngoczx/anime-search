import React from 'react';
import './AnimeCards.css';

function AnimeCard({ anime }) {
  console.log(anime);
  return (
    <article className="anime-card">
      <a href={anime.url} target="_blank" rel="noreferrer">
        <figure>
          <img src={anime.images.jpg.image_url} alt="Img" />
        </figure>
        <h3>{anime.title}</h3>
      </a>
    </article>
  );
}

export default AnimeCard;
