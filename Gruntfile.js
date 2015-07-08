module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['templates/**/*.handlebars'],
      tasks: ['handlebars'],
      options: {
        events: ['added', 'deleted']
      }
    },
    handlebars: {
      all: {
        files: {
          "js/templates.js": ["templates/**/*.handlebars"]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  grunt.registerTask('default', ['jshint']);

};