import { createContext, useState } from 'react';

// IMPOSTIAMO LA NOSTRA API KEY GENERATA IN TMDB 
const api_key = '046e385c747f1e42c5fee67dd7d97618';

const base_url = 'https://api.themoviedb.org/3';

// COME "poster_sizes" INSERIAMO w780 COME DIMENSIONE INZIALE E POI LA ADATTIAMO IN SEGUITO
const img_base_url = 'https://image.tmdb.org/t/p/w780';

// EXPORT CONTENITORE GLOBALE PER PERMETTERE AI SUCCESSIVI COMPONENTI DI ACCEDERE AL CONTEXT 
export const MovieContext = createContext();

// PASSIAMO MP TRAMITE CONTEXT E ACCETTA IL PARAMETRO QUERY PER LA RICERCA DEI FILM
// E SARA' RIUTILIZZABILE QUANDO CHIAMATA DA ALTRI COMPONENTI 
function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);

  function searchMovies(query) {
    fetch(`${base_url}/search/movie?api_key=${api_key}&query=${query}`)
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }

  return (
    <MovieContext.Provider 
      value={{ 
        movies,
        searchMovies 
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export { MovieProvider };
