var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var watch = require('gulp-watch');

gulp.task('default', ['watch']);

gulp.task('watch', function() {

    browserSync.init({
        server: {
            baseDir: 'app'
        }
    });

    gulp.watch(['app/*.html', 'app/*.css'], function() {

        browserSync.reload();

    });

});
