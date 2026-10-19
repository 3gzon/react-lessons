import React, { useState } from "react";
import movies from "../data/movies"
import MovieCard from "./MovieCard";

function MoviesList() {


    return (
        <section>
            <div className="section-header">
                <p className="section-label">
                    tonight
                </p>
                <h2>movies</h2>
                <p>{movies.length} movies</p>
            </div>
            <div className="movie-grid">
                {
                    movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            title={movie.title}
                            category={movie.category}
                            time={movie.time}
                            price={movie.price}
                            avaliable={movie.available}
                            style={movie.style}
                    
                        />
                    ))
                }
            </div>
      </section>
  )
}

export default MoviesList;
