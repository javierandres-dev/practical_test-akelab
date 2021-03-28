import React from 'react'

const Movie = (props) => {
  const { title, overview, vote_average, release_date, image } = props;
  return (
    <section>
      <figure>
        <figcaption>{title}</figcaption>
        <img src={image} alt={title}/>
      </figure>
      <article>
        <p>{overview}</p>
        <h2>{title}</h2>
        <p>{vote_average}</p>
        <p></p>
        <p>{release_date}</p>
      </article>
    </section>
  )
}

export default Movie
