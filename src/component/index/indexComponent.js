import React, { Component } from 'react';
import '../../static/css/swipe.css'
import '../../static/css/front.css'
import '../../static/css/index.css'
import '../../static/css/select.css'
import {FrameComponent} from '../FameComponent.js';
import {HeaderComponent} from '../HeaderComponent';
import {BannerComponent} from '../BannerComponent';
import {CntLeft} from '../index/cntLeftComponent';
import {CntRightComponent} from  '../index/cntRightComponent';
import { Cnt1LeftComponent } from '../index/cnt1LeftComponent';
import { Cnt1RightComponent } from '../index/cnt1RightComponent';
import { ContactComponent } from '../ContactComponent';
import { CopyRightComponent } from '../CopyRightComponent';


class IndexComponent extends React.Component {


    onsubmit(){



    }
    render() {

        return (

            <FrameComponent onsubmit={this.onsubmit.bind(this)}
                nav={
                    <HeaderComponent/>
                    }

                WELCOME={
                    'WELCOME'
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

                REAL={
                    'Real person confirmation'
                    }
                cnt1Left={
                    <Cnt1LeftComponent />
                    }

                cnt1Right={
                    <Cnt1RightComponent onsubmit={this.onsubmit.bind(this)} />
                    }

                contact={
                    <ContactComponent/>
                    }

                copyright={
                    <CopyRightComponent/>
                    }
            />

        )

    }

}


export {IndexComponent}