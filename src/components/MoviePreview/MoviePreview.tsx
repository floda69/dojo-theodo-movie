import { POSTER_URL_PREFIX } from "../../App";
import { Movie } from "../../models";
import styles from "./MoviePreview.module.css";

const MoviePreview = ({ movie }: { movie: Movie }) => {
  const goToMovieDetails = () => {
    // A DEFINIR EXPERT
  };

  return <div className={styles.movieCard} onClick={goToMovieDetails}><img className={styles.movieImg} src ={POSTER_URL_PREFIX + movie.poster_path} alt="photo" crossOrigin=""/><p className={styles.movieTxt}>{movie.title}</p>
    
    {[...Array(5)].map((_, index) => (
        <span className={`${styles.quizzItem} ${
          movie.vote_average/2>index ? styles.yellow : styles.white
        }`}>★</span>
    ))}
    
    </div>;
    
  

};

export default MoviePreview;
