gulp = require 'gulp'

gulp.task 'vendor-font', (done) ->
  gulp.src [
    'bower_components/bootstrap/fonts/*'
  ]
  .pipe gulp.dest('public/fonts')
  .on 'end', done
  return
