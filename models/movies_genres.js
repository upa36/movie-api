/* eslint-disable indent */
const movies_genres = (connection, Sequelize, movies, genres) => {
    return connection.define('movies_genres', {
        movieId: {
            type: Sequelize.INTEGER,
            reference: {
                model: movies,
                key: 'id'
            },
            primaryKey: true
        },
        genreId: {
            type: Sequelize.INTEGER,
            reference: {
                model: genres,
                key: 'id'
            },
            primaryKey: true
        },
    }, {
        paranoid: true
    })
}

module.exports = movies_genres