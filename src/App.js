import { React, useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState('');

  const GetTopAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());

    SetTopAnime(temp.top.slice(0, 5));
  };

  // console.log(topAnime);

  const handleSearch = (e) => {
    e.preventDefault();

    FetchAnime(search);
  };

  const FetchAnime = async (query) => {
    await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=20`
    )
      .then((res) => res.json())
      .then((temp) => SetAnimeList(temp.results))
      .catch((err) => {
        console.log(err);
      });

    // console.log(temp.results);
  };

  useEffect(() => {
    GetTopAnime();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Sidebar topAnime={topAnime} />
        <Content
          handleSearch={handleSearch}
          search={search}
          SetSearch={SetSearch}
          animeList={animeList}
        />
      </div>
    </div>
  );
}

export default App;
