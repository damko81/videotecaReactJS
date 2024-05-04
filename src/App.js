import './App.css';
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages";
import Movies from "./pages/movies";
import SignUp from "./pages/signup";
import LogIn from "./pages/login";
import { useGetMovies } from './components/Movie/Action';
import LoadDeleteMovies from './pages/LoadDeleteMovies';
import CreateMovie from './components/Movie/CreateMovie';

function App() {
 
  let movies = useGetMovies();

  return (
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/movies"
                        element={<Movies movies={movies} />}
                    />
                      <Route
                        path="/loaddeletemovies"
                        element={<LoadDeleteMovies/>}
                    />
                    <Route
                        path="/createmovie"
                        element={<CreateMovie/>}
                    />
                    <Route
                        path="/log-in"
                        element={<LogIn />}
                    />
                    <Route
                        path="/sign-up"
                        element={<SignUp />}
                    />
                </Routes>
            </Router>
          );
}

export default App;
