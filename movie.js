class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log("Title:", casinoRoyale.title);
console.log("Studio:", casinoRoyale.studio);
console.log("Rating:", casinoRoyale.rating);
const movies = [
    new Movie("Inception", "Warner Bros.", "PG-13"),
    new Movie("Toy Story", "Pixar", "G"),
    new Movie("The Dark Knight", "Warner Bros.", "PG-13"),
    casinoRoyale,
];

const pgMovies = Movie.getPG(movies);
console.log("PG Movies:", pgMovies);