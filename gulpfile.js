const gulp = require('gulp');
const sass = require('gulp-sass');
const phpConnect = require('gulp-connect-php');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');

//Compile scss into css
function style(){
return gulp.src('./src/scss/style.scss')
.pipe(sass().on('error', sass.logError))
.pipe(autoprefixer())
.pipe(gulp.dest('./assets/css'))
.pipe(browserSync.stream());
}

//Compile scss into css
function ComponentStyle(){
    return gulp.src('./src/scss/vendor.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream());
    }

function Script(){
    return gulp.src('./src/js/script.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./assets/js'))
    .pipe(uglify())
    .pipe(concat('script.min.js')) 
    .pipe(gulp.dest('./assets/js'));
}

function pluginScript(){
    return gulp.src([
        './src/components/jquery/jquery.js', './src/components/AOS/aos.js'
    ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./assets/js'))
    .pipe(uglify())
    .pipe(concat('vendor.min.js')) 
    .pipe(gulp.dest('./assets/js'));
}

function image(){
    return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./assets/images'));
}

function fonts(){
    return gulp.src('./src/fonts/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./assets/fonts'));
}

// function connectsync() {
//     phpConnect.server({
//         port: 8000,
//         keepalive: true,
//         base: "."
//     }, function (){
//         browsersync({
//             proxy: '127.0.0.1:8000'
//         });
//     });
// }

// function browserSyncReload(done) {
//     browsersync.reload();
//     done();
// }

function watch(){
    browserSync.init(null, {
        proxy: 'localhost/prempal-ui'
        // server: {
        //     proxy: 'localhost/prampal-ui'
        // }
    });
    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./**/*.php').on('change', browserSync.reload);
    gulp.watch('./src/js/**/*.js', Script).on('change', browserSync.reload);
    gulp.watch('./src/images/*', image).on('change', browserSync.reload);
    gulp.watch('./src/fonts/*', fonts);
}

// exports.style = style;
// exports.script = script;
// exports.watch = watch;

exports.default = gulp.series(
    gulp.parallel(ComponentStyle, style, Script, image, fonts, pluginScript),
     watch);
