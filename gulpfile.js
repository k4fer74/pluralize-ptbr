var gulp       = require('gulp')
  , source     = require('vinyl-source-stream')
  , browserify = require('browserify')
  , rename     = require('gulp-rename')
  , uglify     = require('gulp-uglify');

gulp.task('browserify', function() {
    return browserify({
        debug: false,
        entries: ['./pluralize-ptbr.js']
    }).bundle()
        .pipe(source('pluralize-words-ptbr.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('compress', function() {
    return gulp.src('./dist/pluralize-words-ptbr.js')
        .pipe(uglify().on('error', function(e){
            console.log(e);
         }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist'));
})

gulp.task('watch', function() {
    return gulp.watch('./pluralize-words-ptbr.js', ['browserify']);
});
