import React from 'react';
import './Sidebar.css';

const Sidebar = ({ topAnime }) => {
  return (
    <aside>
      <nav className="topAnime">
        <h3>Top Anime</h3>
        {topAnime.map((anime) => (
          // <h2>{anime.rank}</h2>
          <a
            href={anime.url}
            target="_blank"
            key={anime.mal_id}
            rel="noreferrer"
          >
            <span>{anime.rank}</span>
            {anime.title}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
