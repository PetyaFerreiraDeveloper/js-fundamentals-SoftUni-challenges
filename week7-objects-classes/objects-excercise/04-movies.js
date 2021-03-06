function movies(arr) {
    let movies = [];
    for (line of arr) {
        if (line.includes('addMovie')) {
            let name = line.split('addMovie ')[1];
            movies.push({name});
        } else if (line.includes('directedBy')) {
            let [name, director] = line.split(' directedBy ');
            let movie = movies.find((obj) => obj.name === name);
            if (movie) {
                movie.director = director;
            }
        } else if (line.includes('onDate')) {
            let [name, date] = line.split(' onDate ');
            let movie = movies.find((obj) => obj.name === name);
            if (movie) {
                movie.date = date;
            }
        }
    }

    movies.forEach(movie => {
        if (movie.hasOwnProperty('name') && movie.hasOwnProperty('director') && movie.hasOwnProperty('date')) {
            let finalList = JSON.stringify(movie);
            console.log(finalList);
        }
    })

}

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo',
    'addMovie Captain America'
    ]
)