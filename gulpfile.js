const { series, parallel } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const gulpCssmin = require('gulp-cssmin')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
// const image = require('gulp-image')
const stripJs = require('gulp-strip-comments')
const stripCss = require('gulp-strip-css-comments')
const htmlmin = require('gulp-htmlmin')

function tarefasCSS(cb) {
    gulp.src('./src/css/**/*.css')
        .pipe(concat('libs.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'))

    return cb()
}

function tarefasSCSS(cb) {
    gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './src/scss/style.scss'
    ])
        // './src/scss/**/*.scss',
        .pipe(concat('libs.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'))
    
    return cb()
}

function tarefasJS(callback) {
    gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './src/js/form.js'
    ])
        // './src/js/**/*.js'
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/js'))
    
    return callback()
}

function tarefasImages() {
    return gulp.src('./src/images/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest('./dist/images'))
}

// POC - Proof of Concept
function tarefasHTML(callback) {
    gulp.src('./src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))

    return callback()
}

exports.stylesCss = tarefasCSS
exports.styles = tarefasSCSS
exports.scripts = tarefasJS
exports.image = tarefasImages
exports.html = tarefasHTML

exports.default = parallel(tarefasHTML, tarefasSCSS, tarefasJS)