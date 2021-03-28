import { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie'

const Exercise3 = () => {
  const [flag, setFlag] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async (uri) => {
  try {
    const res = await axios.get(uri);
    //const genres = await res.data.genres;
    const results = await res.data.results;

    results.forEach(el => {
      const movie = {
        id: el.id,
        title: el.title,
        overview: el.overview,
        vote_average: el.vote_average,
        release_date: el.release_date,
        image: `${res.data.images_url}${el.poster_path}`
      }
      setMovies((movies) => [...movies, movie]);
    });
    setFlag(true);
  } catch (error) {
    console.error(error);
  }
}
getMovies('http://localhost:4000/movies?Akelab=123456789');
  }, []);

  return (
      <main role='main' className='movies'>
        {flag ? (
        movies.map((el) => (
          <Movie key={el.id} title={el.title} overview={el.overview} vote_average={el.vote_average} release_date={el.release_date} image={el.image}/>
        ))
      ) :(
        <h3>Cargando...</h3>
      )}
      </main>
  )
}

export default Exercise3;
