/* eslint-disable indent */
const genres = ((connection, Sequelize) => {
    return connection.define('genres', {
        id: {
            type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true
        },
        genresName: {
            type: Sequelize.STRING,
        },

    }, { paranoid: true })
})

module.exports = genres