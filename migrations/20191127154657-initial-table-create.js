'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('movies', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      title: { type: Sequelize.STRING },
      releaseDate: { type: Sequelize.DATEONLY },
      ratings: { type: Sequelize.ENUM('G', 'R', 'Passed', 'PG', 'Not Rated', 'PG-13', 'Approved') },
      runTime: { type: Sequelize.STRING },
      createdAt: {
        type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })

    await queryInterface.createTable('directors', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      directorsFullName: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: {
        type: Sequelize.DATE
      },
    })

    await queryInterface.createTable('genres', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      genresName: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: {
        type: Sequelize.DATE
      },
    })

    await queryInterface.createTable('movies_genres', {
      movieId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'movies',
          key: 'id'
        },
        primaryKey: true
      },
      genreId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'genres',
          key: 'id'
        },
        primaryKey: true
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: {
        type: Sequelize.DATE
      },
    })

    return await queryInterface.createTable('movies_directors', {
      movieId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'movies',
          key: 'id'
        },
        primaryKey: true
      },
      directorId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'directors',
          key: 'id'
        },
        primaryKey: true
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: {
        type: Sequelize.DATE
      },
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('movies', null, {})
    await queryInterface.dropTable('directors', null, {})
    await queryInterface.dropTable('genres', null, {})
    await queryInterface.dropTable('movies_genres', null, {})
    return await queryInterface.dropTable('movies_diectors', null, {})
  }
}
