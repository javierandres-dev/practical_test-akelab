import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import getMovies from './helpers/getMovies';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Exercise1 from './components/Exercise1';
import Exercise2 from './components/Exercise2';
import Exercise3 from './components/Exercise3';
import './App.css';

function App() {
  const [genres, setGenres] = useState(undefined);
  const [results, setResults] = useState(undefined);

  useEffect(() => {
    (async () => {
      const movies = await getMovies();
      setGenres(movies.data.genres);
      setResults(movies.data.results);
    })();
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/exercise1'>
          <Exercise1 />
        </Route>
        <Route exact path='/exercise2'>
          <Exercise2 />
        </Route>
        <Route exact path='/exercise3'>
          <Exercise3 genres={genres} results={results} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
