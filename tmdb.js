// Define your TMDb API key
const apiKey = '2051710e2b77f17652a595dbc3a52425';

// Function to fetch popular movies from TMDb API
function fetchPopularMovies() {
    // Make an AJAX request to fetch popular movies
    $.ajax({
        url: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
        method: 'GET',
        success: function(data) {
            // Process the response data
            displayMovies(data.results);
        },
        error: function(xhr, status, error) {
            console.error('Error fetching popular movies:', error);
        }
    });
}

// Function to display movies on the webpage
function displayMovies(movies) {
    // Clear existing content
    $('#top-movies-slide').empty();

    // Loop through the movies and create HTML elements to display them
    movies.forEach(movie => {
        $('#top-movies-slide').append(`
            <div class="movie-item">
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
                <div class="movie-item-content">
                    <div class="movie-item-title">${movie.title}</div>
                    <div class="movie-infos">
                        <div class="movie-info"><i class="bx bxs-star"></i>${movie.vote_average}</div>
                        <div class="movie-info"><i class="bx bxs-time"></i>${movie.runtime} mins</div>
                    </div>
                </div>
            </div>
        `);
    });

    // Initialize Owl Carousel after adding new content
    $('#top-movies-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            500: { items: 3 },
            1280: { items: 4 },
            1600: { items: 6 }
        }
    });
}

// Call the function to fetch and display popular movies when the document is ready
$(document).ready(() => {
    fetchPopularMovies();
});
