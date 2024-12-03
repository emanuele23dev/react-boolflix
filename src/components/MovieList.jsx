import { useGlobalContext } from "../contexts/GlobalContext";
import MovieCard from "./MovieCard";

function MovieList() {
  const { movies } = useGlobalContext();

  const languageToCountry = {
    en: "GB",
    it: "IT",
    es: "ES",
    fr: "FR",
    ja: "JP",
    ko: "KR",
  };

  const imgBaseUrl = "https://image.tmdb.org/t/p/w342";
  const fallbackImage = "https://via.placeholder.com/342x513?text=No+Image+Available";

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
        {movies && movies.map((movie) => (
          <MovieCard
            key={`${movie.type}-${movie.id}`}
            movie={movie}
            languageToCountry={languageToCountry}
            imgBaseUrl={imgBaseUrl}
            fallbackImage={fallbackImage}
            renderStars={renderStars}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList; 