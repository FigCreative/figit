module.exports = {
    dist: {
      files: [
          {
          expand: true,     
          cwd: 'dev/',   
          src: ['**/*.html'],
          dest: 'dist/',  
          ext: '.html'
        },
        ],
    }
};