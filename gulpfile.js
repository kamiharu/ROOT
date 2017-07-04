'use strict';

const gulp = require('gulp')
    , babel = require('gulp-babel')
	, sass = require('gulp-sass')
	, uglify = require('gulp-uglify')
	, cssmin = require('gulp-cssmin')
	, rename = require('gulp-rename')
	, path = {
		scss : './resources/css/sass/*.scss'
		, css : './resources/css/module/'
		, es2015 : './resources/js/front-app/es6/*.es6'
		, origin : './resources/js/front-app/origin'
		, js : './resources/js/front-app/'
		, jsFiles : './resources/js/front-app/origin/*.js'
	};

// task
gulp.task('sass', transformSass);
gulp.task('es2015', transformES2015);
gulp.task('watch-sass', watchSass);
gulp.task('watch-es2015', watchES2015);
gulp.task('watch-all', watchAll);
gulp.task('default', []);

// watch all task
function watchAll() {
	watchSass();
	watchES2015();
}

// transform sass
function transformSass() {
	gulp.src(path.scss)
		.pipe(sass())
		.on('error', handleError)
		//.pipe(cssmin())
        //.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(path.css));
}

// transform es2015
function transformES2015() {
	gulp.src(path.es2015)
		.pipe(babel())
		.on('error', handleError)
		//.pipe(uglify())
		.pipe(gulp.dest(path.js));
}

// watch sass
function watchSass() {
	gulp.watch(path.scss, ['sass']);
}

// watch es2015
function watchES2015() {
	gulp.watch(path.es2015, ['es2015']);
}

// error handler
function handleError(error) {
	console.log(error.toString());
	this.emit('end');
}





