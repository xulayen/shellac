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
    clean = require('gulp-clean'),//删除
    htmlmin = require('gulp-htmlmin'),

    gulpWebpack = require('gulp-webpack'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config'),

    connect = require('gulp-connect'),
    runSequence = require('run-sequence').use(gulp),//队列
    uglify = require('gulp-uglify'),//混淆js
    revCollector = require('gulp-rev-collector'),
    watch = require('gulp-watch'),
    fileConfig = require('./FileConfig');//基础配置

// 说明
gulp.task('help', function () {

    console.log('	gulp Less           编译Less并且压缩css');

    console.log('	gulp Css            压缩css');

    console.log('	gulp CssConcat      合并压缩css');

    console.log('	gulp Js             压缩混淆js');

    console.log('	gulp Html           压缩html');

    console.log('	gulp Image          压缩image');

    console.log('	gulp clean          清空dist下的所有目录');

    console.log('	gulp Watch          监视文件是否发生改变，并且自动刷新');

    console.log('	gulp rev            替换路径');

    console.log('	gulp easy_webpack   打包');

    console.log('	gulp default        默认任务');

});


//编译Less并且压缩改名*.min.css
gulp.task('Less', function () {
    gulp.src(fileConfig.src.Less, {base: '.'}) //该任务针对的文件
        .pipe(rename({suffix: '.min'}))
        .pipe(less()) //该任务调用的模块
        .pipe(cssmin()) //该任务调用的模块
        .pipe(gulp.dest(fileConfig.output.dist)); //将会在src/css下生成index.css
});

//压缩Css改名*.min.css
gulp.task('Css', function () {
    gulp.src(fileConfig.src.Css, {base: '.'})
        .pipe(rename({suffix: '.min'}))
        .pipe(cssmin())
        .pipe(rev.manifest())
        .pipe(gulp.dest(fileConfig.output.dist))
});

//压缩合并Css改名*.min.css
gulp.task('CssConcat', function () {
    gulp.src(fileConfig.src.Css, {base: '.'})
        .pipe(rename({suffix: '.min'}))
        .pipe(cssmin())
        .pipe(rev.manifest({merge: true}))
        .pipe(concat(fileConfig.src.CssConcatName))
        .pipe(gulp.dest(fileConfig.output.dist))
});

//压缩混淆js
gulp.task('Js', function () {
    return gulp.src(fileConfig.src.Js, {base: '.'})
        .pipe(gulp.dest(fileConfig.output.dist))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(rev.manifest({merge: true}))
        .pipe(gulp.dest(fileConfig.output.dist))
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
    return gulp.src(fileConfig.src.Html, {base: '.'})
        .pipe(htmlmin(options))
        .pipe(gulp.dest(fileConfig.output.dist))
});

//压缩jpg png
gulp.task('Image', function () {
    return gulp.src(fileConfig.src.Image, {base: '.'})
        .pipe(gulpif(fileConfig.evr.develop, imagemin()))
        .pipe(gulp.dest(fileConfig.output.dist));
});

//清空发布目录
gulp.task('clean', function () {
    return gulp.src('dist/*', {read: false})
        .pipe(clean());
});

gulp.task('Watch', function () {
    watch(fileConfig.src.Watch)
        .pipe(connect.reload())
});

gulp.task('rev', function () {
    return gulp.src(['./rev/**/*.json', './dist/index.html'])
        .pipe(revCollector({
            replaceReved: true,
            dirReplacements: fileConfig.src.dirReplacements
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('easy_webpack', function () {
    gulp.src(fileConfig.src.WebPack)
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(gulp.dest(fileConfig.output.dist))
});


//默认执行
gulp.task('default', function (cb) {
    runSequence('clean', 'Css', 'Js', 'Html', 'Image', 'easy_webpack', cb)
});



