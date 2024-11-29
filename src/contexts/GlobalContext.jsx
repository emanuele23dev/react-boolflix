import { createContext, useContext, useState } from 'react';
const GlobalContext = createContext();

// COME "poster_sizes" INSERIAMO w780 COME DIMENSIONE INZIALE E POI LA ADATTIAMO IN SEGUITO
const img_base_url = 'https://image.tmdb.org/t/p/w780';



function GlobalContextProvider({ children }) {

  const [movies, setMovies] = useState([]);

  const [searchText, setSearchText] = useState('');

  const api_key = import.meta.env.VITE_MOVIES_API_KEY;
 
  const base_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchText}`;


  function handleSearch(e) {
    e.preventDefault();
  
    fetch(base_url).then((res) => res.json())
    .then(({results}) => {
      console.log(results);
      
setMovies(results)
  })
}


  const values = {
    movies,
    setMovies,
    searchText,
    setSearchText,
    base_url,
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
