/* eslint-disable indent */
const movies_directors = (connection, Sequelize, movies, directors) => {
    return connection.define('movies_directors', {
        movieId: {
            type: Sequelize.INTEGER,
            reference: {
                model: movies,
                key: 'id'
            },
            primaryKey: true
        },
        directorId: {
            type: Sequelize.INTEGER,
            reference: {
                model: directors,
                key: 'id'
            },
            primaryKey: true
        },
    }, {
        paranoid: true
    })
}

module.exports = movies_directors