// initialise modules
const autoprifixer = require('autoprefixer');
const { src, dest, watch, series, parallel  } = require('gulp');
const postcss = require('gulp-postcss');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const webpack = require('webpack-stream');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const server = require('browser-sync').create();
const clean = require('gulp-clean');
const  imagemin = require('gulp-imagemin');
const  imageminJpegtran = require('imagemin-jpegtran');
const  imageminOptiPng = require('imagemin-optipng');
const  imageminSvgo = require('imagemin-svgo');


// Configuration file to keep your code DRY
var cfg = require( './gulpconfig.json' );
var paths = cfg.paths;

// Serve task
function reload(done) {
    server.reload({stream: true});
    done();
}

function serve(done) {
    server.init( cfg.browserSyncWatchFiles, cfg.browserSyncOptions );
    done();
}

// SVG function
function cleanSvg(){
    return src(paths.svg + '/*.svg', {read : false})
        .pipe(clean()
        );
}

function svgTask(){
    return src(paths.svg + '/*.svg')
        .pipe(imagemin([
            imageminSvgo({
                plugins: [
                    {removeViewBox: false},
                    {prefixIds: 'we-tek'},
                    {cleanupIDs : true},
                ]
            })
        ]))
        .pipe(rename({
            prefix : 'svg-',
            extname : '.php'
        }))
        .pipe(dest(paths.svg)
        );
}

// Image 
function imageTaskJpg(){
    return src(paths.imgsrc + '/*.{jpg,jpeg}')
        .pipe(imagemin(
            [imageminJpegtran({progressive: true})],
            {verbose : true}
        ))
        .pipe(dest(paths.img)
        );
}

function imageTaskPng(){
    return src(paths.imgsrc + '/*.png')
        .pipe(imagemin(
            [imageminOptiPng(
                {optimizationLevel: 4})],
                {verbose : true}
        ))
        .pipe(dest(paths.img)
        );
}



// Sass task
function sassTask(){
    return src(paths.sass + '/**/*.scss')
        .pipe(plumber({
            errorHandler: function( err ) {
                console.log( err );
                this.emit( 'end' );
            }
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({ errLogToConsole: true } ))
        .pipe(postcss([ autoprifixer(), cssnano() ]))
        .pipe(rename('theme.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(paths.css))
        .pipe(server.stream()
        );
    
}

// JS task
function jsTask(){
    return src(paths.jssrc + '/*js')
        .pipe(plumber())
        .pipe(webpack({
            mode: 'none'
          }))
        .pipe(sourcemaps.init())
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe( rename( { suffix: '.min' } ) )
        .pipe(sourcemaps.write('.'))
        .pipe(dest(paths.js))
        .pipe(server.stream()
        );
}

// Watch task
function watchTask(){
    watch(
        [paths.imgsrc + '/*.jpg', paths.imgsrc + '/*.jpeg', paths.imgsrc + '/*.png'],
        parallel(imageTaskJpg, imageTaskPng)
    )
    watch(
        [ paths.sass + '/**/**/*.scss'],
        series(sassTask)
    )
    watch(
        [paths.jssrc + '/*.js'],
        series(jsTask)
    )
    watch(
        [paths.svg + '/*.svg'],
        series(svgTask, cleanSvg)
    )
}


// Default task
exports.run = series(
    svgTask,
    cleanSvg,
    imageTaskJpg,
    imageTaskPng,
    parallel(sassTask, jsTask),
    parallel(watchTask, serve)
)

exports.build = series(
    svgTask,
    cleanSvg,
    imageTaskJpg,
    imageTaskPng,
    parallel(sassTask, jsTask),
)