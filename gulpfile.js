const gulp = require('gulp');
const babel = require('gulp-babel');

const path = {
    entry : ['lib/*.js'],
    output : 'dist'
};

gulp.task('build', function() {
    return gulp.src(path.entry)
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest(path.output));
});

gulp.task('default', ['build']);
