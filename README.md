# gulp-favicons

[![npm version](https://badge.fury.io/js/gulp-favicons.svg)](https://www.npmjs.com/package/gulp-favicons)
[![Build Status](https://secure.travis-ci.org/rejas/gulp-favicons.png?branch=master)](https://travis-ci.org/rejas/gulp-favicons)

gulp-favicons is a [gulp](https://github.com/gulpjs/gulp) plugin for  [Favicons](https://github.com/haydenbleasel/favicons).

## Usage
```javascript
var favicons = require('gulp-favicons');

gulp
  .src('./favicon.png')
  .pipe(
    favicons({
      appName: 'My App',
      appShortName: 'App',
      appDescription: 'This is my application',
      developerName: 'Hayden Bleasel',
      developerURL: 'http://haydenbleasel.com/',
      background: '#020307',
      path: 'favicons/',
      url: 'http://haydenbleasel.com/',
      display: 'standalone',
      orientation: 'portrait',
      scope: '/',
      start_url: '/?homescreen=1',
      version: 1.0,
      logging: false,
      html: 'index.html',
      pipeHTML: true,
      replace: true,
    })
  )
  .pipe(gulp.dest('./dest'));
```
