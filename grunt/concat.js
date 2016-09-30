module.exports = {
  options: {
    separator: ';',
  },
  dist: {
    src: ['<%= project.dev %>/**/*.js'],
    dest: '<%= project.dist %>/utilities.js',
  }
}