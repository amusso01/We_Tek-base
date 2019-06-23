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
        [ paths.sass + '/**/**/*.scss'],
        series(sassTask)
    )
    watch(
        [paths.jssrc + '/*.js'],
        series(jsTask)
    )
}


// Default task
exports.run = series(
    parallel(sassTask ,jsTask ),
    parallel(watchTask, serve)
)