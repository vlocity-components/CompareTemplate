module.exports = function(grunt) {
    grunt.initConfig({
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer-core')({
                        browsers: 'last 8 versions'
                    }),
                    require('csswring')
                ]
            },
            dist: {
                src: 'css/**/*.css'
            }
        },

        sass: {
            all: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/CompareTemplate.css': 'sass/CompareTemplate.scss',
                    'css/hphcCompareTemplate.css': 'sass/hphcCompareTemplate.scss',
                    'css/SelectableList.css': 'sass/SelectableList.scss'
                }
            }
        },

        watch: {
            sass: {
                files: ['sass/**/*.scss'],
                tasks: ['sass:all', 'postcss']
            },
            livereload: {
                files: ['css/**/*.css', '*.html', 'js/**/*.js'],
                options: {
                    livereload: true
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 8000,
                    base: '.'
                }
            }
        }

    });

    // Automatic Dependency Loading
    require('load-grunt-tasks')(grunt);

    // Default Grunt Task, used during main development.
    grunt.registerTask('default', ['connect:server', 'watch']);
}
