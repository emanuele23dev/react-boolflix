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

    </form>
   </header>

)
  }

  function MovieList() {
    const { movies } = useGlobalContext();

    return (
      <ul className='movie-list'>
        {movies && movies.map((movie, index) => (
         <li key={index} >{movie.title}</li>
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
