import React from 'react';
import ReactDOM from 'react-dom';
import {IndexComponent} from './component/index/indexComponent';
import {ContactUsComponent} from './component/contactus/ContactUsComponent';
import {InvalidComponent} from './component/invalid/InvalidComponent';
import {FeedBackComponent} from './component/feedback/FeedBackComponent';
import {Router,Route,IndexRoute,hashHistory,browserHistory} from 'react-router';

//npm install jquery --save
//mpm install swipe --save
//npm install -S react-router
//npm install --save react-router@3.0.0
//npm install --save isomorphic-fetch es6-promise(superagent代替)
//npm install superagent

//import $ from 'jquery'

//import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    (<Router history={browserHistory}>
        <div>
            <Route path="/" component={IndexComponent}/>
            <Route path="/index" component={IndexComponent}/>
            <Route path="/contactus" component={ContactUsComponent}/>
            <Route path="/invalid/:code" component={InvalidComponent}/>
            <Route path="/feedback" component={FeedBackComponent}/>
        </div>
    </Router>)
    , document.getElementById('root'));

//nav();
//var slider1 = new Slider();
//slider1.Init();
/////屏幕大小发生改变时触发
//$(window).resize(function () {
//    slider1.HanderIn();
//    slider1.HanderOut();
//});
