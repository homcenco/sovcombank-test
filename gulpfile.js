// Imports
import gulp from 'gulp';
import babel from 'gulp-babel';
import gulpSass from 'gulp-sass';
import browserSync from 'browser-sync';
import {deleteAsync} from 'del';
import dartSass from 'sass';


// Variables
const dirs = {
  src: 'src',
  dest: 'build'
};
const sass = gulpSass(dartSass);
const sources = {
  styles: `${dirs.src}/**/*.scss`,
  scripts: `${dirs.src}/**/*.js`,
  html: `${dirs.src}/**/*.html`
};


// Start buildHtml
export const buildHtml = () => gulp.src(sources.html)
  .pipe(gulp.dest(dirs.dest))
  .pipe(browserSync.reload({
    stream: true
  }));


// Start buildStyles
export const buildStyles = () => gulp.src(sources.styles)
  .pipe(sass({
    includePaths: ['node_modules']
  }))
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(gulp.dest(dirs.dest))
  .pipe(browserSync.reload({
    stream: true
  }));


// Start buildScripts
export const buildScripts = () => gulp.src(sources.scripts)
  .pipe(babel({presets: ['@babel/env']}))
  .pipe(gulp.dest(dirs.dest))
  .pipe(browserSync.reload({
    stream: true
  }));


// Start destClean
export const destClean = async () => await deleteAsync([dirs.dest]);


// Start devSync
export const devSync = () =>
  browserSync({
    server: {
      baseDir: dirs.dest
    }
  })


// Start devWatch
export const devWatch = () => {
  devSync();
  gulp.watch(sources.html, buildHtml);
  gulp.watch(sources.styles, buildStyles);
  gulp.watch(sources.scripts, buildScripts);
};


// Development
export const dev = gulp.series(destClean, gulp.parallel(buildHtml, buildStyles, buildScripts), devWatch);

// Production
export const prod = gulp.series(destClean, gulp.parallel(buildHtml, buildStyles, buildScripts));

export default dev;
