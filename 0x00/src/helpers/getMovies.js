import axios from 'axios';

export default async function getMovies() {
  const uri = 'http://localhost:4000/movies?Akelab=123456789';
  try {
    const movies = await axios.get(uri);
    return movies;
  } catch (error) {
    console.error(error);
  }
}
