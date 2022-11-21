import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import getMusics from '../../services/musicsAPI';
import MusicCard from '../../components/musicCard/MusicCard';
import './album.css'
import Header from '../../components/musicCard/header/Header';

function Album() {
  const [musics, setMusics] = useState([]);
  const [infoAlbum, setInfoAlbum] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMusics = async () => {
      const apiMusics = await getMusics(id);
      setMusics(apiMusics);
      setInfoAlbum([apiMusics[0]]);
    };
    fetchMusics();
  }, [id]);
  return (
    <div className="page-album">
      <Header />
      <h1 className="search-title">My tunes - album</h1>
      <section className="section-title-album">
        {
          infoAlbum.map((music, index) => (
            <div className="actual-album" key={ index }>
              <img src={ music.artworkUrl100 } alt="album" />
              <p>{ music.artistName }</p>
              <p>{ music.collectionName }</p>
            </div>
          ))
        }
      </section>
      <MusicCard musics={ musics } />
    </div>
  )
}

export default Album