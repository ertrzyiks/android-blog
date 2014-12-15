var path = require('path'),
    config;

config = {
    production: {
        url: 'https://fierce-thicket-1834.herokuapp.com/',

        mail: {},

        database: {
            client: 'sqlite3',
                connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },

        server: {
            host: 'fierce-thicket-1834.herokuapp.com',
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
