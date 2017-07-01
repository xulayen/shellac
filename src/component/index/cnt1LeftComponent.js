import React, { Component } from 'react';


class Cnt1LeftComponent extends React.Component {
// hasslider="Thank you！"

    constructor(props) {

        super(props);

    }

    CLICK() {
        console.log(this.captcha.value)
    }

    render() {

        return (

            <div className="slide_cnt index-below-action">
                <div id="slider" onMouseMove={this.CLICK.bind(this)} onTouchMove={this.CLICK.bind(this)} className="slider left">
                    <div id="pageSlide">
                        <input id="captcha"  className="valid" ref={(resf)=>(this.captcha = resf)} type="hidden" value="0" />
                        <span id="label" className="label"></span>
                        <span id="lableTip" >SLIDE to confirm you are human</span>
                    </div>
                </div>
            </div>

        )

    }

}

export { Cnt1LeftComponent}