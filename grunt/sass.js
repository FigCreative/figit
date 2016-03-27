module.exports = {
  dist: {                            // Target
      options: {                       // Target options
        style: 'expanded',
        loadPath: ['node_modules/foundation/scss']
      },
      files: {                         // Dictionary of files
        'dev/assets/css/style.css': 'raw/scss/style.scss'
      }
    }
};