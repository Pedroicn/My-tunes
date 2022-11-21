import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import getMusics from '../../services/musicsAPI';

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
    <div className="page-album" data-testid="page-album">
      <h1 className="search-title">My tunes - album</h1>
      <section className="section-title-album">
        {
          infoAlbum.map((music, index) => (
            <div className="actual-album" key={ index }>
              <img src={ music.artworkUrl100 } alt="album" />
              <p data-testid="artist-name">{ music.artistName }</p>
              <p data-testid="album-name">{ music.collectionName }</p>
            </div>
          ))
        }
      </section>
    </div>
  )
}

export default Album