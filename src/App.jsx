import {
  GlobalContextProvider,
  useGlobalContext,
} from "./contexts/GlobalContext";
import ReactCountryFlag from "react-country-flag";

function App() {
  function AppHeader() {
    const { searchText, setSearchText, base_url, handleSearch } =
      useGlobalContext();
    console.log(base_url);

    return (
      <header className="netflix-header">
        <div className="header-content">
        <img className="logo" width={130} src="./src/assets/boolflix.png" alt="" />
        <form onSubmit={handleSearch}>
          <input
          className="search-input"
            type="text"
            placeholder="Search movies"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button className="search-button" type="submit">Search</button>
        </form>
        </div>
      </header>
    );
  }

  function MovieList() {
    const { movies } = useGlobalContext();

    const languageToCountry = {
      en: "GB",
      it: "IT",
      es: "ES",
      fr: "FR",
      de: "DE",
      ja: "JP",
      ko: "KR",
      zh: "CN",
    };

    const imgBaseUrl = "https://image.tmdb.org/t/p/w342";

    const renderStars = (rating) => {
      return [...Array(5)].map((_, index) => (
        <i
          key={index}
          className={index < rating ? "fas fa-star" : "far fa-star"}
        />
      ));
    };

    return (
      <div className="movies-container">
        <div className="movies-grid">
          {movies &&
            movies.map((movie) => {
              const rating = Math.ceil(movie.vote_average / 2);
              return (
                <div key={`${movie.type}-${movie.id}`} className="movie-card">
                  <div className="movie-poster-container">
                    {movie.poster_path && (
                      <img
                        src={`${imgBaseUrl}${movie.poster_path}`}
                        alt={movie.title}
                        className="movie-poster"
                      />
                    )}
                    <div className="movie-info">
                      <h3>{movie.title}</h3>
                      <div>Tipo: {movie.type === "movie" ? "Film" : "Serie TV"}</div>
                      <div>Titolo Originale: {movie.original_title}</div>
                      <div className="language">
                        Lingua:{" "}
                        {languageToCountry[movie.original_language?.toLowerCase()] ? (
                          <ReactCountryFlag
                            countryCode={languageToCountry[movie.original_language.toLowerCase()]}
                            svg
                          />
                        ) : (
                          movie.original_language
                        )}
                      </div>
                      <div className="rating">{renderStars(rating)}</div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        </div>

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
