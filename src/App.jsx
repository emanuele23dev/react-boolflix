import { GlobalContextProvider, useGlobalContext } from './contexts/GlobalContext';

function App() {

  function AppHeader() {

    const { searchText, setSearchText, base_url, handleSearch } = useGlobalContext();
    console.log(base_url);
    
return (

    <header>
    <img width={130} src="./src/assets/boolflix.png" alt="" />
    <form onSubmit={handleSearch}>

     <input type="text" placeholder="Search movies" onChange={(e) => setSearchText(e.target.value)} value={searchText}/>
     <button type="submit">Cerca</button>

    </form>
   </header>

)
  }

  function MovieList() {
    const { movies } = useGlobalContext();

    return (
      <ul className='movie-list'>
        {movies && movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <div>Titolo Originale: {movie.original_title}</div>
            <div>Lingua: {movie.original_language}</div>
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
