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
    if (a == '' || a == null || a.length > 50) {
        prompt('Один из последних просмотренных фильмов?', '')
    }
    b = prompt('На сколько оцените его?', '')
    if (b == '' || b == null || b.length > 50) {
        prompt('На сколько оцените его?', '')
    }
    personalMovieDB.movies[a] = b
}

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов')
} else if (personalMovieDB.count <= 30) {
    alert('Вы классический зритель')
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман')
} else {
    alert('Произошла ошибка')

}

// i = 0 

// while (i < 2) {
//     a = prompt('Один из последних просмотренных фильмов?', '')
//     b = prompt('На сколько оцените его?', '')
//     personalMovieDB.movies[a] = b
//     i = i + 1
// }

// personalMovieDB.movies[a] = b
// personalMovieDB.movies[c] = d

console.log(personalMovieDB)
