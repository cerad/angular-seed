var 
  gulp    = require('gulp'),
  concat = require('gulp-concat')
;

gulp.task('scripts', function() {
  gulp.src(
    [
      'app/bower_components/angular/angular.min.js',
      'app/bower_components/angular-route/angular-route.min.js'
    ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('app/js'))
  ;
  gulp.src(
    [
      'app/bower_components/angular/angular.min.js.map',
      'app/bower_components/angular-route/angular-route.min.js.map'
    ])
    .pipe(gulp.dest('app/js'))
  ;
});

gulp.task('default', function() {
  
});