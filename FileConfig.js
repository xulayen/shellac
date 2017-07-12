"use strict";

var path = require('path');

/* 环境信息 */
var evr = {
    develop: true
}


/* src路径 */
var
    src = {

        Tpl: ['tpl/**'],

        Css: ['src/static/css/*.css'],
        CssConcatName: 'main.min.css',

        Js: ['src/static/js/*.js'],

        Html: ['/**.html'],

        Image: ['src/static/images/*.jbg', 'src/static/images/*.png'],

        Less: ['src/static/less/*.less'],

        Watch:['src./*.html','./src/**/*.js'],

        dirReplacements: {
            'src/css': 'css/',
            'src/js': 'js/'
        },
        WebPack:[

        ]

    }

var output = {
    dist: 'dist/static'
}


var FileConfig = function () {
    this.src = src;
    this.evr = evr;
    this.path = path;
    this.output = output;
};

module.exports = new FileConfig();



