import { useState } from 'react';
import Movie from './Movie'

const Exercise3 = ({genres, results}) => {
console.log(genres, results);
const [movies, setMovies] = useState([]);
const movie = {
  id: undefined,
  title: undefined,
  overview: undefined,
  vote_average: undefined,
  release_date: undefined,
  image: undefined,
  genre: undefined
}

  return (
      <main role='main' className='main'>
        {movies.length === 0 ? <p>Cargando...</p> : <Movie>listo</Movie>}
      </main>
  )
}

export default Exercise3
