module.exports = {
            grunt: { 
                files: ['gruntfile.js', 'dev/*.html'],
                tasks: ['default'], 
            },
            sass: {
                files: ['raw/scss/*.scss'],
                tasks: ['sass']
            },
            js: {
                files: ['raw/js/*.js'],
                tasks: ['browserify', 'jshint']
            },
/*            wordpress: { 
                files: ['*.html', '*.php', '*.scss', '*.css', '*.js'],
                tasks: ['wordpress'], 
            },
*/
            options: {
      livereload: {
        host: 'localhost',
        port: 8000,}
    }
  }

