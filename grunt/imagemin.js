module.exports = {
  options: {
    cache: false
  },

  dist: {
    files: [{
      expand: true,
      cwd: 'dev/assets/img',
      src: ['*.{png,jpg,gif,svg}'],
      dest: 'dist/assets/img'
    }]
  }
};