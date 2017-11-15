const gulp = require('gulp');
const ts = require('gulp-typescript');
const del = require('del');

gulp.task('default', ['clean', 'copyTemplates', 'copySrc', 'copyLib']);

gulp.task('clean', function(){
  return del(['dist']);
});

gulp.task('copyTemplates', function(){
  return gulp.src('src/**/*.mustache').pipe(gulp.dest('dist'));
});

gulp.task('copySrc', function(){
  return gulp.src('src/**/*.ts').pipe(ts({project: 'tsconfig.json'})).pipe(gulp.dest('dist'));
});

gulp.task('copyLib', function(){
  return gulp.src('src/lib/**/*.js').pipe(gulp.dest('dist'));
});

