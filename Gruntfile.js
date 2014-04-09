'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    app: grunt.file.readJSON('bower.json'),
    banner: '/*! cordova-angular-social-networks v<%= app.version %> by Matthieu COLLE - ' + 'https://github.com/raiseandfall/raiseandfall/cordova-angular-social-networks */\n',

    clean: {
      dist: {
        src: ['build/*.*']
      }
    },

    uglify: {
      js: {
        src: ['build/build.js'],
        dest: 'build/build.min.js',
        options: {
          banner: '<%= banner %>'
        }
      }
    },

    concat: {
      js: {
        src: [
          'src/*.js'
        ],
        dest: 'build/build.js'
      }
    },

    watch: {
      options: {
        livereload: true
      },
      karma: {
        files: ['src/*.js', 'test/**/*.js'],
        tasks: ['karma:unit:run']
      }
    },

    connect: {
      server: {
        options: {
          hostname: '*',
          port: 8000,
          base: './'
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'src/*.js'
      ]
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    }
  });


  grunt.registerTask('js', ['jshint', 'concat']);

  grunt.registerTask('dev', ['connect:server', 'watch']);
  grunt.registerTask('test', ['karma']);

  grunt.registerTask('build', ['clean:dist', 'js', 'uglify']);
};
