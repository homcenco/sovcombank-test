// Imports
import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import csso from 'gulp-csso';
import htmlmin from 'gulp-htmlmin';
import gulpSass from 'gulp-sass';
import browserSync from 'browser-sync';
import uglify from 'gulp-uglify';
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
  images: `${dirs.src}/**/*.+(svg|jpg|png)`,
  html: `${dirs.src}/**/*.html`
};


// Build html and browserSync
export const buildHtml = () => gulp.src(sources.html)
  .pipe(htmlmin({
    collapseWhitespace: true,
    removeComments: true
  }))
  .pipe(gulp.dest(dirs.dest))
  .pipe(browserSync.reload({stream: true}));


// Build images and browserSync
export const buildImages = () => gulp.src(sources.images)
  .pipe(gulp.dest(dirs.dest))
  .pipe(browserSync.reload({stream: true}));


// Build styles and browserSync
export const buildStyles = () => gulp.src(dirs.src + '/css/main.scss')
  .pipe(sass.sync({
    outputStyle: 'expanded',
    precision: 10,
    includePaths: [
      'node_modules',
      sources.styles
    ],
    onError: console.error.bind(console, 'Sass error:')
  }))
  .pipe(autoprefixer({
    overrideBrowserslist: [
      "> 0.5%, last 100 versions"
    ],
    cascade: false
  }))
  .pipe(csso())
  .pipe(gulp.dest(dirs.dest + '/css'))
  .pipe(browserSync.reload({stream: true}));


// Build scripts and browserSync
export const buildScripts = () => gulp.src(sources.scripts)
  .pipe(babel({presets: ['@babel/env']}))
  .pipe(concat('js/main.js'))
  .pipe(uglify())
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
  gulp.watch(sources.images, buildImages);
  gulp.watch(sources.styles, buildStyles);
  gulp.watch(sources.scripts, buildScripts);
};


// Development runner
export const dev = gulp.series(
    destClean,
    gulp.parallel(
      buildHtml, buildImages, buildStyles, buildScripts
    ),
    devWatch
  );

// Production runner
export const prod = gulp.series(
    destClean,
    gulp.parallel(
      buildHtml, buildImages, buildStyles, buildScripts
    )
  );

export default dev;
