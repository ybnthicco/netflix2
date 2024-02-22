// Define your TMDb API key
/* const apiKey = '2051710e2b77f17652a595dbc3a52425'; */

$(document).ready(() => {
    // Function to fetch movie data from TMDb
    function fetchMovies() {
        // Example API request URL (replace with your actual endpoint)
        let apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=2051710e2b77f17652a595dbc3a52425';

        // Fetch movie data from TMDb
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Populate movie items
                data.results.forEach(movie => {
                    // Create movie item HTML
                    let movieItemHtml = `
                        <a href="#" class="movie-item">
                            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                            <div class="movie-item-content">
                                <div class="movie-item-title">${movie.title}</div>
                                <div class="movie-infos">
                                    <div class="movie-info">
                                        <i class="bx bxs-star"></i>
                                        <span>${movie.vote_average}</span>
                                    </div>
                                    <div class="movie-info">
                                        <i class="bx bxs-time"></i>
                                        <span>${movie.runtime} mins</span>
                                    </div>
                                    <div class="movie-info">
                                        <span>HD</span>
                                    </div>
                                    <div class="movie-info">
                                        <span>${movie.adult ? '18+' : 'All'}</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    `;
                    
                    // Append movie item HTML to the movies slide
                    $('.movies-slide').append(movieItemHtml);
                });
            })
            .catch(error => console.error('Error fetching movies:', error));
    }

    // Call fetchMovies function to populate movie items
    fetchMovies();
});
