import React, { useEffect, useState } from 'react'
import searchAlbumsAPI from '../../services/searchAlbumsAPI'
import initialAlbuns from '../../helpers/initialAlbums';
import { Link } from 'react-router-dom';
import './home.css';
import Header from '../../components/musicCard/header/Header';

function Home() {
  const [searchInput, setSearchInput] = useState('');
  const [getAlbuns, setGetAlbuns] = useState([]);
  const [savedInputText, setSavedInputText] = useState('');
  const [loadedItems, setLoadedItems] = useState(true);

  const handleSearch = ({ target: { value } }) => {
    setSearchInput(value);
  };

  useEffect(() => {
    let arrayInitialAlbuns = [];
    const fetchInitialAlbuns = () => {
      initialAlbuns.forEach(async (album) => {
        const response = await searchAlbumsAPI(album);
        arrayInitialAlbuns = [...arrayInitialAlbuns, response[0]];
        setGetAlbuns([...arrayInitialAlbuns]);
      });
    };
    fetchInitialAlbuns();
  }, []);

  const handleClick = async (event) => {
    event.preventDefault();
    setSavedInputText(searchInput);
    const response = await searchAlbumsAPI(searchInput);
    if (response.length === 0) {
      setLoadedItems(false);
      setGetAlbuns([]);
    } else {
      setGetAlbuns(response);
      setLoadedItems(true);
      setSearchInput('');
    }
  };

  return (
    <div className="page-search">
      <div>
        <Header />
        <h1 className="search-title">My tunes</h1>
        <form className="search-form" onSubmit={ handleClick }>
          <h3>Search for your favorite artist album</h3>
          <div>
            <input
              placeholder="type an artist name"
              id="search-input"
              name="search-input"
              type="text"
              value={ searchInput }
              onChange={ handleSearch }
            />
          </div>
          <button
            className="search-button"
            type="submit"
          >
            Search
          </button>

        </form>
      </div>

      { getAlbuns.length !== 0
      && <p className="result-text">{ `Resultado de álbuns de: - ${savedInputText}` }</p> }
      { !loadedItems && <p>Nenhum álbum foi encontrado</p> }

      <section className="albuns">
        {getAlbuns.map((album) => (
          <Link
            className="links-search"
            key={ album.collectionId }
            data-testid={ `link-to-album-${album.collectionId}` }
            to={ `/album/${album.collectionId}` }
          >
            <div>
              <img src={ album.artworkUrl100 } alt="album.artistName" />
              <p>{ album.artistName }</p>
              <p>{ album.collectionName }</p>
            </div>
          </Link>
        ))}
      </section>

    </div>
  )
}

export default Home