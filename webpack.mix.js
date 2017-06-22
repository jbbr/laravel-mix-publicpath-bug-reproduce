const mix = require('laravel-mix')

mix
  .setPublicPath('./htdocs/')
  .js('./js/main.js', 'js')

