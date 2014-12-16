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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['copy']);
};
