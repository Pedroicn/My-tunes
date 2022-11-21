import React from 'react'

function musicCard(props) {
  const { musics } = props;
  return (
    <div>
      {
          musics.map((music, index) => (
            index === 0 ? null
              : (
                <section className="music-preview" key={ index }>
                  <audio className="audio" src={ music.previewUrl } controls>
                    <track kind="captions" />
                    {`O seu navegador não suporta o elemento ${music.trackName}` }
                    <code>audio</code>
                  </audio>
                  <p>{ music.trackName }</p>
                </section>
              )
          ))
        }
    </div>
  )
}

export default musicCard