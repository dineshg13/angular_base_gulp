var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var ts = require('gulp-typescript');
var sass = require('gulp-sass');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', function () {
    var tsResult = gulp.src("app/**/*.ts") // or tsProject.src() 
        .pipe(tsProject());

    return tsResult.js.pipe(gulp.dest('dist')).pipe(browserSync.stream());
});


// Static Server + watching scss/html files
gulp.task('serve', [], function () {

    browserSync.init({
        server: "./"
    });
    gulp.watch("app/**/*.ts", ['scripts']);
    gulp.watch("./**/*.html").on('change', browserSync.reload);
    gulp.watch("app/scss/*.scss", ['sass']);

});

gulp.task('sass', function () {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['scripts','sass','serve']);

