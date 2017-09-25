var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autopf = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssimport = require('postcss-import');
var mixins = require('postcss-mixins');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssimport, mixins, cssvars, nested, autopf]))
  .on('error', function(errorInfo){
    console.log(errorInfo.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('./app/temp/styles'));
});
