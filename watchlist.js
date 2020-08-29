$(document).ready(function() {
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchList = JSON.parse(watchlistJSON);
    function renderWatchList(watchArray) {
        watchArray.map((watchlistItem) => {
            $(".movies-container").append(`
                <div class="movie">
                <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${watchlistItem.Poster}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${watchlistItem.Title}</h5>
                <p class="card-text">${watchlistItem.Year}</p>
                <a href="#" onclick="removeFromWatchlist('${watchlistItem.imdbID}')" class="btn btn-primary">Remove</a>
                </div>
                </div>
                </div>
            `);
        });
    }
    renderWatchList(watchList);
});

function removeFromWatchlist(imdbID){
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    let movie = watchlist.find((currentMovie) => {
        return currentMovie.imdbID === imdbID;
    });
    console.log(movie);
    console.log(watchlist);
    //watchlist.filter(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
}