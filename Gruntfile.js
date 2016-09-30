'use strict';

module.exports = function (grunt) {
  require('time-grunt')(grunt);

  // Configurable paths
  var projectConfig = {
    dev: 'src',
    dist: 'dist'
  };

  require('load-grunt-config')(grunt, {
    data: {
      project: projectConfig,
      pkg: grunt.file.readJSON('package.json')
    }
  });

  grunt.registerTask('build', [
    'clean:dist',
    'concat',
  ]);
  grunt.registerTask('default', ['build']);

};