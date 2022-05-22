const gulp = require('gulp'),
    gulpsass = require('gulp-sass'),
    sass = gulpsass(require('sass'));


gulp.task('watch', async function () {
    gulp.watch('src/components/**/*scss', async function () {
        gulp.src('src/components/**/*scss').pipe(sass()).pipe(gulp.dest('src/css'))
    })
})