const gulp = require('gulp');
const scss = require('gulp-sass');

//Compile SASS
gulp.task('scss', () => {
	return gulp.src('./scss/*.scss')
	  .pipe(scss())
	  .pipe(gulp.dest('./src/'))
})

// Watch file for cahnges
gulp.task('watch', () => {
	gulp.watch('./scss/**/*.scss', ['scss'])
})

gulp.task('default', ['watch'])