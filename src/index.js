import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/swipe.css'
import './static/css/front.css'
import './static/css/index.css'
import './static/css/select.css'

//npm install jquery --save
//import $ from 'jquery'

//import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import {FrameComponent} from './component/FameComponent.js';
import {HeaderComponent} from './component/HeaderComponent';
import {BannerComponent} from './component/BannerComponent';
import {CntLeft} from './component/index/cntLeftComponent';
import {CntRightComponent} from  './component/index/cntRightComponent';
import { Cnt1LeftComponent } from './component/index/cnt1LeftComponent';
import { Cnt1RightComponent } from './component/index/cnt1RightComponent';
import { ContactComponent } from './component/ContactComponent';
import { CopyRightComponent } from './component/CopyRightComponent';
import {IndexComponent} from './component/index/indexComponent';


import {nav} from './static/script/plugins/nav.js'
import { Slider } from './static/script/plugins/Slider.js';
import $ from 'jquery';

ReactDOM.render(
    <FrameComponent
        nav={
            <HeaderComponent/>
            }

        banner={
            <BannerComponent/>
            }

        cntLeft={
            <CntLeft/>
            }

        cntRight={
            <CntRightComponent/>
            }

        cnt1Left={
            <Cnt1LeftComponent />
            }

        cnt1Right={
            <Cnt1RightComponent/>
            }

        contact={
            <ContactComponent/>
            }

        copyright={
            <CopyRightComponent/>
            }
    />
    , document.getElementById('root'));

nav();

var slider1 = new Slider();
slider1.Init();
///屏幕大小发生改变时触发
$(window).resize(function () {
    slider1.HanderIn();
    slider1.HanderOut();
});
