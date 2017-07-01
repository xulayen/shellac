import React, { Component } from 'react';
import start from '../../static/images/start.png'

class CntLeft extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (

            <div>
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

        )

    }

}


export {CntLeft}



