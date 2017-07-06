/**
 * 导入工具包 require('node_modules里对应模块')
 *  require('gulp')
 *
 * 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
 * gulp.task(name[, deps], fn)
 *
 * 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组)
 * gulp.src(globs[, options])
 *
 * 处理完后文件生成路径
 * gulp.dest(path[, options])
 *
 * 该任务调用的模块
 * pipe
 *
 * **/

var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less'),//编译Less
    gulpif = require('gulp-if'),//if判断，用来区别生产环境还是开发环境的
    cssmin = require('gulp-minify-css'),//压缩css
    imagemin = require('gulp-imagemin'),//图片压缩
    rename = require('gulp-rename'),//文件重命名
    concat = require('gulp-concat'),//文件合并
    rev = require('gulp-rev'),//更改版本号
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify'),//混淆js
    fileConfig = require('./FileConfig');//基础配置


//编译Less并且压缩改名*.min.css
gulp.task('Less', function () {
    gulp.src(fileConfig.src.Less) //该任务针对的文件
        .pipe(rename({suffix: '.min'}))
        .pipe(less()) //该任务调用的模块
        .pipe(cssmin()) //该任务调用的模块
        .pipe(gulp.dest(fileConfig.output.dist + '/css')); //将会在src/css下生成index.css
});

//压缩Css改名*.min.css
gulp.task('Css', function () {
    gulp.src(fileConfig.src.Css)
        .pipe(rename({suffix: '.min'}))
        .pipe(cssmin())
        .pipe(gulp.dest(fileConfig.output.dist + '/css'))
});

//压缩合并Css改名*.min.css
gulp.task('CssConcat', function () {
    gulp.src(fileConfig.src.Css)
        .pipe(rename({suffix: '.min'}))
        .pipe(cssmin())
        .pipe(concat(fileConfig.src.CssConcatName))
        .pipe(gulp.dest(fileConfig.output.dist + '/css'))
});

gulp.task('Js', function () {
    return gulp.src(fileConfig.src.Js)
        .pipe(gulp.dest(fileConfig.output.dist + '/script'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(fileConfig.output.dist + '/script'))
});

//压缩html
gulp.task('Html', function () {
    var options = {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true
    };
    return gulp.src(fileConfig.src.Html)
        .pipe(htmlmin(options))
        .pipe(gulp.dest(fileConfig.output.dist + '/html'))
});


gulp.task('Image', function () {
    return gulp.src(fileConfig.src.Image)
        .pipe(gulpif(fileConfig.evr.develop, imagemin()))
        .pipe(gulp.dest(fileConfig.src.Image + '/images'));
})
gulp.task('default', ['Less', 'elseTask']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务
