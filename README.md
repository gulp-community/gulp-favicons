# gulp-favicons

[![npm version](https://badge.fury.io/js/gulp-favicons.svg)](https://www.npmjs.com/package/gulp-favicons)
[![Automated tests](https://github.com/gulp-community/gulp-favicons/actions/workflows/run-tests.yml/badge.svg)](https://github.com/gulp-community/gulp-favicons/actions/workflows/run-tests.yml)

gulp-favicons is a [gulp](https://github.com/gulpjs/gulp) plugin for [Favicons](https://github.com/itgalaxy/favicons).

## Usage
```javascript
import gulp from 'gulp';
import favicons from 'gulp-favicons';

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
      html: 'index.html',
      pipeHTML: true,
    })
  )
  .pipe(gulp.dest('./dest'));
```
