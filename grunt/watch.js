module.exports = {
  grunt: { 
                files: ['gruntfile.js'],
                tasks: ['default'], 
            },
            sass: {
                files: ['raw/scss/*.scss'],
                tasks: ['sass']
            },
            js: {
                files: ['raw/js/*.js'],
                tasks: ['concat', 'jshint']
            },
             js: {
                files: ['dev/*.html'],
                tasks: ['sass']
            },
            options: {
      livereload: {
        host: 'localhost',
        port: 8000,}
    }
  }

