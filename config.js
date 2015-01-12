var path = require('path'),
    config;

config = {
    production: {
        url: 'https://fierce-thicket-1834.herokuapp.com/',

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

        paths:{
            contentPath: path.join(__dirname, '/content/')
        },

        aws: {
            accessKeyId: process.env.S3_ACCESS_KEY_ID,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
            bucket: 'upload-android-blog',
            region: 'eu-west-1'
        }
    },
    development: {
        url: 'http://10.168.20.26:2368',

        mail: {},

        fileStorage: false,

        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },

        server: {
            host: '10.168.20.26',
            port: '2368'
        },

        paths:{
            contentPath: path.join(__dirname, '/content/')
        }
    },
    home: {
        url: 'http://192.168.0.17:2368',

        mail: {},

        fileStorage: false,

        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },

        server: {
            host: '0.0.0.0',
            port: '2368'
        },

        paths:{
            contentPath: path.join(__dirname, '/content/')
        }
    }
};

module.exports = config;

