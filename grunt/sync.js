module.exports = {
  main: {
    files: [
    	{cwd: 'dist/assets/js', src: ['**'], dest: 'wordpress/theme/figit-theme/assets/js/'},
    	{cwd: 'dist/assets/css', src: ['**'], dest: 'wordpress/theme/figit-theme/assets/css/'},
    	{cwd: 'dist/assets/img', src: ['**'], dest: 'wordpress/theme/figit-theme/assets/images/'},
    ]
}
};