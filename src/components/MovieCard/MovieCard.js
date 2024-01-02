import React from 'react';
import "../MovieCard/MovieCard.scss";
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
    const { data } = props;
    return(
        <Link to={`/movie/${data.imdbID}`} >
      <div className="card-item">
        <div className="card-inner">
            <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
            </div>
            <div className="card-bottom">
                <div ClassName="card-info">
                <h4>{data.Title}</h4>
                <p>{data.Year}</p>
                </div>
            </div>
        </div>

      </div>
      </Link>
    );
};

export default MovieCard;