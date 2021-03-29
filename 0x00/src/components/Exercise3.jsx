import { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie'

const Exercise3 = () => {
  const [show, setShow] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async (uri) => {
  try {
    const res = await axios.get(uri);
    const genres = await res.data.genres;
    const results = await res.data.results;

    results.forEach(el => {
      const movie = {
        id: el.id,
        title: el.title,
        overview: el.overview,
        vote_average: el.vote_average,
        release_date: el.release_date,
        image: `${res.data.images_url}${el.poster_path}`,
        genre: '',
        genreIds: el.genre_ids
      }
      for (let i = 0; i < movie.genreIds.length; i++) {
        const id = movie.genreIds[i];
        genres.forEach(ele => {
          if (ele.id === id) {
            if (i === movie.genreIds.length - 1) {
              movie.genre += `${ele.name}`;
            } else {
              movie.genre += `${ele.name}, `;
            }
          }
        });
      }
      setMovies((movies) => [...movies, movie]);
    });
    setTimeout(() => {
      setShow(true);
    }, 2000);
  } catch (error) {
    console.error(error);
  }
}
getMovies('http://localhost:4000/movies?Akelab=123456789');
  }, []);

  return (
      <main role='main' className='container'>
        <h1 className='ta-left'>Películas</h1>
        <div className='movies'>
        {show ? (
        movies.map((el) => (
          <Movie key={el.id} title={el.title} overview={el.overview} vote_average={el.vote_average} release_date={el.release_date} image={el.image} genre={el.genre}/>
        ))
      ) :(
        <h3>Cargando...</h3>
      )}
      </div>
      </main>
  )
}

export default Exercise3;
