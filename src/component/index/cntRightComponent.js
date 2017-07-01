import React, { Component } from 'react';
import animotion from '../../static/images/animation_1.gif';

class CntRightComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <p>
                    Enter 16-digit Anti-Couterfeit code:</p>
                <p style={{fontWeight:"blod"}}>
                    PLEASE UNCOVER LABEL to find
                    <br/>
                    16 digit Anti-Counterfeit Code </p>
                <input type="text" placeholder="Scan the QR code to skip manual input" className="inpt" maxLength="16" />
                <p className="err_tip">
                    ERROR! You have entered an incorrect code.(Please try again)</p>
                <div className="gif">
                    <img src={animotion} />
                </div>
            </div>

        )

    }

}


export {CntRightComponent}