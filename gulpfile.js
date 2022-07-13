const gulp = require('gulp')
const concat = require('gulp-concat')
const gulpCssmin = require('gulp-cssmin')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')

function tarefasCSS(cb) {
    return gulp.src('./src/css/**/*.css')
        .pipe(concat('libs.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'))
}

function tarefasSCSS(cb) {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(concat('libs.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'))
}

function tarefasJS() {
    return gulp.src('./src/js/**/*.js')
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/js'))
}

exports.stylesCss = tarefasCSS
exports.styles = tarefasSCSS
exports.scripts = tarefasJS