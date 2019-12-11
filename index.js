const express = require('express')
const bodyParser = require('body-parser')
const models = require('./models')

const app = express()

app.get('/movies', async (request, response) => {
  const matchingmovies = await models.movies.findAll({
    include: [{ model: models.directors }, { model: models.genres }]
  })
  return response.send(matchingmovies)
})

app.get('/movies/:identifier', async (request, response) => {
  const matchingMovies = await models.movies.findOne({
    where: {
      id: request.params.identifier,
    },
    include: [{ model: models.directors }, { model: models.genres }]

  })
  if (matchingMovies) {
    return response.send(matchingMovies)
  } else {
    return response.sendStatus(404)
  }
})

app.get('/directors/:identifier', async (request, response) => {
  const matchingDirector = await models.directors.findAll({
    include: {
      model: models.movies
    },
    where: {
      id: request.params.identifier
    }
  })
  if (matchingDirector) {
    return response.send(matchingDirector)
  } else {
    return response.sendStatus(404)
  }
})

app.get('/genres/:genresName', async (request, response) => {
  const matchingGenres = await models.genres.findAll({
    include: {
      model: models.movies
    },
    where: {
      genresName: request.params.genresName
    }

  })
  if (matchingGenres) {
    return response.send(matchingGenres)
  } else {
    return response.sendStatus(404)
  }

})

app.post('/movies', bodyParser.json(), async (request, response) => {
  const { title, directors, releaseDate, ratings, runTime, genres } = request.body

  const name = directors.split(', ')
  const genreArrays = genres.split(', ')


  if (!title || !directors || !releaseDate || !ratings || !runTime || !genres) {
    response.status(400).send('The following attributes are required: title, directors, releaseDate, ratings, runTime, genres')
  } else {
    const newMovie = await models.movies.create({ title, releaseDate, ratings, runTime })
    response.status(201).send(newMovie)
    await name.forEach(async (directorsFullName) => {
      const directorId = await models.directors.findOrCreate({
        where: {
          name: directorsFullName
        }
      })
      await models.movies_directors.create({
        movieId: newMovie.id,
        directorId: directorId[0].dataValues.id
      })
      response.status(201)
    })

    await genreArrays.forEach(async (genresName) => {
      const genreId = await models.genres.findOrCreate({
        where: {
          genre: genresName
        }
      })
      await models.movies_genres.create({
        movieId: newMovie.id,
        genreId: genreId[0].dataValues.id
      })
      response.status(201)
    })
  }
})

app.all('*', (request, response) => {
  response.sendStatus(404)
})

const server = app.listen(1337, () => {
  console.log('Listening on port 1337...')
})


module.exports = server



