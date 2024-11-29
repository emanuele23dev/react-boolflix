import { GlobalContextProvider, useGlobalContext } from './contexts/GlobalContext';
import ReactCountryFlag from "react-country-flag";

function App() {

  function AppHeader() {

    const { searchText, setSearchText, base_url, handleSearch } = useGlobalContext();
    console.log(base_url);
    
return (

    <header>
    <img width={130} src="./src/assets/boolflix.png" alt="" />
    <form onSubmit={handleSearch}>

     <input type="text" placeholder="Search movies" onChange={(e) => setSearchText(e.target.value)} value={searchText}/>
     <button type="submit">Search</button>

    </form>
   </header>

)
  }

  function MovieList() {
    const { movies } = useGlobalContext();

    const languageToCountry = {
      'en': 'GB',
      'it': 'IT',
      'es': 'ES',
      'fr': 'FR',
      'ja': 'JP',
    
    };

    return (
      <ul className='movie-list'>
        {movies && movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <div>Titolo Originale: {movie.original_title}</div>
            <div>Lingua: {
              languageToCountry[movie.original_language.toLowerCase()] ? 
              <ReactCountryFlag 
                countryCode={languageToCountry[movie.original_language.toLowerCase()]} 
                svg 
              /> : 
              movie.original_language
            }</div>
            <div>Voto: {movie.vote_average}</div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
    <GlobalContextProvider>
      <AppHeader />
 
   <main>
    <MovieList />
   </main>
    </GlobalContextProvider>
    </>
  );
}

export default App;
