import { createContext, useContext, useState } from 'react';
const GlobalContext = createContext();

const img_base_url = 'https://image.tmdb.org/t/p/w342';



function GlobalContextProvider({ children }) {

  const [movies, setMovies] = useState([]);

  const [searchText, setSearchText] = useState('');

  const api_key = import.meta.env.VITE_MOVIES_API_KEY;
 
  function handleSearch(e) {
    e.preventDefault();
    
    const movies_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchText}`;
    const serietv_url = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${searchText}`;

    fetch(movies_url)
      .then(res => res.json())
      .then(movieData => {
       
        fetch(serietv_url)
          .then(res => res.json())
          .then(tvData => {
            const tv_series = tvData.results.map(show => ({
              id: show.id,
              title: show.name,
              original_title: show.original_name,
              original_language: show.original_language,
              vote_average: show.vote_average,
              type: 'tv'
            }));

            const movies = movieData.results.map(movie => ({
              ...movie,
              type: 'movie'
            }));

            setMovies([...movies, ...tv_series]);
          });
      });
  }


  const values = {
    movies,
    setMovies,
    searchText,
    setSearchText,
    handleSearch,
  }


  return (
    <GlobalContext.Provider 
      value={values}
    >
      {children}
    </GlobalContext.Provider>
  );
}

function useGlobalContext() {
  return useContext(GlobalContext);
}


export { GlobalContextProvider, useGlobalContext };
