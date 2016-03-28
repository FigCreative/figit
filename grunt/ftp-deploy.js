/* create .ftppass file with the details in it.
{
  "key1": {
    "username": "username1",
    "password": "password1"
  }
}
*/
module.exports = {
  build: {
    auth: {
      host: 'figdigital.co.uk',
      port: 21,
      authKey: 'key1'
    },
    src: 'wordpress/theme/figit-theme',
    dest: 'public_html/wp-content/themes/',
    exclusions: ['wordpress/theme/figit-theme/**/.DS_Store']
  }
};