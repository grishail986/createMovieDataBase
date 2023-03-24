let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '')

personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

// let a = prompt('Один из последних просмотренных фильмов?', '')
// let b = prompt('На сколько оцените его?', '')
// let c = prompt('Один из последних просмотренных фильмов?', '')
// let d = prompt('На сколько оцентите его?', '')
let a
let b

for (i = 0; i < 2; i++) {
    a = prompt('Один из последних просмотренных фильмов?', '')
    b = prompt('На сколько оцените его?', '')
    personalMovieDB.movies[a] = b
}

personalMovieDB.movies[a] = b
// personalMovieDB.movies[c] = d

console.log(personalMovieDB)
