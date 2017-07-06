"use strict";

var path = require('path');

/* 环境信息 */
var evr = {
    develop: true//develop production
}


/* src路径 */
var
    src = {

        Tpl: ['tpl/**'],

        Css: ['src/static/css/*.css'],
        CssConcatName: 'main.min.css',

        Js: ['src/static/script/plugins/*.js'],

        Html: ['/**.html'],

        Image: ['src/static/images/*.jbg', 'src/static/images/*.png'],

        Less: ['src/static/less/*.less']

    }

var output = {
    dist: 'src/dist',
    plugins: 'src/dist/plugins'
}

/* 模块信息 */

var modules = {

    "t1": {

        src: 't1',

        dest: 't1',

        name: 't1',

        css_files: 'styles/app.less'

    }

};

var FileConfig = function () {
    this.src = src;
    this.evr = evr;
    this.path = path;
    this.modules = modules;
    this.output = output;
};

module.exports = new FileConfig();



