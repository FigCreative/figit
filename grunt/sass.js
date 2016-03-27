module.exports = {
  dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: {                         // Dictionary of files
        'dev/assets/css/style.css': 'raw/scss/style.scss'
      }
    }
};