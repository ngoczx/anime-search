import { React, useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState('');

  const GetTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/top/anime`).then((res) =>
      res.json()
    );

    SetTopAnime(temp.data.slice(0, 5));
  };

  // console.log(topAnime);

  const handleSearch = (e) => {
    e.preventDefault();

    FetchAnime(search);
  };

  const FetchAnime = async (query) => {
    await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=20`)
      .then((res) => res.json())
      .then((res) => SetAnimeList(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(animeList);

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
