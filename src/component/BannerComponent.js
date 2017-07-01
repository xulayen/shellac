import React, { Component } from 'react';

import banner1 from '../static/images/banner/banner_1.png';
import banner2 from '../static/images/banner/banner_2.png';
import banner3 from '../static/images/banner/banner_3.png';
import banner4 from '../static/images/banner/banner_4.png';
import banner5 from '../static/images/banner/banner_5.png';
import banner6 from '../static/images/banner/banner_6.png';



class BannerComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img src={banner1} />
                    </div>
                    <div className="swiper-slide">
                        <img src={banner2}/>
                    </div>
                    <div className="swiper-slide">
                        <img src={banner3} />
                    </div>
                    <div className="swiper-slide">
                        <img src={banner4} />
                    </div>
                    <div className="swiper-slide layer_img">
                        <img src={banner5} />
                    </div>
                    <div className="swiper-slide layer_img1">
                        <img src={banner6} />
                    </div>
                </div>

                <div className="swiper-button-next">
                    <i className="iconfont">&#xe502;</i>
                </div>
                <div className="swiper-button-prev">
                    <i className="iconfont">&#xe611;</i>
                </div>
            </div>

        )

    }

}

export {BannerComponent};