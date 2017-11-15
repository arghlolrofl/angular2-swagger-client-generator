const gulp = require('gulp');
const ts = require('gulp-typescript');
const del = require('del');

gulp.task('default', ['clean', 'copyTemplates', 'copyLib', 'copySrc']);

gulp.task('clean', function() {
  return del(['dist']);
});

gulp.task('copyTemplates', function() {
  return gulp.src('src/**/*.mustache').pipe(gulp.dest('dist'));
});

gulp.task('copyLib', function() {
  return gulp.src('src/lib/generator.js').pipe(gulp.dest('dist/lib'));
});

gulp.task('copySrc', function() {
  return gulp.src('src/**/*.ts').pipe(ts({project: 'tsconfig.json'})).pipe(gulp.dest('dist'));
});

