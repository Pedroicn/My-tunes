import React, { useEffect } from 'react'
import getMusics from '../../services/musicsAPI';

function Album(props) {
  const [musics, setMusics] = useState([]);
  const [infoAlbum, setInfoAlbum] = useState([]);

  useEffect(() => {
    const { match: { params: { id } } } = props;
    const fetchMusics = async () => {
      const apiMusics = await getMusics(id);
      setMusics(apiMusics);
      setInfoAlbum([apiMusics[0]]);
    };
    fetchMusics();
  }, [props]);

  return (
    <div>Album</div>
  )
}

export default Album