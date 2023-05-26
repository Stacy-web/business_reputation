'use strict';

const gulp = require('gulp'),
    gp = require('gulp-load-plugins')();
    // bs = require('browser-sync').create(),
    // reload = require('browser-sync').reload;

const sass = require('gulp-sass')(require('sass'));
const { series, parallel, watch } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const iconfont = require('gulp-iconfont');
const runTimestamp = Math.round(Date.now() / 1000);

//var plugins = require('gulp-load-plugins')();
//плагины будут доступны как plugins.autoprefixer, plugins.sass и т.д.


// gulp.task('pug:build', () => {

// });

function buildPug() {
    return gulp.src('src/pug/pages/**/*.pug')
        .pipe(gp.plumber())
        .pipe(gp.pug({
            pretty: true
        }))
        .pipe(gulp.dest('build/'));
        // .pipe(reload({
        //     stream: true
        // }));
}

function buildStyles() {
    return gulp.src('src/styles/**/*.scss')
        .pipe(
            sourcemaps.init()
        )
        .pipe(
            sass(
                {
                    outputStyle: 'compressed'
                }).on('error', sass.logError)
        )
        .pipe(
            sourcemaps.write('.')
        )
        .pipe(
            gulp.dest('build/css')
        );
}

function buildScripts() {
    return gulp.src('src/scripts/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('build/js'))
}

function buildIconFonts() {
    return gulp.src(['assets/icons/**/*.svg'])
        .pipe(iconfont({
            fontName: 'iconCustomFont',
            prependUnicode: true,
            formats: ['ttf', 'eot', 'woff'],
            timestamp: runTimestamp,
        }))
        .on('glyphs', function (glyphs, options) {
            console.log(glyphs, options);
        })
        .pipe(gulp.dest('build/fonts'));
}

const watcherPug = watch(['src/pug/**/*.pug']);
watcherPug.on('change', buildPug);

const watcherStyles = watch(['src/styles/**/*.scss']);
watcherStyles.on('change', buildStyles);

const watcherScripts = watch(['src/scripts/**/*.js']);
watcherScripts.on('change', buildScripts);


// var path = {
//     build: {
//         html: 'build/',
//         js: 'build/js/',
//         css: 'build/css/',
//         img: 'build/img/',
//         fonts: 'build/fonts/'
//     },
//     src: {
//         html: 'src/html/*.html',
//         js: 'src/js/main.js',
//         css: 'src/scss/main.sass',
//         img: 'src/img/**/*.*',
//         fonts: 'src/fonts/**/*.*'
//     },
//     watch: {
//         html: 'src/html/*.html',
//         js: 'src/js/main.js',
//         css: 'src/scss/main.sass',
//         img: 'src/img/**/*.*',
//         fonts: 'src/fonts/**/*.*'
//     },
//     clean: './build'
// };

// TODO: шрифты билдядтся только при добавлении и удалении файлов

exports.styles = buildStyles;
exports.pugs = buildPug;
exports.scripts = buildScripts;
exports.icons = buildIconFonts;
exports.default = parallel(buildStyles, buildPug, buildScripts);