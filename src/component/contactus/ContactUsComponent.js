import React, { Component } from 'react';
import '../../static/css/swipe.css'
import '../../static/css/front.css'
import '../../static/css/index.css'
import '../../static/css/select.css'
import {HeaderComponent} from '../HeaderComponent';
import {BannerComponent} from '../BannerComponent';
import { ContactComponent } from '../ContactComponent';
import { CopyRightComponent } from '../CopyRightComponent';


class ContactUsComponent extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="main">
                <nav>
                    <div className="nav">
                        <HeaderComponent/>
                    </div>
                </nav>
                <div className="layer_main">
                    <div className="banner">
                        <BannerComponent/>
                    </div>
                    <form className="container" method="post" acceptCharset="UTF-8">
                        <div className="container">
                            <div className="cn_main feed_main">
                                <div className="cnt">
                                    <p className="cont_first">China.</p>
                                    <p className="p_code">
                                        <span>Tel:</span>
                                        021-386 25099</p>
                                    <p className="p_code">
                                        <span>Email:</span>
                                        shellac@yesno.com.cn</p>
                                </div>
                            </div>
                        </div>
                        <div className="cn_main">
                            <div className="contact">
                                <ContactComponent/>
                            </div>

                            <div className="t_url">
                                <CopyRightComponent/>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        )
    }

}


export {ContactUsComponent}