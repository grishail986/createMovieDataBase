let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '')

personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let a
let b

for (i = 0; i < 2; i++) {
    a = prompt('Один из последних просмотренных фильмов?', '')
    b = prompt('На сколько оцените его?', '')

    if (a != '' && b != '' && a != null && b != null && a.length < 50) {
        personalMovieDB.movies[a] = b
        console.log('done')
    } else {
        i--                     // уменьшаем счетчик на 1 
        console.log('error')
    }
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

console.log(personalMovieDB)
