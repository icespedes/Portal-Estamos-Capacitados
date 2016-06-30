var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');


/*Esta tarea toma el archivo sass index, lo interpreta, lo convierte en app.css y lo deja en public*/
gulp.task('styles', function(){
	gulp
		.src('app.scss')
		.pipe(sass())
		.pipe(rename('app.css'))
		.pipe(gulp.dest('css/'));
});

gulp.task('watch', function() {
  gulp.watch('app.scss', ['styles']);
});

