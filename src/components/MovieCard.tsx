import { getPosterBaseURL } from "../utils/helper";
import type { customMovieType } from "../utils/types";

const MovieCard = ({
  movie: { title, vote_average, poster_path, original_language, release_date },
}: customMovieType) => {
  return (
    <div className="movie-card">
      <img
        src={
          poster_path ? `${getPosterBaseURL()}/${poster_path}` : "/no-movie.png"
        }
        alt="movie poster"
      />

      <div className="mt-3">
        <h3 className="">{title}</h3>
        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="rating icon" />{" "}
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>
          <span>•</span>
          <p className="lang">{original_language}</p>
          <span>•</span>
          <p className="year">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
