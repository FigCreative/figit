module.exports = {
  target: {
    files: [{
      expand: true,
      cwd: 'dev/assets/css',
      src: ['*.css', '!*.min.css'],
      dest: 'dist/assets/css',
      ext: '.min.css'
    }],
    options: {
      shorthandCompacting: false,
      roundingPrecision: -1
    }
  }
  }