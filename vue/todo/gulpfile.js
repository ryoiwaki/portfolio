'use strict';

var gulp = require('gulp');
var sass = require('gulp-dart-sass');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var sassGlob = require('gulp-sass-glob');
var browserSync = require('browser-sync');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
/* var header = require('gulp-header'); */
var lec = require('gulp-line-ending-corrector');

// scssのコンパイル
gulp.task('sass', function() {
  return gulp.src('src/scss/*.scss')
  .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
  .pipe(sourcemaps.init())
  .pipe(sassGlob())
  .pipe(sass().on('error', sass.logError))
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(postcss([autoprefixer()]))
  .pipe(lec({verbose: false, eolc: 'CRLF', encoding:'utf8'}))
  .pipe(gulp.dest('css/'));
});

// 保存時のリロード
gulp.task('browser-sync', function(done) {
  browserSync.init({
  server: {
    baseDir : './',
    index: "index.html",
    https: true,
  }
  });
  browserSync.reload();
  done();
});

// 自動監視
gulp.task('watch', function() {
  gulp.watch('src/scss/*.scss', gulp.task('sass'));
});

gulp.task('default', gulp.series(gulp.parallel('browser-sync', 'watch')));
