package dev.gmclean.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


/**
 * Uses repository class and talks to the database and gets a list of movies and returns to api layer
 */
@Service
public class movieService {
@Autowired // framework will initialize/instantiate class for us
    private MovieRepository movieRepository;
    public List<Movie> allMovies() {
        return movieRepository.findAll();

    }

    public Optional<Movie> singleMovie(String imdbId) {
        return movieRepository.findMovieByImdbId(imdbId);
    }
}
