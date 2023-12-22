import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import '../pages/style.css';
import Filter from '../components/Filter'
import Movie from '../components/Movie';

function Projects() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  
  const fetchPopular = async () => {
    // i haven't used .env file because its free api key     
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=1af8f5a0dac921ed793eaf9b1a89b23e&language=en-US&page=1");
    const movies = await response.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  }

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <div className="App">
    <Filter 
      popular={popular}
      setFiltered={setFiltered}
      activeGenre={activeGenre}
      setActiveGenre={setActiveGenre}
    />
      <motion.div
        layout 
        className="popular-movies"
      >
        <AnimatePresence>
          {filtered.map(movie => (
            <Movie 
              key={movie.id} 
              movie = {movie}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Projects;