import React, { Component } from 'react';
import '../../static/css/swipe.css'
import '../../static/css/front.css'
import '../../static/css/index.css'
import '../../static/css/select.css'
import {HeaderComponent} from '../HeaderComponent';
import {BannerComponent} from '../BannerComponent';
import { ContactComponent } from '../ContactComponent';
import { CopyRightComponent } from '../CopyRightComponent';


class FeedBackComponent extends React.Component {

    render() {

        return (

            <div>

                <div className="gif_mask none"></div>
                <div className="main">
                    <nav>
                        <div className="nav">
                            <HeaderComponent/>
                        </div>
                    </nav>
                    <div className="banner">
                        <BannerComponent/>
                    </div>
                    <form className="container">
                        <div className="cn_main">
                            <div className="cnt">
                                <div className="cnt_left">
                                    <p className="p_first">Your feedback is important to Shell Lubricants.</p>
                                    <p>Please complete the feedback form.If your know where,when and who you purchased this product from,it is important to tell us.</p>
                                    <p className="p_code">
                                        <span>Anti-Counterfeit code:</span>
                                        0000 0000 0000 0000</p>
                                    <p className="cnt_inpu">
                                        <span>
                                            <strong>Name:</strong>
                                            (Optional)</span>
                                        <input type="text"/>
                                    </p>
                                    <p className="cnt_inpu">
                                        <span>
                                            <strong>Tel:</strong>
                                            (Optional)</span>
                                        <input type="tel" maxlength="11"/>
                                    </p>
                                    <p className="cnt_inpu">
                                        <span>
                                            <strong>Email:</strong>
                                        </span>
                                        <input type="email" placeholder="name@domain.com"/>
                                    </p>
                                </div>
                                <div className="cnt_right">
                                    <p className="p_first">Feedback</p>
                                    <textarea rows="10"></textarea>
                                    <div className="tip_text">
                                        <p>Example:</p>
                                        <p>I have bought one bottle of4L Helix Ultra from Auto-parts city,which is located in Road No.322,Huan Street.The store contract number is 130-0000-0000.And found that the anti-counterfeit code does not exist.Can you help me? Or let me known the nearest Shell authorised store?</p>
                                    </div>
                                    <p className="radio_inpu">
                                        <label>
                                            <input name="aa" type="checkbox" value="" />
                                            I have read and understand the Privacy policy(Please tick)
                                        </label>
                                    </p>
                                    <div className="cnt1 fed_btn">
                                        <input type="button" value="Submit" className="inpu_sub" onclick="location.href='feed_submit.html'"/>
                                        <input type="reset" value="Reset" className="inpu_res"/>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="contact">
                                <ContactComponent/>
                                <p className="t_url">
                                    <CopyRightComponent/>
                                </p>
                            </div>
                        </div>
                    </form>
                    <div className="pop_layer none">
                        <img src="static/images/gif_1.GIF"  />
                    </div>
                    <div className="pop_layer1 none">
                        <img src="static/images/gif_1.GIF"  />
                    </div>
                </div>
            </div>
        )

    }

}


export {FeedBackComponent}