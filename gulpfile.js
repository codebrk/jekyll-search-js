'use strict';

const gulp = require('gulp'),
    rename = require('gulp-rename'),
    minify = require('gulp-uglify'),
    maps = require('gulp-sourcemaps');

gulp.task("minifyJs", function() {
    return gulp.src([
        "src/jekyll-search.js"
    ])
        .pipe(minify())
        .pipe(rename("jekyll-search.min.js"))
        .pipe(gulp.dest("dist"));
});

gulp.task("default", function () {
    gulp.start("minifyJs");
});