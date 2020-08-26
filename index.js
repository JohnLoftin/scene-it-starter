$(document).ready(function() {
    function renderMovies(movieArray){
        movieArray.map((movieItem) => {
            $(".movies-container").append(`
                <div class="movie">
                <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${movieItem.Poster}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${movieItem.Title}</h5>
                <p class="card-text">${movieItem.Year}</p>
                <a href="#" onclick="saveToWatchlist('${movieItem.imdbID}')" class="btn btn-primary">Add Movie</a>
                </div>
                </div>
                </div>
            `);
        });
    }
    $("#movie-input-btn").click(function(e) {
        e.preventDefault();
        renderMovies(movieData);
    });
});

function saveToWatchlist(imdbID){
    var movie = movieData.find((currentMovie) => {
        return currentMovie.imdbID === imdbID;
    });
    var watchlistJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchlistJSON);
    if(watchlist === null){
        watchlist = [];
    }
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
}


