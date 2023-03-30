let numberOfFilms

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '')
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        prompt('Сколько фильмов вы уже посмотрели?', '')
    }
}

start()

personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let genre

function writeYourGenres() {
    for (i = 1; i <= 3; i++) {
        genre = prompt(`Ваш любимый жанр под номером ${i}`)
        personalMovieDB.genres[i - 1] = genre
    }
}

writeYourGenres()

function rememberMyFilms() {
    for (i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '')
    
        if (a != '' && b != '' && a != null && b != null && a.length < 50) {
            personalMovieDB.movies[a] = b
            console.log('done')
        } else {
            i--                     // уменьшаем счетчик на 1 
            console.log('error')
        }
    }
}

rememberMyFilms()

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов')
    } else if (personalMovieDB.count <= 30) {
        alert('Вы классический зритель')
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман')
    } else {
        alert('Произошла ошибка')
    
    }
}

detectPersonalLevel()

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB)
    }
}

showMyDB()
