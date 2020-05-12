var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(gulp.dest('css/'));
});

gulp.task('sass:watch', () => {
    gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});
