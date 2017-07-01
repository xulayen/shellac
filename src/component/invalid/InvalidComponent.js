import React, { Component } from 'react';
import '../../static/css/swipe.css'
import '../../static/css/front.css'
import '../../static/css/index.css'
import '../../static/css/select.css'
import oil_3 from '../../static/images/oil_2.png';
import {HeaderComponent} from '../HeaderComponent';
import { ContactComponent } from '../ContactComponent';
import { CopyRightComponent } from '../CopyRightComponent';

class InvalidComponent extends React.Component {

    render() {
        return (
            <div className="main">
                <nav>
                    <div className="nav">
                        <HeaderComponent/>
                    </div>
                </nav>
                <div className="banner">
                    <div className="ban-slide">
                        <div className="inner">
                            <h2 className="red_title">
                                数码无效</h2>
                            <p>

                                此数码不存在，请检查标签，确认数码是否输入正确，然后再试一次。
                            </p>
                            <div className="subbtn stt">
                                <p>
                                    您的 16 位防伪码：</p>
                                <p id="resultCode">
                                    1111 1111 1111 1111</p>
                            </div>
                        </div>
                        <div className="mainbtn">
                            <img src={oil_3} alt="oil"/>
                        </div>
                    </div>
                </div>
                <div className="cn_main">
                    <div className="cnt ctt">
                        <div className="cnt ctt">
                            <div className="cnt1_left">
                                <div className="result_message">
                                    <div className="message_left">
                                        <p>Pack size:</p>
                                        <p>Product name:</p>
                                        <p>Product date:</p>
                                        <p>Batch number:</p>
                                    </div>
                                    <div className="message_right">
                                        <p>4L</p>
                                        <p>Shell Helix HX7 10w-50</p>
                                        <p>2017-12-12</p>
                                        <p>10717137C60220141009</p>
                                    </div>
                                </div>
                                <div className="result_label">
                                    <p>Understand label features</p>
                                    <p style={{background: "#e41e1b"}}>Feedback</p>
                                </div>
                            </div>
                            <div className="cnt1_right">
                                <div className="err_replay">
                                    <p>Please be aware of inferior counterfeit products</p>
                                    <p>Please purchase from Authorised Shell retailers only.If this pack has been tampered with in any way.Please report to Shell using the Feedback button or call your local Shell Lubricant office for further assistance.</p>
                                </div>

                                <input type="submit" value="Check another product" className="sub1" style={{marginTop: "60px"}}/>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="contact">
                        <ContactComponent/>
                    </div>
                    <div className="t_url">
                        <CopyRightComponent/>
                    </div>
                </div>
            </div>
        )
    }


}


export {InvalidComponent}