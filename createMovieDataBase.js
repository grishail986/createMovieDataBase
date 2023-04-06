personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '')
        
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            prompt('Сколько фильмов вы уже посмотрели?', '')
        }
    },
    rememberMyFilms: function() {
        for (i = 0; i < 2; i++) {
            let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '')
        
            if (a != '' && b != '' && a != null && b != null && a.length < 50) {
                personalMovieDB.movies[a] = b
                console.log('done')
            } else {
                i--
                console.log('error')
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов')
        } else if (personalMovieDB.count <= 30) {
            alert('Вы классический зритель')
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман')
        } else {
            alert('Произошла ошибка')        
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB)
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true
        } else {
            personalMovieDB.privat = false
        }
    },
    writeYourGenres: function() {
        for (i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`)

            while (typeof genre == null || typeof genre == '') {
                prompt(`Ваш любимый жанр под номером ${i}`)
            }
            
            personalMovieDB.genres[i - 1] = genre
        }
        
        personalMovieDB.genres.forEach((elem, i) => {
            alert(`Любимый жанр ${i + 1} - это ${elem}`)
        })
    }
}


