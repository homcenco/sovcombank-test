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


// Build html and browserSync
export const buildHtml = () => gulp.src(sources.html)
  .pipe(gulp.dest(dirs.dest))
  .pipe(browserSync.reload({stream: true}));


// Build styles and browserSync
export const buildStyles = () => gulp.src(sources.styles)
  .pipe(sass({
    includePaths: ['node_modules']
  }))
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(gulp.dest(dirs.dest))
  .pipe(browserSync.reload({stream: true}));


// Build scripts and browserSync
export const buildScripts = () => gulp.src(sources.scripts)
  .pipe(babel({presets: ['@babel/env']}))
  .pipe(gulp.dest(dirs.dest))
  .pipe(browserSync.reload({stream: true}));


// Dest folder clean
export const destClean = async () => await deleteAsync([dirs.dest]);


// Development watchers
export const devWatch = () => {
  browserSync({
    server: {
      baseDir: dirs.dest
    }
  })
  gulp.watch(sources.html, buildHtml);
  gulp.watch(sources.styles, buildStyles);
  gulp.watch(sources.scripts, buildScripts);
};


// Development runner
export const dev = gulp.series(destClean, gulp.parallel(buildHtml, buildStyles, buildScripts), devWatch);

// Production runner
export const prod = gulp.series(destClean, gulp.parallel(buildHtml, buildStyles, buildScripts));

export default dev;
