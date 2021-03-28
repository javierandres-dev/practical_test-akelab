import React from 'react';

const Movie = (props) => {
  const { title, overview, vote_average, release_date, image, genre } = props;
  const year = release_date.substring(0, 4);
  let _overview = overview.substring(0, 400);
  _overview = _overview.substring(0, _overview.lastIndexOf('.') + 1);

  return (
    <section className='movie'>
      <h2>{title} ({year})</h2>
      <img src={image} alt={title}/>
      <p>{_overview}</p>
      <div>
        <p><span>Título: </span>{title}</p>
        <p><span>Calificación: </span>{vote_average}</p>
        <p><span>Género: </span>{genre}</p>
        <p><span>Fecha de realización: </span>{release_date}</p>
      </div>
    </section>
  )
}

export default Movie;
