import React, { Component } from 'react';
import banner1 from '../../static/images/banner/banner_1.png';
import banner2 from '../../static/images/banner/banner_2.png';
import banner3 from '../../static/images/banner/banner_3.png';
import banner4 from '../../static/images/banner/banner_4.png';
import banner5 from '../../static/images/banner/banner_5.png';
import banner6 from '../../static/images/banner/banner_6.png';
import start from '../../static/images/start.png'
import animotion from '../../static/images/animation_1.gif';

class IndexComponent extends React.Component {

    render() {

        return (

            <div>
                <div className="gif_mask none">
                </div>
                <div className="main">
                    <nav>
                        <div className="nav">
                            <div className="logo">Shell Anti-Counterfeit System</div>
                            <div id="btn" className="btn">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div id="navbar" className="navbar">
                                <ul className="layer_clcik">
                                    <li>
                                        <a href="#">Understand label features</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="layer_main">
                        <div className="banner">
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
                        </div>
                        <form className="container" action method="post" acceptCharset="UTF-8">
                            <div className="cn_main">
                                <h2 className="title">
                                    WELCOME</h2>
                                <div className="cnt">
                                    <div className="cnt_left">
                                        <p className="text">
                                            <span>Thank you for purchasing a Shell Lubricants Product.</span>
                                            <span>Please use our
                                                Anti-Counterfeit system to verify its authenticity.</span>
                                        </p>
                                        <div className="u_sle">
                                            <p className="list_title">
                                                <span>Select Country</span>
                                                <span>Select Language</span>
                                            </p>
                                            <div className="select_country">
                                                <div className="country_left">
                                                    <div className="select_left" id="_country">
                                                        <i className="iconfont">&#xe502;</i>
                                                    </div>
                                                    <p className="country_img">
                                                        <img src={start} />
                                                    </p>
                                                    <p className="country" id="count">
                                                        China</p>
                                                    <input type="hidden" value="" id="currentCountry"/>
                                                </div>
                                                <div className="country_right">
                                                    <div className="select_left" id="_language">
                                                        <i className="iconfont">&#xe611;</i>
                                                    </div>
                                                    <p className="select_language">
                                                        Mandarin</p>
                                                    <input type="hidden" value="" id="currentLanguage"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="countryContainer none">
                                            <ul className="select_flag" id="flags">
                                                <li>
                                                    <img src="static/images/start.png" />
                                                    China</li>
                                                <li>
                                                    <img src="static/images/afh.png" />
                                                    Colombia</li>
                                                <li>
                                                    <img src="static/images/ymny.png" />
                                                    Indonesia</li>
                                                <li>
                                                    <img src="static/images/yd.png" />
                                                    Malaysia</li>
                                                <li>
                                                    <img src="static/images/start.png" />
                                                    Pakistan</li>
                                                <li>
                                                    <img src="static/images/afh.png" />
                                                    Russia</li>
                                                <li>
                                                    <img src="static/images/ymny.png" />
                                                    Argentina</li>
                                                <li>
                                                    <img src="static/images/yd.png" />
                                                    Brazil</li>
                                                <li>
                                                    <img src="static/images/start.png" />
                                                    Thailand</li>
                                                <li>
                                                    <img src="static/images/afh.png" />
                                                    Vietnam</li>
                                                <li>
                                                    <img src="static/images/ymny.png" />
                                                    Turkey</li>
                                                <li>
                                                    <img src="static/images/yd.png" />
                                                    Arabiac</li>
                                                <li>
                                                    <img src="static/images/ymny.png" />
                                                    伊拉克</li>
                                                <li>
                                                    <img src="static/images/afh.png" />
                                                    Казахстан</li>
                                                <li>
                                                    <img src="static/images/ymny.png" />
                                                    South Africa</li>
                                            </ul>
                                        </div>
                                        <div className="countryContainer1 none">
                                            <ul id="_select">
                                                <li>Mandarin</li>
                                                <li>Spanish</li>
                                                <li>Bahasa Indonesia</li>
                                                <li>Urdu</li>
                                                <li>Russian</li>
                                                <li>Spanish</li>
                                                <li>Portuguese</li>
                                                <li>Thai</li>
                                                <li>Vietnamese</li>
                                                <li>Turkish</li>
                                                <li>Arabia</li>
                                                <li>阿拉伯语</li>
                                                <li>俄罗斯语</li>
                                                <li>English</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="cnt_right">
                                        <p>
                                            Enter 16-digit Anti-Couterfeit code:</p>
                                        <p style={{fontWeight: "bold"}}>
                                            PLEASE UNCOVER LABEL to find
                                            <br/>
                                            16 digit Anti-Counterfeit Code
                                        </p>
                                        <input type="text" placeholder="Scan the QR code to skip manual input" className="inpt"
                                            maxLength="16" />
                                        <p className="err_tip">
                                            ERROR! You have entered an incorrect code.(Please try again)</p>
                                        <div className="gif">
                                            <img src={animotion} />
                                        </div>
                                    </div>
                                    <div className="clear">
                                    </div>
                                </div>
                                <div className="cnt1">
                                    <p>
                                        Real person confirmation</p>
                                    <div className="cnt1_left">
                                        <div className="slide_cnt index-below-action">
                                            <div id="slider" className="slider left">
                                                <div id="pageSlide">
                                                    <input id="captcha" className="valid" type="hidden"  value="0"/>
                                                    <span id="label" className="label"></span>
                                                    <span id="lableTip">SLIDE to confirm you are human</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cnt1_right">
                                        <input type="button" value="Submit" className="sub"  />
                                    </div>
                                    <div className="clear">
                                    </div>
                                </div>
                                <p className="contact">
                                    <a href="contact.html">Contact us |</a>
                                    <a href="#">Privacy Policy | </a>
                                    <a href="#">
                                        Terms  Conditions</a>
                                </p>
                                <p className="t_url">
                                    <span>&copy; 2014 Shell.All rights reserved.</span>
                                    <span>
                                        <a href="http://www.ac.shell.com">
                                            www.ac.shell.com</a>
                                    </span>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className="pop_layer none">
                        <img src="static/images/gif_1.GIF" />
                    </div>
                    <div className="pop_layer1 none">
                        <img src="static/images/gif_1.GIF" />
                    </div>
                </div>
            </div>

        )

    }

}


export {IndexComponent}