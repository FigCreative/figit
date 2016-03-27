module.exports = {
  dist: {
    src: [ 
	    'node_modules/jquery/dist/jquery.js', 
	    'node_modules/html5shiv/dist/html5shiv.js', 
	    'node_modules/fastclick/lib/fastclick.js',
	    'node_modules/modernizr/modernizr.js',
	    'raw/js/*.js', 
	    ],
    dest: 'dev/assets/js/build.js',
  }
};