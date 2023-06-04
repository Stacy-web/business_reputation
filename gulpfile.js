'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const { series, parallel, watch } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const webpack = require('gulp-webpack');
const rename = require('gulp-rename');

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

function reload(done) {
    browserSync.reload();
    done();
}

function serve() {
    browserSync.init({
        server: {
            baseDir: './build'
        }
    });

    watch(['build/**/*']).on('change', reload);
}

const watcher = watch(['src/styles/**/*.scss', 'src/scripts/**/*.js']);
watcher.on('change', function(path) {
    if (path.endsWith('.scss')) {
        buildStyles();
    } else if (path.endsWith('.js')) {
        buildScripts();
    }
});

exports.serve = serve;
exports.styles = buildStyles;
exports.scripts = buildScripts;
exports.default = parallel(buildStyles, buildScripts, serve);