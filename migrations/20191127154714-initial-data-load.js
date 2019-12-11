'use strict'

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('movies', [

      { title: '12 Angry Men', releaseDate: '1957/04/10', ratings: 'Not Rated', runTime: '95' },
      { title: '2001: A Space Odyssey', releaseDate: '1968/4/3', ratings: 'G', runTime: '140' },
      { title: 'A Clockwork Orange', releaseDate: '1971/12/19', ratings: 'R', runTime: '137' },
      { title: 'A Night At The Opera', releaseDate: '1935/11/15', ratings: 'Passed', runTime: '90', },
      { title: 'A Streetcar Named Desire', releaseDate: '1952/3/22', ratings: 'PG', runTime: '125' },
      { title: 'All About Eve', releaseDate: '1952/10/27', ratings: 'Passed', runTime: '138' },
      { title: 'All The President\'s Men', releaseDate: '1976/4/1', ratings: 'PG', runTime: '136' },
      { title: 'American Graffiti', releaseDate: '1973/8/11', ratings: 'PG', runTime: '110', },
      { title: 'Annie Hall', releaseDate: '1977/4/20', ratings: 'PG', runTime: '94' },
      { title: 'Apocalypse Now', releaseDate: '1979/8/15', ratings: 'R', runTime: '157' },
      { title: 'Ben-Hur', releaseDate: '1960/1/29', ratings: 'G', runTime: '212' },
      { title: 'Blade Runner', releaseDate: '1982/6/25', ratings: 'R', runTime: '124' },
      { title: 'Bonnie And Clyde', releaseDate: '1967/8/13', ratings: 'R', runTime: '111' },
      { title: 'Bringing Up Baby', releaseDate: '1938/2/18', ratings: 'Not Rated', runTime: '102' },
      { title: 'Butch Cassidy And The Sundance Kid', releaseDate: '1969/10/24', ratings: 'PG', runTime: '112' },
      { title: 'Cabaret', releaseDate: '1972/2/13', ratings: 'PG', runTime: '124' },
      { title: 'Casablanca', releaseDate: '1943/1/23', ratings: 'PG', runTime: '103' },
      { title: 'Chinatown', releaseDate: '1974/6/20', ratings: 'R', runTime: '132' },
      { title: 'Citizen Kane', releaseDate: '1941/9/5', ratings: 'PG', runTime: '119' },
      { title: 'City Lights', releaseDate: '1931/3/7', ratings: 'G', runTime: '87' },
      { title: 'Do The Right Thing', releaseDate: '1989/6/30', ratings: 'R', runTime: '120', },
      { title: 'Double Indemnity', releaseDate: '1944/4/24', ratings: 'Passed', runTime: '106' },
      { title: 'Dr. Strangelove', releaseDate: '1964/1/29', ratings: 'PG', runTime: '102' },
      { title: 'Duck Soup', releaseDate: '1933/11/17', ratings: 'Not Rated', runTime: '80' },
      { title: 'E.T', releaseDate: '1982/6/11', ratings: 'PG', runTime: '120' },
      { title: 'Easy Rider', releaseDate: '1969/7/14', ratings: 'R', runTime: '95' },
      { title: 'Forrest Gump', releaseDate: '1994/7/6', ratings: 'PG-13', runTime: '142' },
      { title: 'Gone With The Wind', releaseDate: '1940/1/17', ratings: 'Passed', runTime: '220' },
      { title: 'Goodfellas', releaseDate: '1990/9/19', ratings: 'R', runTime: '146' },
      { title: 'High Noon', releaseDate: '1952/7/30', ratings: 'PG', runTime: '87' },
      { title: 'In The Heat Of The Night', releaseDate: '1967/8/2', ratings: 'Not Rated', runTime: '110' },
      { title: 'Intolerance', releaseDate: '1916/9/5', ratings: 'Passed', runTime: '197' },
      { title: 'It Happened One Night', releaseDate: '1934/2/23', ratings: 'Not Rated', runTime: '105' },
      { title: 'It\'S A Wonderful Life', releaseDate: '1947/1/7', ratings: 'PG', runTime: '132' },
      { title: 'Jaws', releaseDate: '1975/6/20', ratings: 'PG', runTime: '124' },
      { title: 'King Kong', releaseDate: '1933/4/7', ratings: 'Passed', runTime: '110' },
      { title: 'Lawrence Of Arabia', releaseDate: '1962/12/16', ratings: 'Approved', runTime: '180' },
      { title: 'M*A*S*H', releaseDate: '1970/3/1', ratings: 'R', runTime: '116', },
      { title: 'Midnight Cowboy', releaseDate: '1969/5/25', ratings: 'R', runTime: '113' },
      { title: 'Modern Times', releaseDate: '1936/2/21', ratings: 'G', runTime: '87' },
      { title: 'Mr. Smith Goes to Washington', releaseDate: '1939/10/19', ratings: 'Not Rated', runTime: '130' },
      { title: 'Nashville', releaseDate: '1975/6/11', ratings: 'R', runTime: '157' },
      { title: 'Network', releaseDate: '1976/11/14', ratings: 'R', runTime: '121' },
      { title: 'North By Northwest', releaseDate: '1959/9/26', ratings: 'Not Rated', runTime: '13' },
      { title: 'On The Waterfront', releaseDate: '1954/6/22', ratings: 'Not Rated', runTime: '107' },
      { title: 'One Flew Over The Cuckoo\'s Nest', releaseDate: '1975/11/19', ratings: 'R', runTime: '133' },
      { title: 'Platoon', releaseDate: '1986/12/19', ratings: 'R', runTime: '12' },
      { title: 'Psycho', releaseDate: '1960/9/8', ratings: 'R', runTime: '108' },
      { title: 'Pulp Fiction', releaseDate: '1994/10/14', ratings: 'R', runTime: '154' },
      { title: 'Raging Bull', releaseDate: '1980/12/19', ratings: 'R', runTime: '129' },
      { title: 'Raiders Of The Lost Ark', releaseDate: '1981/6/12', ratings: 'PG', runTime: '112' },
      { title: 'Rocky', releaseDate: '1976/12/3', ratings: 'PG', runTime: '12' },
      { title: 'Saving Private Ryan', releaseDate: '1998/7/24', ratings: 'R', runTime: '17' },
      { title: 'Schindler\'s List', releaseDate: '1993/12/15', ratings: 'R', runTime: '18' },
      { title: 'Shane', releaseDate: '1953/8/1', ratings: 'Not Rated', runTime: '118' },
      { title: 'Singin\' In The Rain', releaseDate: '1952/4/11', ratings: 'G', runTime: '103' },
      { title: 'Snow White And The Seven Dwarfs', releaseDate: '1938/2/4', ratings: 'G', runTime: '86' },
      { title: 'Some Like It Hot', releaseDate: '1959/4/14', ratings: 'Not Rated', runTime: '120' },
      { title: 'Sophie\'S Choice', releaseDate: '1982/12/10', ratings: 'R', runTime: '157' },
      { title: 'Spartacus', releaseDate: '1960/11/17', ratings: 'PG-13', runTime: '195' },
      { title: 'Star Wars', releaseDate: '1977/5/25', ratings: 'PG', runTime: '123' },
      { title: 'Sullivan\'s Travels', releaseDate: '1942/2/6', ratings: 'Not Rated', runTime: '91' },
      { title: 'Sunrise', releaseDate: '1927/11/4', ratings: 'Passed', runTime: '94' },
      { title: 'Sunset Blvd', releaseDate: '1950/9/29', ratings: 'Not Rated', runTime: '115' },
      { title: 'Swing Time', releaseDate: '1936/9/4', ratings: 'Not Rated', runTime: '103' },
      { title: 'Taxi Driver', releaseDate: '1976/2/7', ratings: 'R', runTime: '112' },
      { title: 'The African Queen', releaseDate: '1952/3/21', ratings: 'PG', runTime: '106', },
      { title: 'The Apartment', releaseDate: '1960/9/16', ratings: 'Not Rated', runTime: '125' },
      { title: 'The Best Years Of Our Lives', releaseDate: '1947/5/29', ratings: 'Approved', runTime: '172' },
      { title: 'The Bridge On The River Kwai', releaseDate: '1957/12/14', ratings: 'PG', runTime: '161' },
      { title: 'The Deer Hunter', releaseDate: '1978/12/8', ratings: 'R', runTime: '183' },
      { title: 'The French Connection', releaseDate: '1971/10/1', ratings: 'R', runTime: '104' },
      { title: 'The General', releaseDate: '1927/2/5', ratings: 'Passed', runTime: '77', },
      { title: 'The Godfather', releaseDate: '1972/3/24', ratings: 'R', runTime: '177' },
      { title: 'The Godfather Part Ii', releaseDate: '1974/12/20', ratings: 'R', runTime: '200' },
      { title: 'The Gold Rush', releaseDate: '1925/8/16', ratings: 'Not Rated', runTime: '74' },
      { title: 'The Graduate', releaseDate: '1967/12/21', ratings: 'PG', runTime: '105' },
      { title: 'The Grapes Of Wrath', releaseDate: '1940/3/15', ratings: 'Passed', runTime: '129' },
      { title: 'The Last Picture Show', releaseDate: '1971/10/1', ratings: 'R', runTime: '118' },
      { title: 'The Lord Of The Rings: The Fellowship Of The Ring', releaseDate: '2001/12/19', ratings: 'PG-13', runTime: '178' },
      { title: 'The Maltese Falcon', releaseDate: '1941/10/18', ratings: 'Not Rated', runTime: '100' },
      { title: 'The Philadelphia Story', releaseDate: '1941/1/17', ratings: 'Not Rated', runTime: '112' },
      { title: 'The Searchers', releaseDate: '1956/5/26', ratings: 'Passed', runTime: '119' },
      { title: 'The Shawshank Redemption', releaseDate: '1994/10/14', ratings: 'R', runTime: '142' },
      { title: 'The Silence Of The Lambs', releaseDate: '1991/2/14', ratings: 'R', runTime: '120' },
      { title: 'The Sixth Sense', releaseDate: '1999/8/6', ratings: 'PG-13', runTime: '107' },
      { title: 'The Sound Of Music', releaseDate: '1965/4/1', ratings: 'G', runTime: '175' },
      { title: 'The Treasure Of The Sierra Madre', releaseDate: '1948/1/24', ratings: 'Passed', runTime: '128' },
      { title: 'The Wild Bunch', releaseDate: '1969/6/18', ratings: 'R', runTime: '135' },
      { title: 'The Wizard Of Oz', releaseDate: '1939/8/25', ratings: 'PG', runTime: '101' },
      { title: 'Titanic', releaseDate: '1997/12/19', ratings: 'PG-13', runTime: '197' },
      { title: 'To Kill A Mockingbird', releaseDate: '1962/12/25', ratings: 'Not Rated', runTime: '129' },
      { title: 'Tootsie', releaseDate: '1982/12/17', ratings: 'PG', runTime: '116' },
      { title: 'Toy Story', releaseDate: '1995/11/22', ratings: 'G', runTime: '81' },
      { title: 'Unforgiven', releaseDate: '1992/8/7', ratings: 'R', runTime: '130' },
      { title: 'Vertigo', releaseDate: '1958/5/28', ratings: 'PG', runTime: '120' },
      { title: 'West Side Story', releaseDate: '1961/12/23', ratings: 'Not Rated', runTime: '155' },
      { title: 'Who\'s Afraid Of Virginia Woolf?', releaseDate: '1966/6/22', ratings: 'Not Rated', runTime: '131' },
      { title: 'Yankee Doodle Dandy', releaseDate: '1943/1/2', ratings: 'Passed', runTime: '126' }

    ])

    await queryInterface.bulkInsert('directors', [
      {
        directorsFullName: 'Sidney Lumet'
      },
      {
        directorsFullName: 'Stanley Kubrick'
      },
      {
        directorsFullName: 'Sam Wood'
      },
      {
        directorsFullName: 'Elia Kazan'
      },
      {
        directorsFullName: 'Joseph L. Mankiewicz'
      },
      {
        directorsFullName: 'Alan J. Pakula'
      },
      {
        directorsFullName: 'George Lucas'
      },
      {
        directorsFullName: 'Woody Allen'
      },
      {
        directorsFullName: 'Francis Ford Coppola'
      },
      {
        directorsFullName: 'William Wyler'
      },
      {
        directorsFullName: 'Ridley Scott'
      },
      {
        directorsFullName: 'Arthur Penn'
      },
      {
        directorsFullName: 'Howard Hawks'
      },
      {
        directorsFullName: 'George Roy Hill'
      },
      {
        directorsFullName: 'Bob Fosse'
      },
      {
        directorsFullName: 'Michael Curtiz'
      },
      {
        directorsFullName: 'Roman Polanski'
      },
      {
        directorsFullName: 'Orson Welles'
      },
      {
        directorsFullName: 'Charles Chaplin'
      },
      {
        directorsFullName: 'Spike Lee'
      },
      {
        directorsFullName: 'Billy Wilder'
      },
      {
        directorsFullName: 'Leo McCarey'
      },
      {
        directorsFullName: 'Steven Spielberg'
      },
      {
        directorsFullName: 'Dennis Hopper'
      },
      {
        directorsFullName: 'Robert Zemeckis'
      },
      {
        directorsFullName: 'Victor Fleming'
      },
      {
        directorsFullName: 'Martin Scorsese'
      },
      {
        directorsFullName: 'Fred Zinnemann'
      },
      {
        directorsFullName: 'Norman Jewison'
      },
      {
        directorsFullName: 'D. W. Griffith'
      },
      {
        directorsFullName: 'Frank Capra'
      },
      {
        directorsFullName: 'Merian C. Cooper'
      },
      {
        directorsFullName: 'David Lean'
      },
      {
        directorsFullName: 'Robert Altman'
      },
      {
        directorsFullName: 'John Schlesinger'
      },
      {
        directorsFullName: 'Alfred Hitchcock'
      },
      {
        directorsFullName: 'Milos Forman'
      },
      {
        directorsFullName: 'Oliver Stone'
      },
      {
        directorsFullName: 'Quentin Tarantino'
      },
      {
        directorsFullName: 'John G. Avildsen'
      },
      {
        directorsFullName: 'George Stevens'
      },
      {
        directorsFullName: 'Gene Kelly'
      },
      {
        directorsFullName: 'William Cottrell'
      },
      {
        directorsFullName: 'Preston Sturges'
      },
      {
        directorsFullName: 'F.W. Murnau'
      },
      {
        directorsFullName: 'John Huston'
      },
      {
        directorsFullName: 'Michael Cimino'
      },
      {
        directorsFullName: 'William Friedkin'
      },
      {
        directorsFullName: 'Buster Keaton'
      },
      {
        directorsFullName: 'Mike Nichols'
      },
      {
        directorsFullName: 'John Ford'
      },
      {
        directorsFullName: 'Peter Bogdanovich'
      },
      {
        directorsFullName: 'Peter Jackson'
      },
      {
        directorsFullName: 'George Cukor'
      },
      {
        directorsFullName: 'Frank Darabont'
      },
      {
        directorsFullName: 'Jonathan Demme'
      },
      {
        directorsFullName: 'M. Night Shyamalan'
      },
      {
        directorsFullName: 'Robert Wise'
      },
      {
        directorsFullName: 'Sam Peckinpah'
      },
      {
        directorsFullName: 'James Cameron'
      },
      {
        directorsFullName: 'Robert Mulligan'
      },
      {
        directorsFullName: 'Sydney Pollack'
      },
      {
        directorsFullName: 'John Lasseter'
      },
      {
        directorsFullName: 'Clint Eastwood'
      },
      {
        directorsFullName: 'Chester Franklin'
      },
      {
        directorsFullName: 'James Fitzpatrick'
      },
      {
        directorsFullName: 'Ernest B. Schoedsack'
      },
      {
        directorsFullName: 'Stanley Donen'
      },
      {
        directorsFullName: 'David Hand'
      },
      {
        directorsFullName: 'Wilfred Jackson'
      },
      {
        directorsFullName: 'Larry Morey'
      },
      {
        directorsFullName: 'Perce Pearce'
      },
      {
        directorsFullName: 'Ben Sharpsteen'
      },
      {
        directorsFullName: 'Anthony Mann'
      },
      {
        directorsFullName: 'Clyde Bruckman'
      },
      {
        directorsFullName: 'King Vidor'
      },
      {
        directorsFullName: 'Jerome Robbins'
      },
    ])

    await queryInterface.bulkInsert('genres', [{
      genresName: 'Drama'
    },
    {
      genresName: 'Science fiction'
    },
    {
      genresName: 'Comedy'
    },
    {
      genresName: 'Romantic comedy'
    },
    {
      genresName: 'Epic'
    },
    {
      genresName: 'Biography'
    },
    {
      genresName: 'Screwball comedy'
    },
    {
      genresName: 'Comedy-drama'
    },
    {
      genresName: 'Romance'
    },
    {
      genresName: 'Mystery'
    },
    {
      genresName: 'Film noir'
    },
    {
      genresName: 'Black comedy'
    },
    {
      genresName: 'Fantasy'
    },
    {
      genresName: 'Western'
    },
    {
      genresName: 'Adventure'
    },
    {
      genresName: 'Horror'
    },
    {
      genresName: 'Musical comedy'
    },
    {
      genresName: 'Musical'
    },
    {
      genresName: 'Thriller'
    },
    ])

    await queryInterface.bulkInsert('movies_genres', [{
      movieId: 1,
      genreId: 1
    },
    {
      movieId: 2,
      genreId: 2
    },
    {
      movieId: 3,
      genreId: 1
    },
    {
      movieId: 3,
      genreId: 13
    },
    {
      movieId: 4,
      genreId: 3
    },
    {
      movieId: 5,
      genreId: 1
    },
    {
      movieId: 6,
      genreId: 1
    },
    {
      movieId: 7,
      genreId: 1
    },
    {
      movieId: 8,
      genreId: 3
    },
    {
      movieId: 9,
      genreId: 4
    },
    {
      movieId: 10,
      genreId: 1
    },
    {
      movieId: 11,
      genreId: 5
    },
    {
      movieId: 12,
      genreId: 2
    },
    {
      movieId: 13,
      genreId: 6
    },
    {
      movieId: 13,
      genreId: 1
    },
    {
      movieId: 14,
      genreId: 7
    },
    {
      movieId: 15,
      genreId: 8
    },
    {
      movieId: 15,
      genreId: 14
    },
    {
      movieId: 16,
      genreId: 1
    },
    {
      movieId: 16,
      genreId: 18
    },
    {
      movieId: 17,
      genreId: 9
    },
    {
      movieId: 18,
      genreId: 10
    },
    {
      movieId: 18,
      genreId: 9
    },
    {
      movieId: 19,
      genreId: 1
    },
    {
      movieId: 20,
      genreId: 8
    },
    {
      movieId: 21,
      genreId: 1
    },
    {
      movieId: 22,
      genreId: 11
    },
    {
      movieId: 23,
      genreId: 12
    },
    {
      movieId: 24,
      genreId: 3
    },
    {
      movieId: 25,
      genreId: 13
    },
    {
      movieId: 25,
      genreId: 2
    },
    {
      movieId: 26,
      genreId: 1
    },
    {
      movieId: 27,
      genreId: 8
    },
    {
      movieId: 28,
      genreId: 9
    },
    {
      movieId: 29,
      genreId: 1
    },
    {
      movieId: 30,
      genreId: 14
    },
    {
      movieId: 31,
      genreId: 1
    },
    {
      movieId: 32,
      genreId: 1
    },
    {
      movieId: 33,
      genreId: 7
    },
    {
      movieId: 34,
      genreId: 8
    },
    {
      movieId: 34,
      genreId: 13
    },
    {
      movieId: 35,
      genreId: 1
    },
    {
      movieId: 36,
      genreId: 15
    },
    {
      movieId: 36,
      genreId: 16
    },
    {
      movieId: 37,
      genreId: 15
    },
    {
      movieId: 37,
      genreId: 6
    },
    {
      movieId: 38,
      genreId: 3
    },
    {
      movieId: 39,
      genreId: 1
    },
    {
      movieId: 40,
      genreId: 3
    },
    {
      movieId: 41,
      genreId: 8
    },
    {
      movieId: 42,
      genreId: 8
    },
    {
      movieId: 42,
      genreId: 18
    },
    {
      movieId: 43,
      genreId: 8
    },
    {
      movieId: 44,
      genreId: 1
    },
    {
      movieId: 45,
      genreId: 1
    },
    {
      movieId: 46,
      genreId: 1
    },
    {
      movieId: 47,
      genreId: 1
    },
    {
      movieId: 48,
      genreId: 16
    },
    {
      movieId: 48,
      genreId: 10
    },
    {
      movieId: 48,
      genreId: 19
    },
    {
      movieId: 49,
      genreId: 8
    },
    {
      movieId: 50,
      genreId: 6
    },
    {
      movieId: 51,
      genreId: 15
    },
    {
      movieId: 52,
      genreId: 10
    },
    {
      movieId: 53,
      genreId: 1
    },
    {
      movieId: 54,
      genreId: 1
    },
    {
      movieId: 55,
      genreId: 1
    },
    {
      movieId: 56,
      genreId: 14
    },
    {
      movieId: 57,
      genreId: 17
    },
    {
      movieId: 58,
      genreId: 18
    },
    {
      movieId: 59,
      genreId: 3
    },
    {
      movieId: 60,
      genreId: 1
    },
    {
      movieId: 61,
      genreId: 5
    },
    {
      movieId: 62,
      genreId: 15
    },
    {
      movieId: 62,
      genreId: 2
    },
    {
      movieId: 63,
      genreId: 8
    },
    {
      movieId: 64,
      genreId: 1
    },
    {
      movieId: 64,
      genreId: 9
    },
    {
      movieId: 65,
      genreId: 1
    },
    {
      movieId: 66,
      genreId: 18
    },
    {
      movieId: 66,
      genreId: 4
    },
    {
      movieId: 67,
      genreId: 1
    },
    {
      movieId: 68,
      genreId: 9
    },
    {
      movieId: 69,
      genreId: 8
    },
    {
      movieId: 70,
      genreId: 1
    },
    {
      movieId: 71,
      genreId: 1
    },
    {
      movieId: 72,
      genreId: 1
    },
    {
      movieId: 73,
      genreId: 1
    },
    {
      movieId: 74,
      genreId: 3
    },
    {
      movieId: 75,
      genreId: 1
    },
    {
      movieId: 76,
      genreId: 1
    },
    {
      movieId: 77,
      genreId: 8
    },
    {
      movieId: 78,
      genreId: 8
    },
    {
      movieId: 79,
      genreId: 1
    },
    {
      movieId: 80,
      genreId: 1
    },
    {
      movieId: 81,
      genreId: 15
    },
    {
      movieId: 81,
      genreId: 1
    },
    {
      movieId: 81,
      genreId: 13
    },
    {
      movieId: 82,
      genreId: 1
    },
    {
      movieId: 83,
      genreId: 4
    },
    {
      movieId: 84,
      genreId: 14
    },
    {
      movieId: 85,
      genreId: 1
    },
    {
      movieId: 86,
      genreId: 1
    },
    {
      movieId: 87,
      genreId: 1
    },
    {
      movieId: 87,
      genreId: 10
    },
    {
      movieId: 87,
      genreId: 19
    },
    {
      movieId: 88,
      genreId: 18
    },
    {
      movieId: 88,
      genreId: 1
    },
    {
      movieId: 89,
      genreId: 1
    },
    {
      movieId: 89,
      genreId: 15
    },
    {
      movieId: 90,
      genreId: 14
    },
    {
      movieId: 91,
      genreId: 13
    },
    {
      movieId: 91,
      genreId: 18
    },
    {
      movieId: 92,
      genreId: 1
    },
    {
      movieId: 92,
      genreId: 9
    },
    {
      movieId: 93,
      genreId: 1
    },
    {
      movieId: 94,
      genreId: 8
    },
    {
      movieId: 94,
      genreId: 9
    },
    {
      movieId: 95,
      genreId: 3
    },
    {
      movieId: 96,
      genreId: 14
    },
    {
      movieId: 97,
      genreId: 9
    },
    {
      movieId: 98,
      genreId: 1
    },
    {
      movieId: 98,
      genreId: 18
    },
    {
      movieId: 99,
      genreId: 1
    },
    {
      movieId: 100,
      genreId: 6
    },
    {
      movieId: 100,
      genreId: 18
    }])

    return queryInterface.bulkInsert('movies_directors', [{
      movieId: 1,
      directorId: 1
    },
    {
      movieId: 2,
      directorId: 2
    },
    {
      movieId: 3,
      directorId: 2
    },
    {
      movieId: 4,
      directorId: 3
    },
    {
      movieId: 5,
      directorId: 4
    },
    {
      movieId: 6,
      directorId: 5
    },
    {
      movieId: 7,
      directorId: 6
    },
    {
      movieId: 8,
      directorId: 7
    },
    {
      movieId: 9,
      directorId: 8
    },
    {
      movieId: 10,
      directorId: 9
    },
    {
      movieId: 11,
      directorId: 10
    },
    {
      movieId: 12,
      directorId: 11
    },
    {
      movieId: 13,
      directorId: 12
    },
    {
      movieId: 14,
      directorId: 13
    },
    {
      movieId: 15,
      directorId: 14
    },
    {
      movieId: 16,
      directorId: 15
    },
    {
      movieId: 17,
      directorId: 16
    },
    {
      movieId: 18,
      directorId: 17
    },
    {
      movieId: 19,
      directorId: 18
    },
    {
      movieId: 20,
      directorId: 19
    },
    {
      movieId: 21,
      directorId: 20
    },
    {
      movieId: 22,
      directorId: 21
    },
    {
      movieId: 23,
      directorId: 2
    },
    {
      movieId: 24,
      directorId: 22
    },
    {
      movieId: 25,
      directorId: 23
    },
    {
      movieId: 26,
      directorId: 24
    },
    {
      movieId: 27,
      directorId: 25
    },
    {
      movieId: 28,
      directorId: 26
    },
    {
      movieId: 28,
      directorId: 3
    },
    {
      movieId: 28,
      directorId: 27
    },
    {
      movieId: 28,
      directorId: 28
    },
    {
      movieId: 28,
      directorId: 29
    },
    {
      movieId: 29,
      directorId: 30
    },
    {
      movieId: 30,
      directorId: 31
    },
    {
      movieId: 31,
      directorId: 32
    },
    {
      movieId: 32,
      directorId: 33
    },
    {
      movieId: 33,
      directorId: 34
    },
    {
      movieId: 34,
      directorId: 34
    },
    {
      movieId: 35,
      directorId: 23
    },
    {
      movieId: 36,
      directorId: 35
    },
    {
      movieId: 36,
      directorId: 36
    },
    {
      movieId: 37,
      directorId: 37
    },
    {
      movieId: 38,
      directorId: 38
    },
    {
      movieId: 39,
      directorId: 39
    },
    {
      movieId: 40,
      directorId: 19
    },
    {
      movieId: 41,
      directorId: 34
    },
    {
      movieId: 42,
      directorId: 38
    },
    {
      movieId: 43,
      directorId: 1
    },
    {
      movieId: 44,
      directorId: 40
    },
    {
      movieId: 45,
      directorId: 4
    },
    {
      movieId: 46,
      directorId: 41
    },
    {
      movieId: 47,
      directorId: 42
    },
    {
      movieId: 48,
      directorId: 40
    },
    {
      movieId: 49,
      directorId: 43
    },
    {
      movieId: 50,
      directorId: 30
    },
    {
      movieId: 51,
      directorId: 23
    },
    {
      movieId: 52,
      directorId: 40
    },
    {
      movieId: 53,
      directorId: 44
    },
    {
      movieId: 54,
      directorId: 23
    },
    {
      movieId: 55,
      directorId: 23
    },
    {
      movieId: 56,
      directorId: 45
    },
    {
      movieId: 57,
      directorId: 46
    },
    {
      movieId: 57,
      directorId: 47
    },
    {
      movieId: 58,
      directorId: 48
    },
    {
      movieId: 58,
      directorId: 49
    },
    {
      movieId: 58,
      directorId: 50
    },
    {
      movieId: 58,
      directorId: 51
    },
    {
      movieId: 58,
      directorId: 52
    },
    {
      movieId: 58,
      directorId: 53
    },
    {
      movieId: 59,
      directorId: 21
    },
    {
      movieId: 60,
      directorId: 6
    },
    {
      movieId: 61,
      directorId: 2
    },
    {
      movieId: 61,
      directorId: 54
    },
    {
      movieId: 62,
      directorId: 7
    },
    {
      movieId: 63,
      directorId: 55
    },
    {
      movieId: 64,
      directorId: 56
    },
    {
      movieId: 65,
      directorId: 21
    },
    {
      movieId: 66,
      directorId: 45
    },
    {
      movieId: 67,
      directorId: 30
    },
    {
      movieId: 68,
      directorId: 57
    },
    {
      movieId: 69,
      directorId: 21
    },
    {
      movieId: 70,
      directorId: 10
    },
    {
      movieId: 71,
      directorId: 37
    },
    {
      movieId: 72,
      directorId: 58
    },
    {
      movieId: 73,
      directorId: 59
    },
    {
      movieId: 74,
      directorId: 60
    },
    {
      movieId: 74,
      directorId: 61
    },
    {
      movieId: 75,
      directorId: 9
    },
    {
      movieId: 76,
      directorId: 9
    },
    {
      movieId: 77,
      directorId: 19
    },
    {
      movieId: 78,
      directorId: 62
    },
    {
      movieId: 79,
      directorId: 63
    },
    {
      movieId: 80,
      directorId: 64
    },
    {
      movieId: 81,
      directorId: 65
    },
    {
      movieId: 82,
      directorId: 57
    },
    {
      movieId: 83,
      directorId: 27
    },
    {
      movieId: 84,
      directorId: 63
    },
    {
      movieId: 85,
      directorId: 66
    },
    {
      movieId: 86,
      directorId: 67
    },
    {
      movieId: 87,
      directorId: 68
    },
    {
      movieId: 88,
      directorId: 69
    },
    {
      movieId: 89,
      directorId: 57
    },
    {
      movieId: 90,
      directorId: 70
    },
    {
      movieId: 91,
      directorId: 26
    },
    {
      movieId: 91,
      directorId: 71
    },
    {
      movieId: 92,
      directorId: 72
    },
    {
      movieId: 93,
      directorId: 73
    },
    {
      movieId: 94,
      directorId: 74
    },
    {
      movieId: 95,
      directorId: 75
    },
    {
      movieId: 96,
      directorId: 76
    },
    {
      movieId: 97,
      directorId: 40
    },
    {
      movieId: 98,
      directorId: 69
    },
    {
      movieId: 98,
      directorId: 77
    },
    {
      movieId: 99,
      directorId: 62
    },
    {
      movieId: 100,
      directorId: 16
    },
    ])
  },

  down: async (queryInterface) => {

    await queryInterface.bulkDelete('movies', null, {})
    await queryInterface.bulkDelete('directors', null, {})
    await queryInterface.bulkDelete('genres', null, {})
    await queryInterface.bulkDelete('movies_genres', null, {})
    return await queryInterface.bulkDelete('movies_directors', null, {})
  }
}
