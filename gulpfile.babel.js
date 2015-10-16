import gulp from 'gulp';
import gutil from 'gulp-util';
import bower from 'bower';
import del from 'del';
import sh from 'shelljs';
import runSequence from 'run-sequence';
import gulpLoadPlugins from 'gulp-load-plugins';
import connect from 'gulp-connect';

const $ = gulpLoadPlugins();

const paths = {
    scripts: './app/**/*.js',
    css: './app/css/**/*.css',
    templates: ['./app/**/*.html', '!./app/index.html'],
    index: ['./index.html'],
};

gulp.task('default', ['build']);

gulp.task('lint', () => {
    return gulp.src(paths.scripts)
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.eslint.failAfterError());
});

gulp.task('copy-angular', () => {
    return gulp.src('./bower_components/angular/angular.js')
        .pipe(gulp.dest('www/lib'));
});

gulp.task('copy-angular-route', () => {
    return gulp.src('./bower_components/angular-route/angular-route.js')
        .pipe(gulp.dest('www/lib'));
});

gulp.task('copy-system', () => {
    return gulp.src('./bower_components/system.js/dist/system.js')
        .pipe(gulp.dest('www/lib'));
});

gulp.task('copy-babel-polyfill', () => {
    return gulp.src('./node_modules/babel-core/browser-polyfill.min.js')
        .pipe(gulp.dest('www/lib'));
});


gulp.task('clean', () => {
    return del(['./www/**/*', '!./www/lib{,/**}']);
});


gulp.task('copy-css', () => {
    return gulp.src(paths.css)
        .pipe($.copy('www', { prefix: 1 }));
});

gulp.task('copy-templates', () => {
    return gulp.src(paths.templates)
        .pipe($.copy('www/views', { prefix: 2 }));
});

gulp.task('copy-index', () => {
    return gulp.src(paths.index)
        .pipe($.copy('www', { prefix: 2 }));
});


gulp.task('build', cb => {
    runSequence('lint', ['build-scripts', 'copy-babel-polyfill', 'copy-angular', 'copy-angular-route', 'copy-system', 'copy-index', 'copy-css', 'copy-templates'], cb);
});

gulp.task('build-scripts', () => {
    return gulp.src(paths.scripts)
        .pipe($.sourcemaps.init())
        .pipe($.babel({ modules: 'system' }))
        .pipe($.ngAnnotate())
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('www/app'));
});

gulp.task('serve', function () {
    gulp.watch([paths.scripts, paths.templates, paths.index], ['build']);
    connect.server({
        root: 'www',
        livereload: true,
        port: 80
    });
});
