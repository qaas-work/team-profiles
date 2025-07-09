'use strict';

var gulp          = require('gulp');
var sass          = require('gulp-sass')(require('sass'));
var browserSync   = require('browser-sync').create();
var sourcemaps    = require('gulp-sourcemaps');
var autoprefixer  = require('gulp-autoprefixer');
var rename        = require('gulp-rename');
var rtlcss        = require('gulp-rtlcss');
var gulpif        = require('gulp-if');
var htmlmin       = require('gulp-htmlmin'); // Added import

var enableRTL     = false; // TODO: RTL CSS will be only generated if this is TRUE

var Paths = {
    TEMPLATE: './template',
    SCSS: 'template/assets/scss/**/*.scss',
    CSS: 'template/assets/css/',
    JS: 'template/**/*.js',
    HTML: 'template/**/*.html'
}

// Compile sass into CSS
gulp.task('sass', function() {
    return gulp.src(Paths.SCSS)
      .pipe(sourcemaps.init())
      .pipe(sass.sync({
          outputStyle: 'expanded'
      }).on('error', sass.logError)) 
      .pipe(autoprefixer({
          overrideBrowserslist: ['last 2 versions']
      }))
      .pipe(gulp.dest(Paths.CSS))
      .pipe(gulpif(enableRTL, rtlcss()))
      .pipe(gulpif(enableRTL, rename({ suffix: '-rtl' })))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist'))
      .pipe(browserSync.stream());
});

// Watching files
// gulp.task('watch', function(done) {
//     gulp.watch(Paths.SCSS).on('change', gulp.series('sass', browserSync.reload));
//     gulp.watch(Paths.HTML).on('change', browserSync.reload);
//     gulp.watch(Paths.JS).on('change', browserSync.reload);
//     done();
// });

// Minify HTML
gulp.task('html', function html() {
    return gulp.src(Paths.HTML)
      .pipe(htmlmin({ collapseWhitespace: true })) // Fixed htmlmin usage
      .pipe(gulp.dest('dist'));
});

// Task to copy static assets
gulp.task('copy-assets', function() {
    return gulp.src(['template/assets/**/*', '!template/assets/scss/**/*'] , {encoding: false}) // Exclude SCSS files
        .pipe(gulp.dest('dist/assets'));
});

gulp.task('default', gulp.series('sass'));
gulp.task('headless', gulp.series('sass', 'html' , 'copy-assets'));