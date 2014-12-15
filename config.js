var path = require('path'),
    config;

config = {
    production: {
        url: 'https://fierce-thicket-1834.herokuapp.com/',

        fileStorage: false,
        mail: {},

        database: {
            client: 'postgres',
            connection: {
                host: process.env.POSTGRES_HOST,
                user: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DATABASE,
                port: '5432'
            }
        },

        server: {
            host: '0.0.0.0',
            port: process.env.PORT
        },


        contentPath: path.join(__dirname, '/content/')
    },
    development: {
        url: 'http://192.168.0.17:2368',

        mail: {},

        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },

        server: {
            host: '192.168.0.17',
            port: '2368'
        },


        contentPath: path.join(__dirname, '/content/')
    }
};

module.exports = config;

