module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['browserify', 'uglify']);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            main: {
                src: [],
                dest: 'dist/tribus-hash.js',
                options: {
                    require: [
                        './index.js:tribushash',
						'buffer'
                    ]
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/tribus-hash.min.js': ['dist/tribus-hash.js']
                }
            }
        }
    });
}
