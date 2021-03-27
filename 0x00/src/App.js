import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Exercise1 from './components/Exercise1';
import Exercise2 from './components/Exercise2';
import Exercise3 from './components/Exercise3';
import './App.css';

function App() {
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
          <Exercise3 />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
