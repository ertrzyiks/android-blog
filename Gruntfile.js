module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            app: {
                files: [
                    {
                        expand: true,
                        cwd: 'node_modules/Ghostium',
                        src: '**',
                        dest: 'content/themes/ghostium/'
                    }
                ]
            }
        },

        replace: {
            hack_ghost: {
                src: [
                    'node_modules/ghost/core/server/storage/index.js'
                ],
                overwrite: true,

                replacements: [{
                    from: 'storage[storageChoice] = require(\'./\' + storageChoice);',
                    to: 'storage[storageChoice] = require(\'ghost-s3\')({' +
                        'errors: errors, ' +
                        'config: require(\'../config\').aws' +
                    '});'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-text-replace');

    grunt.registerTask('default', ['replace', 'copy']);
};
