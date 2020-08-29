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
        let searchString = $("#movie-input").val();
        let urlEncodedSearchString = encodeURIComponent(searchString);
        fetch("https://www.omdbapi.com/?apikey=8534d2a7&s=" + urlEncodedSearchString)
            .then(response => response.json())
            .then(response => {
                searchResponse = response.Search;
                renderMovies(response.Search);
            });
    });
});

function saveToWatchlist(imdbID){
    let movie = searchResponse.find((currentMovie) => {
        return currentMovie.imdbID === imdbID;
    });
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    if(watchlist === null){
        watchlist = [];
    }
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
}


