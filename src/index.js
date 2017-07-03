import React from 'react';
import ReactDOM from 'react-dom';
import {IndexComponent} from './component/index/indexComponent';
import {ContactUsComponent} from './component/contactus/ContactUsComponent';
import {InvalidComponent} from './component/invalid/InvalidComponent';
import {FeedBackComponent} from './component/feedback/FeedBackComponent';
import {nav} from './static/script/plugins/nav.js'
import { Slider } from './static/script/plugins/Slider.js';
import $ from 'jquery';
import {  BrowserRouter,Route,Link,Switch  } from 'react-router-dom';

//npm install jquery --save
//mpm install swipe --save
//npm install -S react-router
//npm install react-router --save
//npm install react-router-dom  --save
//npm install --save isomorphic-fetch es6-promise(superagent代替)
//npm install superagent

//import $ from 'jquery'

//import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    (<BrowserRouter>
        <div>
            <Route exact path="/" component={IndexComponent}/>
            <Route exact path="/index" component={IndexComponent}/>
            <Route exact path="/contactus" component={ContactUsComponent}/>
            <Route exact path="/invalid" component={InvalidComponent}/>
            <Route exact path="/feedback" component={FeedBackComponent}/>
        </div>
    </BrowserRouter>)
    , document.getElementById('root'));

nav();
var slider1 = new Slider();
slider1.Init();
///屏幕大小发生改变时触发
$(window).resize(function () {
    slider1.HanderIn();
    slider1.HanderOut();
});
