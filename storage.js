class Storage {
    static addMovieToStorage(newMovie) {
        let films = this.getMoviesFromStorage();
        films.push(newMovie);
        localStorage.setItem("films", JSON.stringify(films));
    }
    static getMoviesFromStorage() {
        let films;
        if (localStorage.getItem("films") === null) {
            films = [];
        }
        else {
            films = JSON.parse(localStorage.getItem("films"));
        }
        return films;
    }
    static deleteMovieFromStorage(filmTitle) {
        let films = this.getMoviesFromStorage();
        films.forEach(function (movie, index) {
            if (movie.title === filmTitle) {
                films.splice(index, 1);
            }
        });
        localStorage.setItem("films", JSON.stringify(films));
    }
    static clearAllMoviesFromStorage() {
        localStorage.removeItem("films");
    }
}