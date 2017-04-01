var gulp = require('gulp'),
    babel = require('gulp-babel');

gulp.task('default', function() {  
  gulp.run('taskES6');
});

gulp.task('taskES6', function(){
    gulp.src('./packages/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./lib/packages/'));
});