import ReactCountryFlag from "react-country-flag";

function MovieCard({ movie, languageToCountry, imgBaseUrl, fallbackImage, renderStars }) {
  const rating = Math.ceil(movie.vote_average / 2);

  return (
    <div key={`${movie.type}-${movie.id}`} className="movie-card">
      <div className="movie-poster-container">
        <img
          src={movie.poster_path ? `${imgBaseUrl}${movie.poster_path}` : fallbackImage}
          alt={movie.title}
          className="movie-poster"
          onError={(e) => {
            e.target.src = fallbackImage;
          }}
        />
        <div className="movie-info">
          <h4>{movie.title}</h4>
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
}

export default MovieCard; 