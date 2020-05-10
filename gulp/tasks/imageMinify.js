const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

module.exports = function imageMinify() {
    return gulp.src('src/pages/images/**/*.{gif,png,jpg,jpeg,svg,webp,ico}')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest('build/img'))
};
