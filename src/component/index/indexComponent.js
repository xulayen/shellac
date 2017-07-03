import React, { Component } from 'react';
import start from '../../static/images/start.png';
import animotion from '../../static/images/animation_1.gif';
import '../../static/css/swipe.css'
import '../../static/css/front.css'
import '../../static/css/index.css'
import '../../static/css/select.css'
import {HeaderComponent} from '../HeaderComponent';
import {BannerComponent} from '../BannerComponent';
import { ContactComponent } from '../ContactComponent';
import { CopyRightComponent } from '../CopyRightComponent';
import  request from 'superagent';

//http://www.open-open.com/lib/view/open1481164240760.html
//http://visionmedia.github.io/superagent/


class IndexComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            country: 'us',
            language: 'en',
            digitcode: "",
            realperson: '0'

        }
    }


    handleData(e) {
        var eleId = e.target.id;
        if (eleId == 'label' || eleId == 'pageSlide') {
            if (this.captcha.value == '1') {
                this.setState({
                    realperson: '1'
                })
            }
        } else if (eleId == 'txtCode') {
            this.setState({
                digitcode: e.target.value
            })
        }
    }


    handleSubmit(event) {
        event.preventDefault();
        request
            .post('http://10.20.26.19/shell2/Ajax/FWAcCode.ashx')
            .type('form')
            .send({
                language: 'en',
                country: 'us',
                channelType: 'W',
                channel: '1',
                accode: '11111111111111111'
            })
            .end(function (err, res) {
                console.log(err)
                console.log(res)
            });
    }


    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillUnmount() {
        console.log(2)
    }

    render() {
        return (
            <div className="main">
                <nav>
                    <HeaderComponent/>
                </nav>
                <div className="layer_main">
                    <div className="banner">
                        <BannerComponent/>
                    </div>
                    <form className="container" onSubmit={this.handleSubmit.bind(this)} action method="post" acceptCharset="UTF-8">
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
                                    </div>
                                    <div className="countryContainer1 none">


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
                                    <input id="txtCode" type="text" onChange={this.handleData.bind(this)} placeholder="Scan the QR code to skip manual input" className="inpt"
                                        maxLength="16" value={this.state.digitcode} />
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
                                        <div id="slider" onMouseMove={this.handleData.bind(this)} id="slider" className="slider left">
                                            <div id="pageSlide">
                                                <input id="captcha" className="valid" type="hidden" ref={(captcha)=>
                                                    this.captcha = captcha
                                                    }  value="0"/>
                                                <span id="label" className="label"></span>
                                                <span id="lableTip">SLIDE to confirm you are human</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cnt1_right">
                                    <input type="submit" value="Submit" className="sub"/>
                                </div>
                                <div className="clear">
                                </div>
                            </div>
                            <div className="contact">
                                <ContactComponent/>
                            </div>
                            <div className="t_url">
                                <CopyRightComponent/>
                            </div>
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
        )
    }

}


export {IndexComponent}