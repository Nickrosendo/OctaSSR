var gulp = require('gulp'),
    copy = require('gulp-copy'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    clean = require('gulp-clean'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    cleanCSS = require('gulp-clean-css'),
	inlineNg2Template = require('gulp-inline-ng2-template'),
	minify = require('gulp-minifier'),
	concat = require('gulp-concat');

gulp.task('clean-js', function() {
    return gulp.src('./assets/js/*.js')
        .pipe(clean());
});


gulp.task('copy-js', ['clean-js'], function() {
    var dirNode = './node_modules/'
		files = [
			dirNode	+ 'zone.js/dist/zone.js',
			dirNode	+ 'reflect-metadata/Reflect.js',
			dirNode	+ 'tether/dist/js/tether.js',
			dirNode	+ 'jquery/dist/jquery.js',
			dirNode	+ 'typed.js/lib/typed.js',
			dirNode	+ 'bootstrap/dist/js/bootstrap.js',
		];

    return gulp.src(files)
		.pipe(concat('third-party-bundle.octadesk.js'))
		.pipe(gulp.dest('./assets/js'));
});

gulp.task('minify-js', ['copy-js'], function() {
    return gulp.src('./assets/js/*.js')
        .pipe(minify({
			minify: true,
			minifyJS:true
		 }))
		.pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./assets/js'));
});


gulp.task('clean-css', function() {
    return gulp.src('./assets/css/*.css')
        .pipe(clean());
});

gulp.task('sass', ['clean-css'], function() {
    return gulp.src('./assets/scss/octadesk.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('minify-css', ['sass'], function() {
    return gulp.src('./assets/css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('copy-css', ['minify-css'], function() {
    var dir = './bower_components/';
    var files = [
        dir + 'tether/dist/css/tether.min.css'
    ];
    return gulp.src(files)
        .pipe(gulp.dest('./assets/css'));
});


gulp.task('clean-image', function(){

	return gulp.src('./assets/images')
		.pipe(clean());
});

gulp.task('minify-image', ['clean-image'], function(){

	return gulp.src('./assets/images-bkp/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./assets/images'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./assets/scss/**/*.scss', ['copy-css']);
});

gulp.task('html:watch', function() {
    return watch('./app/**/*.html', { ignoreInitial: false })
        .pipe(gulp.dest('./dist'));
});


gulp.task('default', [
	'copy-css',
	'html:watch',
	'sass:watch'
]);

gulp.task('bundle', ['inline-templates'], function() { });

gulp.task('inline-templates', function() {
    return gulp.src('./app/**/*.ts')
        .pipe(inlineNg2Template({ useRelativePaths: true, indent: 0, removeLineBreaks: true }))
        .pipe(gulp.dest('./dist'));
});
