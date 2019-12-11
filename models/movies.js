/* eslint-disable indent */
const movies = (connection, Sequelize) => {
    return connection.define('movies', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        title: { type: Sequelize.STRING },
        releaseDate: { type: Sequelize.DATEONLY },
        ratings: { type: Sequelize.ENUM('G', 'R', 'Passed', 'PG', 'Not Rated', 'PG-13', 'Approved') },
        runTime: { type: Sequelize.STRING },

    }, { paranoid: true })
}

module.exports = movies