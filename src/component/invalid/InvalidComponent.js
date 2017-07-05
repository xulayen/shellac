import React, { Component } from 'react';
import '../../static/css/swipe.css'
import '../../static/css/front.css'
import '../../static/css/index.css'
import '../../static/css/select.css'
import imgVerified from '../../static/images/oil_2.png';
import imgExpired from '../../static/images/oil_1.png';
import imgInvalid  from '../../static/images/oil_3.png';
import {HeaderComponent} from '../HeaderComponent';
import { ContactComponent } from '../ContactComponent';
import { CopyRightComponent } from '../CopyRightComponent';
import loadingImg from '../../static/images/gif/loading.gif';
import  request from 'superagent';
import {Link} from 'react-router';

function Dts(props) {
    if (props.packsize || props.productname || props.productdate || props.batchnum) {
        return ( <div className="result_message">
            <div className="message_left">
                <p>Pack size:</p>
                <p>Product name:</p>
                <p>Product date:</p>
                <p>Batch number:</p>
            </div>
            <div className="message_right">
                <p>{props.packsize}</p>
                <p>{props.productname}</p>
                <p>{props.productdate}</p>
                <p>{props.batchnum}</p>
            </div>
        </div>);
    }
    return (<span></span>);
}

class InvalidComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            ResponseText: "",
            show: {"display": "block"},
            imgTip: '',
            result: '',
            resultContent: '',
            notice1: '',
            notice2: '',
            dts: {}
        };
    }

    componentWillMount() {
        console.log("componentWillMount");
        var _self = this;
        request
            .post('http://10.20.26.19/shell2/Ajax/FWAcCode.ashx')
            .type('form')
            .send({
                language: 'en-us',
                country: 'CN',
                channelType: 'W',
                channel: '10',
                accode: this.props.routeParams.code
            })
            //.end(function (err, res) {
            //    _self.setState({
            //        ResponseText: res.text
            //    })
            //
            //});
            .then(function (res) {
                console.log(res)

                _self.setState({
                    ResponseText: res.text
                })

                _self.setState({
                    show: {"display": "none"}
                });

                var img = '', result = '';
                if ((res.text.split('^')[1] == '10020401')) {
                    img = imgVerified;
                    result = " Code verified";
                } else if ((res.text.split('^')[1] == '10020402')) {
                    img = imgExpired;
                    result = " Code verified";
                } else {
                    img = imgInvalid;
                    result = "Code invalid";
                }
                var n = ('' + (res.text.split('^')[2]) + '').split('|');
                console.log(res.text)//{PackSize:1L-5L,ProductName:,ProductionDate:,BatchNumber:}

                var dts = {};
                if (n.length > 1 && n[2].indexOf('}') > -1) {
                    var arrayDts = n[2].replace('{', '').replace('}', '').split(',');
                    for (var i in arrayDts) {
                        dts[arrayDts[i].split(':')[0]] = arrayDts[i].split(':')[1];
                    }
                }
                _self.setState({
                    imgTip: img,
                    result: result,
                    resultContent: n[0],
                    notice1: n.length > 1 && n[2].indexOf('}') < -1 ? n[2] : '',
                    notice2: n.length > 2 ? n[3] : '',
                    dts: dts
                })

            }
            ,
            function (error) {
                alert("filad" + error)
            }
        )
        ;
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }


    render() {
        return (
            <div>
                <div id="loading-mask" style={this.state.show} className="loading-mask none">
                </div>
                <div id="loading" style={this.state.show} className="loading none">
                    <img src={loadingImg} />
                </div>
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
                                {this.state.result}
                                </h2>
                                <p>
                                    {this.state.resultContent}
                                </p>
                                <div className="subbtn stt">
                                    <p>
                                        您的 16 位防伪码：</p>
                                    <p id="resultCode">
                                    {this.props.routeParams.code}</p>


                                </div>
                            </div>
                            <div className="mainbtn">
                                <img src={this.state.imgTip} alt="oil"/>
                            </div>
                        </div>
                    </div>
                    <div className="cn_main">
                        <div className="cnt ctt">
                            <div className="cnt ctt">
                                <div className="cnt1_left">
                                    <Dts
                                        packsize={this.state.dts.PackSize}
                                        productname={this.state.dts.ProductName}
                                        productdate={this.state.dts.ProductionDate}
                                        batchnum={this.state.dts.BatchNumber}
                                    />
                                    <div className="result_label">
                                        <p>Understand label features</p>
                                        <p style={{background: "#e41e1b"}}>Feedback</p>
                                    </div>
                                </div>
                                <div className="cnt1_right">
                                    <div className="err_replay">
                                        <p> {this.state.notice1}</p>
                                        <p> {this.state.notice2}</p>
                                    </div>
                                    <Link to="/">
                                        <input type="submit" value="Check another product" className="sub1" style={{marginTop: "60px"}}/>
                                    </Link>
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
            </div>
        )
    }


}


export {InvalidComponent}