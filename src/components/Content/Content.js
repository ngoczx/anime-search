import React from 'react';
import './Content.css';
import AnimeCards from '../AnimeCards/AnimeCards';

const Content = (props) => {
  return (
    <main>
      <div className="main-content">
        <div className="main-head">
          <form className="search-box" onSubmit={props.handleSearch}>
            <input
              type="search"
              placeholder="Search for an anime..."
              required
              autoFocus
              value={props.search}
              onChange={(e) => props.SetSearch(e.target.value)}
            />
          </form>
        </div>
        {props.animeList && (
          <div className="anime-list">
            {props.animeList.map((anime) => (
              <AnimeCards anime={anime} key={anime.mal_id} />
            ))}
          </div>
        )}
        {!props.animeList && (
          <p>Không tìm thấy kết quả nào! Vui lòng nhập lại</p>
        )}
      </div>
    </main>
  );
};

export default Content;
